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
GHANA_TZ = ZoneInfo("Africa/Accra")
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
    Source("MyJoyOnline USD GHS Search", "https://www.myjoyonline.com/?s=cedi+dollar", "Public FX fallback", limit=4),
    Source("CurrencyRate USD GHS", "https://usd.currencyrate.today/ghs", "Public FX fallback", limit=4),
    Source("MyJoyOnline GSE Search", "https://www.myjoyonline.com/?s=GSE+Composite+Index", "Public market fallback", limit=4),
    Source("MyJoyOnline Policy Rate Search", "https://www.myjoyonline.com/?s=Ghana+policy+rate", "Public macro fallback", limit=4),
    Source("MyJoyOnline Treasury Bill Search", "https://www.myjoyonline.com/?s=91-day+treasury+bill+rate", "Public macro fallback", limit=4),
    Source("MyJoyOnline Inflation Search", "https://www.myjoyonline.com/?s=Ghana+inflation+rate", "Public macro fallback", limit=4),
    Source("MyJoyOnline GDP Search", "https://www.myjoyonline.com/?s=Ghana+GDP+growth", "Public macro fallback", limit=4),
    Source("Bloomberg Markets", "https://www.bloomberg.com/markets", "Global markets"),
]

PUBLIC_NEWS_FALLBACK_SOURCES = [
    "MyJoyOnline USD GHS Search",
    "CurrencyRate USD GHS",
    "MyJoyOnline GSE Search",
    "MyJoyOnline Policy Rate Search",
    "MyJoyOnline Treasury Bill Search",
    "MyJoyOnline Inflation Search",
    "MyJoyOnline GDP Search",
    "MyJoyOnline Business",
    "Business & Financial Times",
    "Ghana Business News",
    "Citi Business News",
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


def source_url(source_name: str) -> str:
    return next((source.url for source in SOURCES if source.name == source_name), "")


def load_previous_indicators() -> dict[str, Any]:
    if not OUTFILE.exists():
        return {}

    try:
        payload = json.loads(OUTFILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}

    indicators = payload.get("indicators")
    return indicators if isinstance(indicators, dict) else {}


def is_placeholder_page(content: str) -> bool:
    text = clean_text(content).lower()
    return "we apologize for the inconvenience" in text


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


def valid_number(value: str, low: float, high: float) -> float | None:
    try:
        parsed = float(value.replace(",", ""))
    except ValueError:
        return None
    return parsed if low <= parsed <= high else None


def valid_usd_ghs_rate(value: str) -> float | None:
    return valid_number(value, 5, 30)


def fallback_source(source_name: str, basis: str) -> dict[str, str]:
    return {
        "source": f"{source_name} (public fallback)",
        "url": source_url(source_name),
        "sourceType": "public_news_fallback",
        "rateBasis": basis,
    }


def extract_public_news_usd_ghs(text: str) -> dict[str, float | str] | None:
    if not re.search(r"\b(?:dollar|usd)\b", text, flags=re.I):
        return None

    spread_match = re.search(
        r"(?:dollar|usd).{0,160}?buying(?:\s+rate)?(?:\s+(?:of|at))?\s+GH[¢cS]?\s*([\d,.]+)"
        r".{0,160}?selling(?:\s+rate)?(?:\s+(?:of|at))?\s+GH[¢cS]?\s*([\d,.]+)",
        text,
        flags=re.I,
    )
    if spread_match:
        buying = valid_usd_ghs_rate(spread_match.group(1))
        selling = valid_usd_ghs_rate(spread_match.group(2))
        if buying is not None and selling is not None:
            return {
                "usdGhsBuying": buying,
                "usdGhsSelling": selling,
                "usdGhsMid": round((buying + selling) / 2, 4),
                "rateBasis": "public news reported buying/selling",
            }

    single_rate_patterns = [
        r"(?:one\s+)?dollar(?:\s+equals|\s+is\s+selling\s+at|\s+is\s+trading\s+at|\s+trades?\s+at).{0,40}?GH[¢cS]?\s*([\d,.]+)",
        r"(?:current\s+)?exchange\s+rate\s+is\s+([\d,.]+)",
        r"1\s+USD\s*(?:=|equals)\s*([\d,.]+)\s*GHS",
        r"cedi\s+trades?\s+at\s+GH[¢cS]?\s*([\d,.]+)\s+(?:to|per)\s+(?:the\s+)?(?:US\s+)?dollar",
        r"GH[¢cS]?\s*([\d,.]+)\s+(?:to|per)\s+(?:the\s+)?(?:US\s+)?dollar",
    ]
    for pattern in single_rate_patterns:
        match = re.search(pattern, text, flags=re.I)
        if not match:
            continue
        rate = valid_usd_ghs_rate(match.group(1))
        if rate is not None:
            return {
                "usdGhsMid": rate,
                "rateBasis": "public news reported rate",
            }

    return None


def extract_fallback_fx(content_by_source: dict[str, str]) -> dict[str, Any] | None:
    for source_name in PUBLIC_NEWS_FALLBACK_SOURCES:
        content = content_by_source.get(source_name, "")
        if not content:
            continue
        text = clean_text(content)
        extracted = extract_public_news_usd_ghs(text)
        if extracted:
            return {
                **extracted,
                **fallback_source(source_name, str(extracted.get("rateBasis", "public news reported rate"))),
            }
    return None


def extract_fallback_gse_indices(content_by_source: dict[str, str]) -> dict[str, Any] | None:
    for source_name in PUBLIC_NEWS_FALLBACK_SOURCES:
        text = clean_text(content_by_source.get(source_name, ""))
        if not text or not re.search(r"\b(?:GSE|Composite Index|Financial Stocks Index)\b", text, flags=re.I):
            continue

        composite_match = re.search(
            r"(?:GSE\s+)?Composite(?:\s+Index)?.{0,100}?([\d,]+\.\d+)",
            text,
            flags=re.I,
        )
        financial_match = re.search(
            r"(?:GSE\s+)?Financial(?:\s+Stocks)?(?:\s+Index)?.{0,100}?([\d,]+\.\d+)",
            text,
            flags=re.I,
        )
        composite = valid_number(composite_match.group(1), 1000, 100000) if composite_match else None
        financial = valid_number(financial_match.group(1), 1000, 100000) if financial_match else None
        if composite is not None or financial is not None:
            return {
                "composite": composite,
                "financialStocks": financial,
                **fallback_source(source_name, "public news reported market index"),
            }
    return None


def extract_fallback_bank_of_ghana(content_by_source: dict[str, str]) -> dict[str, Any] | None:
    result: dict[str, Any] = {}
    result_source = ""
    for source_name in PUBLIC_NEWS_FALLBACK_SOURCES:
        text = clean_text(content_by_source.get(source_name, ""))
        if not text:
            continue

        policy_match = re.search(
            r"(?:policy rate|monetary policy rate|MPR).{0,80}?(\d+(?:\.\d+)?)\s*%",
            text,
            flags=re.I,
        )
        t_bill_match = re.search(
            r"(?:91-day|treasury bill|t-bill).{0,100}?(\d+(?:\.\d+)?)\s*%",
            text,
            flags=re.I,
        )
        inflation_match = re.search(
            r"(?:inflation|CPI).{0,80}?(\d+(?:\.\d+)?)\s*%",
            text,
            flags=re.I,
        )

        if "policyRate" not in result and policy_match:
            policy = valid_number(policy_match.group(1), 0, 60)
            if policy is not None:
                result["policyRate"] = policy
                result_source = result_source or source_name
        if "tBill91Day" not in result and t_bill_match:
            t_bill = valid_number(t_bill_match.group(1), 0, 80)
            if t_bill is not None:
                result["tBill91Day"] = t_bill
                result_source = result_source or source_name
        if "inflation" not in result and inflation_match:
            inflation = valid_number(inflation_match.group(1), -10, 80)
            if inflation is not None:
                result["inflation"] = inflation
                result_source = result_source or source_name

        if {"policyRate", "tBill91Day", "inflation"}.issubset(result):
            break

    if not result:
        return None
    return {
        **result,
        **fallback_source(result_source, "public news reported macro indicator"),
    }


def extract_fallback_gss(content_by_source: dict[str, str]) -> dict[str, Any] | None:
    result: dict[str, Any] = {}
    result_source = ""
    for source_name in PUBLIC_NEWS_FALLBACK_SOURCES:
        text = clean_text(content_by_source.get(source_name, ""))
        if not text:
            continue

        inflation_match = re.search(
            r"(?:inflation|CPI).{0,80}?(\d+(?:\.\d+)?)\s*%",
            text,
            flags=re.I,
        )
        gdp_match = re.search(
            r"(?:GDP|gross domestic product).{0,120}?growth.{0,80}?(\d+(?:\.\d+)?)\s*%",
            text,
            flags=re.I,
        ) or re.search(
            r"(?:GDP|gross domestic product).{0,120}?(\d+(?:\.\d+)?)\s*%.{0,60}?growth",
            text,
            flags=re.I,
        )

        if "cpiInflationYoy" not in result and inflation_match:
            inflation = valid_number(inflation_match.group(1), -10, 80)
            if inflation is not None:
                result["cpiInflationYoy"] = inflation
                result_source = result_source or source_name
        if "annualGdpGrowth" not in result and gdp_match:
            gdp = valid_number(gdp_match.group(1), -30, 40)
            if gdp is not None:
                result["annualGdpGrowth"] = gdp
                result_source = result_source or source_name

        if {"cpiInflationYoy", "annualGdpGrowth"}.issubset(result):
            break

    if not result:
        return None
    return {
        **result,
        **fallback_source(result_source, "public news reported macro indicator"),
    }


def merge_indicators(previous: dict[str, Any], current: dict[str, Any]) -> dict[str, Any]:
    merged = dict(previous)
    for key, value in current.items():
        if isinstance(value, dict) and isinstance(merged.get(key), dict):
            nested = dict(merged[key])
            current_is_fallback = value.get("sourceType") == "public_news_fallback"
            previous_is_fallback = nested.get("sourceType") == "public_news_fallback"
            if key == "fx" and current_is_fallback:
                merged[key] = {nested_key: nested_value for nested_key, nested_value in value.items() if nested_value is not None}
                continue
            if current_is_fallback and not previous_is_fallback:
                changed = False
                for nested_key, nested_value in value.items():
                    if nested_value is None or nested_key in {"source", "url", "sourceType", "rateBasis"}:
                        continue
                    if nested.get(nested_key) is None:
                        nested[nested_key] = nested_value
                        changed = True
                if changed:
                    nested.update({meta_key: value[meta_key] for meta_key in ("source", "url", "sourceType", "rateBasis") if meta_key in value})
            else:
                nested.update({nested_key: nested_value for nested_key, nested_value in value.items() if nested_value is not None})
            merged[key] = nested
        else:
            merged[key] = value
    return merged


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
    else:
        fallback_gse = extract_fallback_gse_indices(content_by_source)
        if fallback_gse:
            indicators["gseIndices"] = fallback_gse

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
    else:
        fallback_bog = extract_fallback_bank_of_ghana(content_by_source)
        if fallback_bog:
            indicators["bankOfGhana"] = fallback_bog

    fx_text = clean_text(fx)
    usd_match = re.search(
        r"(?:(\d{1,2}\s+[A-Za-z]+\s+\d{4})\s+)?US Dollar\s+USDGHS\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)",
        fx_text,
        flags=re.I,
    )
    if usd_match:
        indicators["fx"] = {
            "asOf": usd_match.group(1),
            "usdGhsBuying": float(usd_match.group(2)),
            "usdGhsSelling": float(usd_match.group(3)),
            "usdGhsMid": float(usd_match.group(4)),
            "source": "Bank of Ghana Daily Interbank FX Rates",
            "url": "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/",
        }
    else:
        fallback_fx = extract_fallback_fx(content_by_source)
        if fallback_fx:
            indicators["fx"] = fallback_fx

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
    else:
        fallback_gss = extract_fallback_gss(content_by_source)
        if fallback_gss:
            indicators["ghanaStatisticalService"] = fallback_gss

    return indicators


def build_payload() -> dict[str, Any]:
    now_utc = datetime.now(timezone.utc)
    now_ghana = now_utc.astimezone(GHANA_TZ)
    content_by_source: dict[str, str] = {}
    previous_indicators = load_previous_indicators()
    source_status = []
    news_items = []

    for source in SOURCES:
        content, error = fetch(source.url)
        if content and is_placeholder_page(content):
            error = "Source returned a placeholder/unavailable page."
            content = None

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

    indicators = merge_indicators(previous_indicators, extract_indicators(content_by_source))

    payload = {
        "generatedAt": now_utc.isoformat(),
        "generatedAtGhana": now_ghana.isoformat(),
        "schedule": "Daily at 11:00 Africa/Accra via GitHub Actions",
        "disclaimer": "Public pages and RSS feeds are used for monitoring and source discovery. Use licensed feeds for trading-grade stock data.",
        "indicators": indicators,
        "items": news_items[:80],
        "sources": source_status,
    }
    return payload


def already_updated_today() -> bool:
    if not OUTFILE.exists():
        return False

    try:
        payload = json.loads(OUTFILE.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return False

    generated_at = payload.get("generatedAtGhana") or payload.get("generatedAt")
    if not isinstance(generated_at, str):
        return False

    try:
        generated_date = datetime.fromisoformat(generated_at).astimezone(GHANA_TZ).date()
    except ValueError:
        return False

    return generated_date == datetime.now(GHANA_TZ).date()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--skip-if-updated-today", action="store_true")
    args = parser.parse_args()

    if args.skip_if_updated_today and already_updated_today():
        print("Skipping: data was already refreshed for today's Africa/Accra date.")
        return 0

    payload = build_payload()
    OUTFILE.parent.mkdir(parents=True, exist_ok=True)
    OUTFILE.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {OUTFILE.relative_to(ROOT)} with {len(payload['items'])} items.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
