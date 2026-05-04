# Data Sources

This project includes real public source links in the application UI. The static app is designed so a production engineering team can replace front-end records with licensed or approved data feeds.

## Official Ghana Market Sources

- Ghana Stock Exchange: https://gse.com.gh/
- GSE Market Watch: https://gsemarketwatch.com/
- GSE Listed Companies: https://gse.com.gh/listed-companies/
- GSE Market Reports: https://gse.com.gh/market-report/
- GSE Disclosure Portal: https://disclosure.gse.com.gh:8443/

## Official Ghana Macro Sources

- Bank of Ghana: https://www.bog.gov.gh/
- Bank of Ghana Daily Interbank FX Rates: https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/
- Bank of Ghana Economic Data: https://www.bog.gov.gh/economic-data/
- Ghana Statistical Service: https://statsghana.gov.gh/

## Investment Research and Business News Sources

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

## Values Updated in the App

- GSE Composite Index: 15,130.52, current value shown by the Ghana Stock Exchange public index performance table for 30 April 2026.
- GSE Financial Stocks Index: 8,839.41, current value shown by the Ghana Stock Exchange public index performance table for 30 April 2026.
- Bank of Ghana monetary policy rate: 14.00%.
- Bank of Ghana 91-day Treasury bill rate: 4.8645%.
- Ghana headline inflation: 3.2%.
- Ghana annual GDP growth: 6.0% for 2025, shown by Ghana Statistical Service public indicators.

## Production Integration Notes

Use licensed or formally approved sources for trading-grade stock prices, volume, market capitalization, fundamentals, dividends, and corporate actions. The public GSE Market Watch feed is delayed, and production systems should include data licensing, ingestion validation, reconciliation, audit logs, and source-specific freshness labels.

The scripted data updater uses conservative public-page and RSS fetching once per day. Before using scraped data commercially, review each source's terms of use and replace public scraping with licensed APIs where required.

When an official source is unavailable, the updater attempts labeled fallbacks from public business-news pages and RSS feeds, including MyJoyOnline Business. Fallback market and macro values should be treated as indicative unless reconciled against the official GSE, Bank of Ghana, or Ghana Statistical Service pages.

Bloomberg's public website may block automated scraping. The daily updater includes Bloomberg Markets as a monitored source, but production-grade Bloomberg data should come from licensed Bloomberg products such as Data License, Enterprise Access Point, or Event-Driven Feeds.

Fitch public pages are monitored for credit-risk and sovereign-research context. Production use of Fitch ratings history, full reports, redistribution, or analytics should use a licensed Fitch data product or approved API/data feed.
