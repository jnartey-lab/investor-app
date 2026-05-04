# GSE Investor Intelligence Platform

Professional web application starter for monitoring Ghana Stock Exchange market trends, listed equities, portfolios, research workflow, macro indicators, alerts, and institutional reporting.

This version is a deployable static application built with HTML, CSS, and JavaScript so it can be hosted immediately on GitHub Pages without installing dependencies.

## Real Data Sources

The app now attaches source links directly inside the interface. Publicly verifiable figures and reference links are drawn from:

- Ghana Stock Exchange: https://gse.com.gh/
- GSE Market Watch: https://gsemarketwatch.com/
- GSE Listed Companies: https://gse.com.gh/listed-companies/
- GSE Disclosure Portal: https://disclosure.gse.com.gh:8443/
- Bank of Ghana: https://www.bog.gov.gh/
- Bank of Ghana Daily Interbank FX Rates: https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/
- Ghana Statistical Service: https://statsghana.gov.gh/
- SAS Finance Group Research: https://www.sasghana.com/brokerage/research
- SIC Brokerage Daily Equity Market Report: https://www.sicbrokerage.com/15/5/daily-equity-market-report
- Business & Financial Times RSS: https://thebftonline.com/feed/
- Ghana Business News RSS: https://www.ghanabusinessnews.com/feed/
- Citi Business News RSS: https://citibusinessnews.com/feed/
- MyJoyOnline Business RSS: https://www.myjoyonline.com/business/feed/
- MyJoyOnline public cedi/dollar search fallback: https://www.myjoyonline.com/?s=cedi+dollar
- MyJoyOnline public GSE index search fallback: https://www.myjoyonline.com/?s=GSE+Composite+Index
- MyJoyOnline public Ghana policy rate search fallback: https://www.myjoyonline.com/?s=Ghana+policy+rate
- MyJoyOnline public 91-day Treasury bill search fallback: https://www.myjoyonline.com/?s=91-day+treasury+bill+rate
- MyJoyOnline public Ghana inflation search fallback: https://www.myjoyonline.com/?s=Ghana+inflation+rate
- MyJoyOnline public Ghana GDP growth search fallback: https://www.myjoyonline.com/?s=Ghana+GDP+growth
- Bloomberg Markets: https://www.bloomberg.com/markets
- Fitch Ratings: https://www.fitchratings.com/
- Fitch Sovereigns: https://www.fitchratings.com/sovereigns

Current official public values included in this static build:

- GSE Composite Index: 15,130.52 as of 30 April 2026, sourced from the Ghana Stock Exchange public index performance table.
- GSE Financial Stocks Index: 8,839.41 as of 30 April 2026, sourced from the Ghana Stock Exchange public index performance table.
- Bank of Ghana monetary policy rate: 14.00%.
- Bank of Ghana 91-day Treasury bill rate: 4.8645%.
- Ghana inflation headline: 3.2%, visible on Bank of Ghana and Ghana Statistical Service public indicators.
- Ghana Statistical Service annual GDP growth: 6.0% for 2025.

Stock-level price rows remain a front-end dataset until a licensed GSE feed, approved CSV upload, or official market data provider API is connected. The application labels that status in the Stock Detail view.

## Daily Data Update

The repository includes a GitHub Actions workflow at `.github/workflows/update-data.yml`.

It runs every day at 11:00 AM Africa/Accra and writes refreshed public-source data to:

```text
data/external-sources.json
```

The workflow is scheduled at 11:00 UTC because Ghana time is UTC year-round. The Python script checks the current `Africa/Accra` date and skips duplicate same-day scheduled refreshes.

If an official source is unavailable or returns a blocking/placeholder page, the updater attempts labeled public-news fallbacks for GSE index levels, Bank of Ghana macro rates, USD/GHS, inflation, and GDP growth. Fallback sources include MyJoyOnline Business/search pages, Business & Financial Times, Ghana Business News, and Citi Business News. Any fallback value is labeled as a public-news fallback in `data/external-sources.json`.

Manual refresh:

```bash
python3 scripts/update_external_data.py
```

The frontend loads `data/external-sources.json` in the Sources view and displays the latest investment research links, business news, source counts, and update timestamp.

Bloomberg note: Bloomberg's public website may block automated scraping with HTTP 403. The workflow includes Bloomberg Markets in the source list and records its availability status. For reliable production Bloomberg data, use Bloomberg Data License, Bloomberg Enterprise Access Point, Event-Driven Feeds, or another licensed Bloomberg integration.

Fitch note: Fitch public pages are included for credit-risk headlines and sovereign research context. For redistribution, ratings history, or production analytics, use a licensed Fitch data product or approved Fitch API/data feed.

## Features Included

- Market overview dashboard
- GSE Composite Index and Financial Stocks Index sample tracking
- Top gainers, top losers, and most traded counters
- Sector performance heatmap
- Stock detail pages with ratios, volume, market cap, dividend yield, P/E, EPS, ROE, ROA, and P/B
- Historical price charts using native canvas
- Portfolio valuation, unrealized gain/loss, income estimate, and exposure summary
- Research workspace with AI-style daily market commentary
- Alert rules interface
- Ghana macro indicator dashboard
- Admin data ingestion mock workflow
- Light and dark mode
- Responsive desktop and mobile layout
- CSV export

## Important Data Note

For production, connect licensed Ghana Stock Exchange data, company filings, Bank of Ghana data, Ghana Statistical Service data, approved news feeds, and internal research datasets. Public source links are included for transparency, but an enterprise platform should use licensed feeds and validated ingestion pipelines for trading-grade stock prices, volumes, fundamentals, and corporate actions.

## Run Locally

Open `index.html` directly in a browser.

For a local server, use any static file server. Example if Python is installed:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Push this folder to the repository.
3. In GitHub, open Settings.
4. Go to Pages.
5. Set Source to `Deploy from a branch`.
6. Select the `main` branch and `/root`.
7. Save and wait for GitHub Pages to publish the site.

## Recommended Production Upgrade Path

Frontend:

- Next.js
- React
- TypeScript
- TradingView Lightweight Charts or Highcharts

Backend:

- FastAPI or NestJS
- PostgreSQL with TimescaleDB
- Redis for caching and job queues
- Object storage for reports and filings

Analytics:

- Python analytics engine
- pandas and NumPy
- Scheduled ingestion jobs
- Data quality validation

AI:

- Retrieval-augmented financial assistant
- Source citations
- Permission-aware data access
- Report drafting and summarization guardrails

Security:

- OAuth/OIDC or enterprise SSO
- Multi-factor authentication
- Role-based access control
- Audit logs
- Encrypted data storage
- Secure API gateway

## Project Files

- `index.html` - application structure
- `styles.css` - responsive institutional UI styling
- `app.js` - sample market data, interactions, charts, exports, and dashboards
- `GSE-Investor-Intelligence-Blueprint.md` - full product and architecture blueprint
