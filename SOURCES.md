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

## Values Updated in the App

- GSE Composite Index: 15,130.52, current value shown by the Ghana Stock Exchange public index performance table for 30 April 2026.
- GSE Financial Stocks Index: 8,839.41, current value shown by the Ghana Stock Exchange public index performance table for 30 April 2026.
- Bank of Ghana monetary policy rate: 14.00%.
- Bank of Ghana 91-day Treasury bill rate: 4.8645%.
- Ghana headline inflation: 3.2%.
- Ghana annual GDP growth: 6.0% for 2025, shown by Ghana Statistical Service public indicators.

## Production Integration Notes

Use licensed or formally approved sources for trading-grade stock prices, volume, market capitalization, fundamentals, dividends, and corporate actions. The public GSE Market Watch feed is delayed, and production systems should include data licensing, ingestion validation, reconciliation, audit logs, and source-specific freshness labels.
