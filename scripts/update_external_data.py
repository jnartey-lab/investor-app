#!/usr/bin/env python3
"""
Fetch public Ghana market, investment research, and business-news sources.

The script intentionally uses conservative public-page/RSS fetching with a clear
User-Agent and short timeouts. For production trading data, replace or augment
these connectors with licensed GSE/provider APIs and contractual data feeds.
"""

from __future__ import annotations

import argparse
import email.utils
import html
import json
import re
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


ROOT = Path(__file__).resolve().parents[1]
OUTFILE = ROOT / "data" / "external-sources.json"
NY_TZ = ZoneInfo("America/New_York")
USER_AGENT = "GSE-Investor-Intelligence/1.0 (+https://github.com/jnartey-lab/investor-app)"
BROWSER_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/124.0 Safari/537.36"
)


@dataclass(frozen=True)
class Source:
    name: str
    url: str
    category: str
    kind: str = "html"
    limit: int = 8


SOURCES = [
    Source("Ghana Stock Exchange", "https://gse.com.gh/", "Official market data"),
    Source("GSE Listed Companies", "https://gse.com.gh/listed-companies/", "Official issuer universe"),
    Source("GSE Disclosure Portal", "https://disclosure.gse.com.gh:8443/", "Official disclosures"),
    Source("Bank of Ghana", "https://www.bog.gov.gh/", "Official macro"),
    Source("Bank of Ghana FX Rates", "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/", "Official FX"),
    Source("Ghana Statistical Service", "https://statsghana.gov.gh/", "Official macro"),
    Source("SAS Finance Group Research", "https://www.sasghana.com/brokerage/research", "Investment research"),
    Source("SIC Brokerage Daily Equity Market Report", "https://www.sicbrokerage.com/15/5/daily-equity-market-report", "Investment research"),
    Source("Fitch Ratings", "https://www.fitchratings.com/", "Credit ratings news"),
    Source("Fitch Sovereigns", "https://www.fitchratings.com/sovereigns", "Sovereign credit research"),
    Source("Business & Financial Times", "https://thebftonline.com/feed/", "Business news", "rss"),
    Source("Ghana Business News", "https://www.ghanabusinessnews.com/feed/", "Business news", "rss"),
    Source("Citi Business News", "https://citibusinessnews.com/feed/", "Business news", "rss"),
    Source("MyJoyOnline Business", "https://www.myjoyonline.com/business/feed/", "Business news", "rss"),
    Source("Bloomberg Markets", "https://www.bloomberg.com/markets", "Global markets"),
]


def fetch(url: str) -> tuple[str | None, str | None]:
    user_agent = BROWSER_USER_AGENT if "bloomberg.com" in url else USER_AGENT
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": user_agent,
            "Accept": "text/html,application/rss+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=18) as response:
            charset = response.headers.get_content_charset() or "utf-8"
            return response.read().decode(charset, errors="replace"), None
    except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as exc:
        return None, str(exc)


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def parse_date(value: str | None) -> str | None:
    if not value:
        return None
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=timezone.utc)
        return parsed.astimezone(timezone.utc).isoformat()
    except (TypeError, ValueError):
        return clean_text(value)


def parse_rss(source: Source, content: str) -> list[dict[str, Any]]:
    try:
        root = ET.fromstring(content)
    except ET.ParseError:
        return []

    items = []
    for item in root.findall(".//item")[: source.limit]:
        title = clean_text(item.findtext("title") or "")
        link = clean_text(item.findtext("link") or source.url)
        summary = clean_text(item.findtext("description") or "")
        published = parse_date(item.findtext("pubDate"))
        if title:
            items.append(
                {
                    "title": title,
                    "url": link,
                    "summary": summary[:260],
                    "publishedAt": published,
                    "source": source.name,
                    "category": source.category,
                }
            )
    return items


def parse_html_headlines(source: Source, content: str) -> list[dict[str, Any]]:
    candidates = re.findall(r"<h[1-4][^>]*>(.*?)</h[1-4]>", content, flags=re.I | re.S)
    items = []
    seen = set()
    for raw in candidates:
        title = clean_text(raw)
        if len(title) < 8 or title.lower() in seen:
            continue
        seen.add(title.lower())
        items.append(
            {
                "title": title,
                "url": source.url,
                "summary": "",
                "publishedAt": None,
                "source": source.name,
                "category": source.category,
            }
        )
        if len(items) >= source.limit:
            break
    return items


def extract_indicators(content_by_source: dict[str, str]) -> dict[str, Any]:
    indicators: dict[str, Any] = {}
    gse = content_by_source.get("Ghana Stock Exchange", "")
    bog = content_by_source.get("Bank of Ghana", "")
    gss = content_by_source.get("Ghana Statistical Service", "")
    fx = content_by_source.get("Bank of Ghana FX Rates", "")

    current_match = re.search(
        r"CURRENT\s*\(([^)]+)\)\s*([\d,]+\.\d+)\s*([\d,]+\.\d+)",
        clean_text(gse),
        flags=re.I,
    )
    if current_match:
        indicators["gseIndices"] = {
            "asOf": current_match.group(1),
            "composite": float(current_match.group(2).replace(",", "")),
            "financialStocks": float(current_match.group(3).replace(",", "")),
            "source": "Ghana Stock Exchange",
            "url": "https://gse.com.gh/",
        }

    policy_match = re.search(r"(\d+(?:\.\d+)?)\s+Current Monetary Policy Rate", clean_text(bog), flags=re.I)
    t_bill_match = re.search(r"(\d+(?:\.\d+)?)\s+91-Day Treasury Bill Rate", clean_text(bog), flags=re.I)
    inflation_match = re.search(r"(\d+(?:\.\d+)?)\s+Current inflation rate", clean_text(bog), flags=re.I)
    if policy_match or t_bill_match or inflation_match:
        indicators["bankOfGhana"] = {
            "policyRate": float(policy_match.group(1)) if policy_match else None,
            "tBill91Day": float(t_bill_match.group(1)) if t_bill_match else None,
            "inflation": float(inflation_match.group(1)) if inflation_match else None,
            "source": "Bank of Ghana",
            "url": "https://www.bog.gov.gh/",
        }

    usd_match = re.search(r"US Dollar\s+USDGHS\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)", clean_text(fx), flags=re.I)
    if usd_match:
        indicators["fx"] = {
            "usdGhsBuying": float(usd_match.group(1)),
            "usdGhsSelling": float(usd_match.group(2)),
            "usdGhsMid": float(usd_match.group(3)),
            "source": "Bank of Ghana Daily Interbank FX Rates",
            "url": "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/",
        }

    gss_text = clean_text(gss)
    gss_inflation = re.search(r"CPI Inflation\(YoY\)\s*(\d+(?:\.\d+)?)%", gss_text, flags=re.I)
    gdp_growth = re.search(r"GDP Growth.*?Annual\s*(\d+(?:\.\d+)?)%", gss_text, flags=re.I)
    if gss_inflation or gdp_growth:
        indicators["ghanaStatisticalService"] = {
            "cpiInflationYoy": float(gss_inflation.group(1)) if gss_inflation else None,
            "annualGdpGrowth": float(gdp_growth.group(1)) if gdp_growth else None,
            "source": "Ghana Statistical Service",
            "url": "https://statsghana.gov.gh/",
        }

    return indicators


def build_payload() -> dict[str, Any]:
    now_utc = datetime.now(timezone.utc)
    now_ny = now_utc.astimezone(NY_TZ)
    content_by_source: dict[str, str] = {}
    source_status = []
    news_items = []

    for source in SOURCES:
        content, error = fetch(source.url)
        status = {
            "name": source.name,
            "url": source.url,
            "category": source.category,
            "kind": source.kind,
            "ok": content is not None,
            "error": error,
            "fetchedAt": now_utc.isoformat(),
        }
        source_status.append(status)
        if not content:
            continue
        content_by_source[source.name] = content
        if source.kind == "rss":
            news_items.extend(parse_rss(source, content))
        else:
            news_items.extend(parse_html_headlines(source, content))
        time.sleep(0.5)

    payload = {
        "generatedAt": now_utc.isoformat(),
        "generatedAtEastern": now_ny.isoformat(),
        "schedule": "Daily at 11:00 America/New_York via GitHub Actions",
        "disclaimer": "Public pages and RSS feeds are used for monitoring and source discovery. Use licensed feeds for trading-grade stock data.",
        "indicators": extract_indicators(content_by_source),
        "items": news_items[:80],
        "sources": source_status,
    }
    return payload


def should_run_now() -> bool:
    now = datetime.now(NY_TZ)
    return now.hour == 11


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--enforce-eastern-11am", action="store_true")
    args = parser.parse_args()

    if args.enforce_eastern_11am and not should_run_now():
        print("Skipping: current America/New_York hour is not 11.")
        return 0

    payload = build_payload()
    OUTFILE.parent.mkdir(parents=True, exist_ok=True)
    OUTFILE.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUTFILE.relative_to(ROOT)} with {len(payload['items'])} items.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
