# GSE Investor Intelligence Platform

Professional web application starter for monitoring Ghana Stock Exchange market trends, listed equities, portfolios, research workflow, macro indicators, alerts, and institutional reporting.

This version is a deployable static application built with HTML, CSS, and JavaScript so it can be hosted immediately on GitHub Pages without installing dependencies.

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

The application currently uses sample end-of-day Ghana market data for demonstration. For production, connect licensed Ghana Stock Exchange data, company filings, Bank of Ghana data, Ghana Statistical Service data, approved news feeds, and internal research datasets.

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
