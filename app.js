const marketData = {
  tradingDate: "2026-04-30",
  sources: [
    {
      name: "Ghana Stock Exchange",
      url: "https://gse.com.gh/",
      type: "Official market source",
      note: "Public index performance, market reports, listed-company navigation, press releases, and links to Market Watch and the Disclosure Portal.",
    },
    {
      name: "GSE Market Watch",
      url: "https://gsemarketwatch.com/",
      type: "Official delayed market feed",
      note: "GSE-linked market watch site showing delayed Composite Index, Financial Stock Index, last trade date/time, and delayed feed notice.",
    },
    {
      name: "GSE Listed Companies",
      url: "https://gse.com.gh/listed-companies/",
      type: "Official issuer universe",
      note: "Official table of GSE main market, ETF, GAX, and GFIM issuers used for ticker/company reference.",
    },
    {
      name: "GSE Disclosure Portal",
      url: "https://disclosure.gse.com.gh:8443/",
      type: "Official filings source",
      note: "Primary disclosure source for listed-company announcements, financial statements, dividend notices, and regulatory filings.",
    },
    {
      name: "Bank of Ghana",
      url: "https://www.bog.gov.gh/",
      type: "Official macro and rates source",
      note: "Public homepage indicators for monetary policy rate, inflation rate, and 91-day Treasury bill rate.",
    },
    {
      name: "Bank of Ghana Daily Interbank FX Rates",
      url: "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/",
      type: "Official FX source",
      note: "Daily weighted average and median interbank FX rates including USD/GHS, GBP/GHS, and EUR/GHS.",
    },
    {
      name: "Ghana Statistical Service",
      url: "https://statsghana.gov.gh/",
      type: "Official statistics source",
      note: "Official inflation, GDP, production, population, labor, and other Ghana macroeconomic indicators.",
    },
    {
      name: "Bloomberg Markets",
      url: "https://www.bloomberg.com/markets",
      type: "Global markets news",
      note: "Public Bloomberg Markets page used for global market headlines and macro context affecting institutional investment decisions.",
    },
    {
      name: "Fitch Ratings",
      url: "https://www.fitchratings.com/",
      type: "Credit ratings news",
      note: "Public Fitch Ratings site used for global credit-risk headlines, ratings commentary, and market-risk context.",
    },
    {
      name: "Fitch Sovereigns",
      url: "https://www.fitchratings.com/sovereigns",
      type: "Sovereign credit research",
      note: "Fitch sovereign research page used for country-risk, sovereign debt, ratings criteria, and emerging-market credit context.",
    },
  ],
  indices: {
    composite: {
      name: "GSE Composite Index",
      value: 15130.52,
      change: 32.3,
      percent: 0.21,
      source: "Ghana Stock Exchange",
      sourceUrl: "https://gse.com.gh/",
      history: [3099.49, 15098.22, 15130.52],
    },
    financial: {
      name: "GSE Financial Stocks Index",
      value: 8839.41,
      change: -13.39,
      percent: -0.15,
      source: "Ghana Stock Exchange",
      sourceUrl: "https://gse.com.gh/",
      history: [1745.04, 8852.8, 8839.41],
    },
  },
  stocks: [
    { ticker: "GCB", name: "GCB Bank PLC", sector: "Financials", logoDomain: "gcbbank.com.gh", listed: "1953", historyNote: "GCB Bank is one of Ghana's oldest indigenous banks and has grown from a state-backed commercial bank into a broad retail, corporate, and public-sector banking franchise.", price: 6.42, open: 6.31, previousClose: 6.29, high: 6.48, low: 6.28, volume: 189400, value: 1215948, marketCap: 1701300000, shares: 265000000, high52: 7.08, low52: 4.72, pe: 4.8, eps: 1.34, roe: 22.6, roa: 3.1, yield: 6.9, book: 8.4, pb: 0.76, recommendation: "Buy", history: [5.72, 5.88, 5.91, 6.02, 5.97, 6.1, 6.18, 6.21, 6.29, 6.35, 6.42] },
    { ticker: "CAL", name: "CalBank PLC", sector: "Financials", logoDomain: "calbank.net", listed: "2004", historyNote: "CalBank began as a merchant bank and evolved into a universal bank serving corporate, retail, and digital banking clients across Ghana.", price: 0.67, open: 0.64, previousClose: 0.64, high: 0.68, low: 0.63, volume: 871000, value: 583570, marketCap: 375200000, shares: 560000000, high52: 0.85, low52: 0.48, pe: 3.2, eps: 0.21, roe: 18.1, roa: 2.4, yield: 5.2, book: 1.08, pb: 0.62, recommendation: "Hold", history: [0.58, 0.59, 0.6, 0.61, 0.6, 0.63, 0.62, 0.64, 0.64, 0.65, 0.67] },
    { ticker: "SCB", name: "Standard Chartered Bank Ghana PLC", sector: "Financials", logoDomain: "sc.com", listed: "1991", historyNote: "Standard Chartered has operated in Ghana for more than a century and remains a major international banking franchise focused on corporate, commercial, and wealth clients.", price: 24.1, open: 23.6, previousClose: 23.5, high: 24.3, low: 23.4, volume: 24100, value: 580810, marketCap: 3243860000, shares: 134600000, high52: 25.4, low52: 18.2, pe: 5.9, eps: 4.08, roe: 27.8, roa: 4.4, yield: 8.1, book: 19.2, pb: 1.26, recommendation: "Buy", history: [21.6, 22.0, 22.4, 22.1, 22.8, 23.0, 23.1, 23.5, 23.7, 23.9, 24.1] },
    { ticker: "EGL", name: "Enterprise Group PLC", sector: "Insurance", logoDomain: "myenterprisegroup.io", listed: "1990", historyNote: "Enterprise Group is a Ghanaian financial services holding company with roots in insurance and a footprint across life, general insurance, pensions, and related services.", price: 3.22, open: 3.2, previousClose: 3.21, high: 3.24, low: 3.18, volume: 58200, value: 187404, marketCap: 521640000, shares: 162000000, high52: 3.8, low52: 2.74, pe: 6.1, eps: 0.53, roe: 17.2, roa: 2.8, yield: 4.7, book: 4.05, pb: 0.8, recommendation: "Hold", history: [3.02, 3.05, 3.08, 3.1, 3.09, 3.14, 3.16, 3.21, 3.2, 3.2, 3.22] },
    { ticker: "MTNGH", name: "MTN Ghana", sector: "Telecom", logoDomain: "mtn.com.gh", listed: "2018", historyNote: "MTN Ghana is the country's largest mobile network operator by subscribers and became one of the GSE's largest listings after its public offer in 2018.", price: 2.84, open: 2.86, previousClose: 2.88, high: 2.89, low: 2.82, volume: 1320000, value: 3748800, marketCap: 37062000000, shares: 13050000000, high52: 3.05, low52: 1.88, pe: 12.4, eps: 0.23, roe: 31.5, roa: 12.8, yield: 7.4, book: 0.68, pb: 4.18, recommendation: "Hold", history: [2.54, 2.6, 2.69, 2.74, 2.76, 2.82, 2.9, 2.92, 2.88, 2.86, 2.84] },
    { ticker: "GOIL", name: "GOIL PLC", sector: "Energy", logoDomain: "goil.com.gh", listed: "2007", historyNote: "GOIL is a Ghanaian downstream petroleum company with a nationwide service-station network and a strategic role in fuel distribution and energy retailing.", price: 1.78, open: 1.82, previousClose: 1.83, high: 1.84, low: 1.76, volume: 94400, value: 168032, marketCap: 696000000, shares: 391000000, high52: 2.1, low52: 1.32, pe: 7.0, eps: 0.25, roe: 14.3, roa: 5.5, yield: 3.8, book: 2.12, pb: 0.84, recommendation: "Hold", history: [1.62, 1.65, 1.71, 1.75, 1.77, 1.81, 1.86, 1.85, 1.83, 1.8, 1.78] },
    { ticker: "TOTAL", name: "TotalEnergies Marketing Ghana PLC", sector: "Energy", logoDomain: "totalenergies.com.gh", listed: "1991", historyNote: "TotalEnergies Marketing Ghana traces its local operations through a long-running petroleum marketing business focused on fuels, lubricants, retail stations, and commercial customers.", price: 13.9, open: 14.0, previousClose: 14.1, high: 14.05, low: 13.85, volume: 7200, value: 100080, marketCap: 1540000000, shares: 110800000, high52: 15.2, low52: 11.1, pe: 8.5, eps: 1.64, roe: 19.4, roa: 7.1, yield: 5.6, book: 11.8, pb: 1.18, recommendation: "Hold", history: [12.4, 12.7, 13.1, 13.4, 13.6, 13.9, 14.3, 14.2, 14.1, 14.0, 13.9] },
    { ticker: "UNIL", name: "Unilever Ghana PLC", sector: "Consumer", logoDomain: "unileverghana.com", listed: "1991", historyNote: "Unilever Ghana is a long-established consumer goods company serving Ghanaian households through personal care, home care, and food-related brands.", price: 18.44, open: 18.5, previousClose: 18.52, high: 18.6, low: 18.4, volume: 3400, value: 62696, marketCap: 1152500000, shares: 62500000, high52: 20.3, low52: 14.2, pe: 10.8, eps: 1.71, roe: 15.8, roa: 8.3, yield: 4.1, book: 13.2, pb: 1.4, recommendation: "Hold", history: [17.4, 17.8, 18.1, 18.0, 18.3, 18.6, 18.7, 18.52, 18.46, 18.5, 18.44] },
    { ticker: "FML", name: "Fan Milk PLC", sector: "Consumer", logoDomain: "fanmilk.com", listed: "1991", historyNote: "Fan Milk is a dairy and frozen-snack company known for mass-market consumer products and a distribution model built around Ghana's informal and formal retail channels.", price: 3.75, open: 3.7, previousClose: 3.68, high: 3.77, low: 3.68, volume: 21200, value: 79500, marketCap: 437250000, shares: 116600000, high52: 4.2, low52: 2.9, pe: 9.4, eps: 0.4, roe: 13.6, roa: 6.0, yield: 3.6, book: 3.1, pb: 1.21, recommendation: "Buy", history: [3.2, 3.28, 3.33, 3.4, 3.48, 3.55, 3.6, 3.68, 3.7, 3.73, 3.75] },
    { ticker: "BOPP", name: "Benso Oil Palm Plantation PLC", sector: "Agriculture", logoDomain: "boppltd.com", listed: "2004", historyNote: "Benso Oil Palm Plantation operates in Ghana's palm-oil value chain and is viewed by income investors for its agricultural exposure and dividend profile.", price: 22.2, open: 22.1, previousClose: 22.1, high: 22.25, low: 22.0, volume: 1800, value: 39960, marketCap: 770340000, shares: 34700000, high52: 24.8, low52: 17.6, pe: 6.7, eps: 3.31, roe: 24.2, roa: 11.1, yield: 9.3, book: 15.5, pb: 1.43, recommendation: "Buy", history: [19.1, 19.8, 20.3, 20.9, 21.4, 21.8, 22.0, 22.1, 22.1, 22.15, 22.2] },
  ],
  macro: [
    { name: "91-day T-bill", value: 4.8645, unit: "%", source: "Bank of Ghana", sourceUrl: "https://www.bog.gov.gh/" },
    { name: "Policy rate", value: 14.0, unit: "%", source: "Bank of Ghana", sourceUrl: "https://www.bog.gov.gh/" },
    { name: "Inflation", value: 3.2, unit: "%", source: "Bank of Ghana / GSS", sourceUrl: "https://statsghana.gov.gh/" },
    { name: "USD/GHS", value: 11.03, unit: "mid", source: "Bank of Ghana", sourceUrl: "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/" },
    { name: "GDP growth", value: 6.0, unit: "%", source: "Ghana Statistical Service", sourceUrl: "https://statsghana.gov.gh/" },
    { name: "Inflation target", value: 8.0, unit: "% +/- 2", source: "Bank of Ghana", sourceUrl: "https://www.bog.gov.gh/" },
  ],
  alerts: [
    { title: "MTNGH price movement", detail: "Price declined more than 1% versus previous close.", channel: "In-app, Email", severity: "medium" },
    { title: "CAL volume spike", detail: "Volume is above the 30-day average liquidity threshold.", channel: "In-app, SMS", severity: "high" },
    { title: "BOPP dividend screen", detail: "Dividend yield remains above internal income strategy threshold.", channel: "Email", severity: "low" },
  ],
  portfolio: [
    { ticker: "MTNGH", quantity: 250000, cost: 2.12 },
    { ticker: "GCB", quantity: 50000, cost: 5.35 },
    { ticker: "SCB", quantity: 12000, cost: 21.4 },
    { ticker: "BOPP", quantity: 5000, cost: 18.2 },
    { ticker: "CAL", quantity: 300000, cost: 0.55 },
  ],
};

let selectedStock = marketData.stocks[0];
let alerts = [...marketData.alerts];
let externalData = null;
let selectedSector = "all";
let sortKey = "ticker";
let activeIndexRange = "1M";
let indexHoverPoint = null;
let briefVersion = 0;
let selectedRecommendationTicker = "GCB";
let currentCompanyResults = [];
const watchlist = new Set(JSON.parse(localStorage.getItem("watchlist") || "[]"));

function applyExternalIndicators() {
  const indicators = externalData?.indicators;
  if (!indicators) return;

  if (indicators.gseIndices) {
    const composite = Number(indicators.gseIndices.composite);
    const financial = Number(indicators.gseIndices.financialStocks);
    const gseSource = indicators.gseIndices.source || "Ghana Stock Exchange";
    const gseUrl = indicators.gseIndices.url || "https://gse.com.gh/";
    if (Number.isFinite(composite)) {
      const previous = marketData.indices.composite.value;
      marketData.indices.composite.value = composite;
      marketData.indices.composite.change = composite - previous;
      marketData.indices.composite.percent = previous ? ((composite - previous) / previous) * 100 : 0;
      marketData.indices.composite.history = [...marketData.indices.composite.history.slice(-2), composite];
      marketData.indices.composite.source = gseSource;
      marketData.indices.composite.sourceUrl = gseUrl;
    }
    if (Number.isFinite(financial)) {
      const previous = marketData.indices.financial.value;
      marketData.indices.financial.value = financial;
      marketData.indices.financial.change = financial - previous;
      marketData.indices.financial.percent = previous ? ((financial - previous) / previous) * 100 : 0;
      marketData.indices.financial.history = [...marketData.indices.financial.history.slice(-2), financial];
      marketData.indices.financial.source = gseSource;
      marketData.indices.financial.sourceUrl = gseUrl;
    }
    if (indicators.gseIndices.asOf) {
      marketData.tradingDate = parseGseDate(indicators.gseIndices.asOf) || marketData.tradingDate;
    }
  }

  const bogSource = indicators.bankOfGhana?.source || "Bank of Ghana";
  const bogUrl = indicators.bankOfGhana?.url || "https://www.bog.gov.gh/";
  const gssSource = indicators.ghanaStatisticalService?.source || "Ghana Statistical Service";
  const gssUrl = indicators.ghanaStatisticalService?.url || "https://statsghana.gov.gh/";
  const inflationFromBog = indicators.bankOfGhana?.inflation != null;

  updateMacro("91-day T-bill", indicators.bankOfGhana?.tBill91Day, bogSource, bogUrl);
  updateMacro("Policy rate", indicators.bankOfGhana?.policyRate, bogSource, bogUrl);
  updateMacro(
    "Inflation",
    indicators.bankOfGhana?.inflation ?? indicators.ghanaStatisticalService?.cpiInflationYoy,
    inflationFromBog ? bogSource : gssSource,
    inflationFromBog ? bogUrl : gssUrl
  );
  updateMacro(
    "USD/GHS",
    indicators.fx?.usdGhsMid,
    indicators.fx?.source || "Bank of Ghana Daily Interbank FX Rates",
    indicators.fx?.url || "https://www.bog.gov.gh/treasury-and-the-markets/daily-interbank-fx-rates/"
  );
  updateMacro("GDP growth", indicators.ghanaStatisticalService?.annualGdpGrowth, gssSource, gssUrl);
}

function parseGseDate(value) {
  const match = String(value).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return null;
  const [, day, month, year] = match;
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function updateMacro(name, value, source, sourceUrl) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return;
  const item = marketData.macro.find((macro) => macro.name === name);
  if (!item) return;
  item.value = numeric;
  item.source = source;
  item.sourceUrl = sourceUrl;
}

const currency = new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-GH");
const ghanaDateTime = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Accra",
});

function pct(current, previous) {
  return ((current - previous) / previous) * 100;
}

function classFor(value) {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
}

function formatPercent(value) {
  return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function stockChange(stock) {
  return pct(stock.price, stock.previousClose);
}

function byId(id) {
  return document.getElementById(id);
}

function saveWatchlist() {
  localStorage.setItem("watchlist", JSON.stringify([...watchlist]));
}

function companyInitials(stock) {
  return stock.ticker.replace(/[^A-Z]/g, "").slice(0, 3) || stock.name.slice(0, 2).toUpperCase();
}

function companyLogo(stock, size = "sm") {
  const initials = companyInitials(stock);
  return `
    <span class="company-logo ${size} logo-${stock.ticker.toLowerCase()}" aria-hidden="true">
      <span>${initials}</span>
    </span>
  `;
}

function renderMetrics() {
  const totalValue = marketData.stocks.reduce((sum, stock) => sum + stock.value, 0);
  const totalVolume = marketData.stocks.reduce((sum, stock) => sum + stock.volume, 0);
  const totalCap = marketData.stocks.reduce((sum, stock) => sum + stock.marketCap, 0);
  const advancers = marketData.stocks.filter((stock) => stockChange(stock) > 0).length;
  const decliners = marketData.stocks.filter((stock) => stockChange(stock) < 0).length;
  const unchanged = marketData.stocks.length - advancers - decliners;

  byId("tradingDate").textContent = marketData.tradingDate;
  byId("lastUpdated").textContent = `Last updated: ${formatStaticGhanaDate(marketData.tradingDate)} Ghana Time`;
  byId("marketMetrics").innerHTML = [
    metric("Composite Index", number.format(marketData.indices.composite.value), formatPercent(marketData.indices.composite.percent), classFor(marketData.indices.composite.change), marketData.indices.composite.sourceUrl),
    metric("Financial Index", number.format(marketData.indices.financial.value), formatPercent(marketData.indices.financial.percent), classFor(marketData.indices.financial.change), marketData.indices.financial.sourceUrl),
    metric("Tracked value traded", currency.format(totalValue), `${number.format(totalVolume)} shares`, "neutral", "https://gsemarketwatch.com/"),
    metric("Tracked market cap", currency.format(totalCap), `${advancers} advancers, ${decliners} decliners`, "neutral", "https://gse.com.gh/listed-companies/"),
  ].join("");

  byId("breadthSummary").innerHTML = [
    breadthItem("Advancers", advancers, "positive"),
    breadthItem("Decliners", decliners, "negative"),
    breadthItem("Unchanged", unchanged, "neutral"),
    breadthItem("Market tone", advancers > decliners ? "Constructive" : "Mixed", advancers > decliners ? "positive" : "neutral"),
  ].join("");
}

function formatStaticGhanaDate(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return ghanaDateTime.format(new Date(Date.UTC(year, month - 1, day, 11, 0, 0)));
}

function metric(label, value, sub, tone, sourceUrl) {
  const source = sourceUrl ? `<a class="data-tag" href="${sourceUrl}" target="_blank" rel="noreferrer">Source</a>` : "";
  return `<div class="metric-card"><span>${label}</span><strong>${value}</strong><em class="${tone}">${sub}</em>${source}</div>`;
}

function breadthItem(label, value, tone) {
  return `<div class="breadth-item"><span>${label}</span><strong class="${tone}">${value}</strong></div>`;
}

function renderTables() {
  const gainers = [...marketData.stocks].sort((a, b) => stockChange(b) - stockChange(a)).slice(0, 5);
  const losers = [...marketData.stocks].sort((a, b) => stockChange(a) - stockChange(b)).slice(0, 5);
  const traded = [...marketData.stocks].sort((a, b) => b.value - a.value).slice(0, 5);
  const stocks = getFilteredStocks();

  byId("gainersTable").innerHTML = gainers.map(stockChangeRow).join("");
  byId("losersTable").innerHTML = losers.map(stockChangeRow).join("");
  byId("tradedTable").innerHTML = traded.map((stock) => `<tr><td>${stock.ticker}</td><td>${number.format(stock.volume)}</td><td>${currency.format(stock.value)}</td></tr>`).join("");
  byId("stocksTable").innerHTML = stocks.map((stock) => {
    const change = stockChange(stock);
    const watched = watchlist.has(stock.ticker);
    return `<tr class="stock-row" data-ticker="${stock.ticker}">
      <td><button class="watch-button ${watched ? "active" : ""}" data-watch="${stock.ticker}" aria-label="Toggle ${stock.ticker} watchlist">${watched ? "★" : "☆"}</button></td>
      <td><strong>${stock.ticker}</strong></td>
      <td><span class="company-name-cell">${companyLogo(stock)}${stock.name}</span></td>
      <td>${stock.sector}</td>
      <td class="${classFor(change)}">${formatPercent(change)}</td>
    </tr>`;
  }).join("");
}

function getFilteredStocks() {
  const filtered = selectedSector === "all"
    ? [...marketData.stocks]
    : marketData.stocks.filter((stock) => stock.sector === selectedSector);
  return filtered.sort((a, b) => {
    if (sortKey === "change") return stockChange(b) - stockChange(a);
    if (sortKey === "volume") return b.volume - a.volume;
    return a.ticker.localeCompare(b.ticker);
  });
}

function stockChangeRow(stock) {
  const change = stockChange(stock);
  return `<tr><td><strong>${stock.ticker}</strong></td><td>GHS ${stock.price.toFixed(2)}</td><td class="${classFor(change)}">${formatPercent(change)}</td></tr>`;
}

function renderSectors() {
  const sectors = {};
  for (const stock of marketData.stocks) {
    sectors[stock.sector] ||= [];
    sectors[stock.sector].push(stockChange(stock));
  }

  byId("sectorGrid").innerHTML = Object.entries(sectors).map(([sector, changes]) => {
    const avg = changes.reduce((sum, value) => sum + value, 0) / changes.length;
    return `<button class="sector-tile ${selectedSector === sector ? "active" : ""}" data-sector="${sector}"><strong>${sector}</strong><span class="${classFor(avg)}">${formatPercent(avg)}</span><small>${changes.length} listed equities</small></button>`;
  }).join("");
}

function renderStockDetail() {
  const change = stockChange(selectedStock);
  byId("stockDetail").innerHTML = `
    <p class="eyebrow">${selectedStock.sector}</p>
    <div class="stock-title">${companyLogo(selectedStock, "lg")}<h2>${selectedStock.ticker} · ${selectedStock.name}</h2></div>
    <p><strong>GHS ${selectedStock.price.toFixed(2)}</strong> <span class="${classFor(change)}">${formatPercent(change)}</span> <button class="watch-button ${watchlist.has(selectedStock.ticker) ? "active" : ""}" data-watch="${selectedStock.ticker}" aria-label="Toggle ${selectedStock.ticker} watchlist">${watchlist.has(selectedStock.ticker) ? "★" : "☆"}</button></p>
    <p class="source-note">Company listing reference: <a class="source-link" href="https://gse.com.gh/listed-companies/" target="_blank" rel="noreferrer">GSE Listed Companies</a>. Live price, volume, and fundamentals require licensed GSE feed integration or approved uploads.</p>
    <div class="detail-grid">
      ${detail("Open", `GHS ${selectedStock.open.toFixed(2)}`)}
      ${detail("Previous close", `GHS ${selectedStock.previousClose.toFixed(2)}`)}
      ${detail("Day range", `GHS ${selectedStock.low.toFixed(2)} - ${selectedStock.high.toFixed(2)}`)}
      ${detail("Volume", number.format(selectedStock.volume))}
      ${detail("Value traded", currency.format(selectedStock.value))}
      ${detail("Market cap", currency.format(selectedStock.marketCap))}
      ${detail("52-week range", `GHS ${selectedStock.low52.toFixed(2)} - ${selectedStock.high52.toFixed(2)}`)}
      ${detail("P/E", selectedStock.pe.toFixed(1))}
      ${detail("Dividend yield", `${selectedStock.yield.toFixed(1)}%`)}
      ${detail("EPS", `GHS ${selectedStock.eps.toFixed(2)}`)}
      ${detail("ROE", `${selectedStock.roe.toFixed(1)}%`)}
      ${detail("P/B", selectedStock.pb.toFixed(2))}
    </div>
  `;
  drawLineChart("stockChart", selectedStock.history, selectedStock.ticker, "#0b6b5f");
}

function detail(label, value) {
  return `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderPortfolio() {
  const rows = marketData.portfolio.map((holding) => {
    const stock = marketData.stocks.find((item) => item.ticker === holding.ticker);
    const value = holding.quantity * stock.price;
    const cost = holding.quantity * holding.cost;
    const pl = value - cost;
    return { ...holding, stock, value, cost, pl };
  });
  const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
  const totalCost = rows.reduce((sum, row) => sum + row.cost, 0);
  const totalPl = totalValue - totalCost;
  const dividendIncome = rows.reduce((sum, row) => sum + row.value * (row.stock.yield / 100), 0);
  const financialExposure = rows.filter((row) => row.stock.sector === "Financials").reduce((sum, row) => sum + row.value, 0) / totalValue;

  byId("portfolioMetrics").innerHTML = [
    metric("Portfolio value", currency.format(totalValue), "Current valuation", "neutral"),
    metric("Unrealized P/L", currency.format(totalPl), formatPercent((totalPl / totalCost) * 100), classFor(totalPl)),
    metric("Projected dividend income", currency.format(dividendIncome), "Annualized estimate", "positive"),
    metric("Financials exposure", formatPercent(financialExposure * 100), "Sector concentration", financialExposure > 0.45 ? "negative" : "neutral"),
  ].join("");

  byId("portfolioTable").innerHTML = rows.map((row) => `
    <tr>
      <td><strong>${row.ticker}</strong></td>
      <td>${number.format(row.quantity)}</td>
      <td>${currency.format(row.value)}</td>
      <td class="${classFor(row.pl)}">${currency.format(row.pl)}</td>
      <td>${formatPercent((row.value / totalValue) * 100)}</td>
    </tr>
  `).join("");

  byId("riskSummary").innerHTML = [
    risk("Concentration risk", financialExposure > 0.45 ? "Elevated financial-sector exposure" : "Within policy range", financialExposure > 0.45 ? "negative" : "positive"),
    risk("Liquidity risk", "MTNGH and CAL provide stronger portfolio liquidity", "neutral"),
    risk("Income profile", "Dividend-oriented holdings support recurring income", "positive"),
    risk("Benchmark", "Compare daily performance against GSE Composite Index", "neutral"),
  ].join("");
}

function risk(label, value, tone) {
  return `<div class="risk-item"><span>${label}</span><strong class="${tone}">${value}</strong></div>`;
}

function renderResearch() {
  byId("recommendations").innerHTML = marketData.stocks.slice(0, 6).map((stock) => `
    <button class="workflow-item ${stock.ticker === selectedRecommendationTicker ? "active" : ""}" data-recommendation="${stock.ticker}" type="button">
      <span>${stock.ticker} · ${stock.sector}</span>
      <strong class="recommendation-title">${companyLogo(stock)}${stock.recommendation}</strong>
      <p>P/E ${stock.pe.toFixed(1)} · Dividend yield ${stock.yield.toFixed(1)}% · ROE ${stock.roe.toFixed(1)}%</p>
    </button>
  `).join("");
  renderRecommendationDetail(selectedRecommendationTicker);
  generateBrief();
  byId("assistantAnswer").textContent = "Ask about dividend yields, banking stocks, unusual volume, or market summary.";
}

function renderRecommendationDetail(ticker) {
  const stock = marketData.stocks.find((item) => item.ticker === ticker) || marketData.stocks[0];
  const change = stockChange(stock);
  const valuationView = stock.pe <= 7 ? "undemanding valuation versus tracked peer set" : "fuller valuation that needs earnings delivery";
  const incomeView = stock.yield >= 6 ? "attractive income profile" : "moderate income contribution";
  const profitabilityView = stock.roe >= 20 ? "strong return on equity" : "stable but less exceptional profitability";
  const liquidityView = stock.volume >= 100000 ? "reasonable trading liquidity" : "thin liquidity, so execution discipline is important";
  const action = stock.recommendation === "Buy"
    ? "Accumulate selectively on liquidity windows and confirm the thesis with latest filings."
    : stock.recommendation === "Hold"
      ? "Maintain exposure, monitor catalysts, and wait for clearer upside or valuation support."
      : "Reduce exposure unless new information improves the risk-return balance.";

  byId("recommendationDetail").innerHTML = `
    <div>
      <span class="eyebrow">Recommendation detail</span>
      <h3>${stock.ticker} · ${stock.recommendation}</h3>
    </div>
    <p>${stock.name} is currently classified as <strong>${stock.recommendation}</strong>. The view reflects ${valuationView}, ${incomeView}, ${profitabilityView}, and ${liquidityView}.</p>
    <div class="recommendation-score-grid">
      <div class="recommendation-score"><span>Price move</span><strong class="${classFor(change)}">${formatPercent(change)}</strong></div>
      <div class="recommendation-score"><span>P/E ratio</span><strong>${stock.pe.toFixed(1)}</strong></div>
      <div class="recommendation-score"><span>Dividend yield</span><strong>${stock.yield.toFixed(1)}%</strong></div>
      <div class="recommendation-score"><span>ROE</span><strong>${stock.roe.toFixed(1)}%</strong></div>
      <div class="recommendation-score"><span>Volume</span><strong>${number.format(stock.volume)}</strong></div>
      <div class="recommendation-score"><span>Market cap</span><strong>${currency.format(stock.marketCap)}</strong></div>
    </div>
    <p><strong>Rationale:</strong> ${stock.historyNote}</p>
    <p><strong>Action:</strong> ${action}</p>
    <p><strong>Compliance note:</strong> This is a model-generated research workflow view using the current app dataset. Validate with official GSE filings, licensed data, and internal approval before client distribution.</p>
  `;
}

function generateBrief(userTriggered = false) {
  briefVersion += 1;
  const generatedAt = ghanaDateTime.format(new Date());
  const sourceUpdatedAt = externalData?.generatedAt
    ? ghanaDateTime.format(new Date(externalData.generatedAt))
    : formatStaticGhanaDate(marketData.tradingDate);
  const advancers = marketData.stocks.filter((stock) => stockChange(stock) > 0).length;
  const decliners = marketData.stocks.filter((stock) => stockChange(stock) < 0).length;
  const unchanged = marketData.stocks.length - advancers - decliners;
  const top = [...marketData.stocks].sort((a, b) => stockChange(b) - stockChange(a))[0];
  const weakest = [...marketData.stocks].sort((a, b) => stockChange(a) - stockChange(b))[0];
  const volumeLeader = [...marketData.stocks].sort((a, b) => b.volume - a.volume)[0];
  const valueLeader = [...marketData.stocks].sort((a, b) => b.value - a.value)[0];
  const totalValue = marketData.stocks.reduce((sum, stock) => sum + stock.value, 0);
  const totalVolume = marketData.stocks.reduce((sum, stock) => sum + stock.volume, 0);
  const sectorMoves = Object.entries(
    marketData.stocks.reduce((sectors, stock) => {
      sectors[stock.sector] ||= [];
      sectors[stock.sector].push(stockChange(stock));
      return sectors;
    }, {})
  ).map(([sector, changes]) => ({
    sector,
    average: changes.reduce((sum, value) => sum + value, 0) / changes.length,
  })).sort((a, b) => b.average - a.average);
  const bestSector = sectorMoves[0];
  const weakestSector = sectorMoves[sectorMoves.length - 1];
  const macroByName = Object.fromEntries(marketData.macro.map((item) => [item.name, item]));
  const externalItems = externalData?.items?.slice(0, 3) || [];
  const sourceLine = externalItems.length
    ? `<ul>${externalItems.map((item) => `<li>${item.source}: <a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></li>`).join("")}</ul>`
    : `<p>External news feed will populate after the daily source update loads from GitHub Pages.</p>`;
  const tone = advancers > decliners ? "constructive" : decliners > advancers ? "defensive" : "mixed";

  byId("marketBrief").innerHTML = `
    ${userTriggered ? `<p class="brief-status">Daily brief refreshed successfully.</p>` : ""}
    <div class="brief-meta">
      <span>Generated: ${generatedAt} Ghana Time</span>
      <span>Brief version: ${briefVersion}</span>
      <span>Source update: ${sourceUpdatedAt} Ghana Time</span>
    </div>
    <h3>Daily Ghana Market Brief</h3>
    <p>The Ghana equity market closed with a ${tone} tone. The GSE Composite Index moved ${formatPercent(marketData.indices.composite.percent)} to ${number.format(marketData.indices.composite.value)}, while the Financial Stocks Index moved ${formatPercent(marketData.indices.financial.percent)} to ${number.format(marketData.indices.financial.value)}.</p>

    <h3>Market Breadth and Liquidity</h3>
    <ul>
      <li>Breadth: ${advancers} advancers, ${decliners} decliners, and ${unchanged} unchanged counters.</li>
      <li>Tracked turnover: ${currency.format(totalValue)} in value and ${number.format(totalVolume)} shares in volume.</li>
      <li>Most active by volume: ${volumeLeader.ticker} with ${number.format(volumeLeader.volume)} shares.</li>
      <li>Most active by value: ${valueLeader.ticker} with ${currency.format(valueLeader.value)} traded.</li>
    </ul>

    <h3>Equity Movers</h3>
    <p>${top.ticker} was the strongest tracked price performer at ${formatPercent(stockChange(top))}, while ${weakest.ticker} was the weakest at ${formatPercent(stockChange(weakest))}. Sector performance was led by ${bestSector.sector} at ${formatPercent(bestSector.average)}, while ${weakestSector.sector} lagged at ${formatPercent(weakestSector.average)}.</p>

    <h3>Macroeconomic Environment</h3>
    <ul>
      <li>91-day Treasury bill rate: ${macroByName["91-day T-bill"].value.toFixed(4)}%.</li>
      <li>Monetary policy rate: ${macroByName["Policy rate"].value.toFixed(2)}%.</li>
      <li>Inflation: ${macroByName.Inflation.value.toFixed(1)}%.</li>
      <li>USD/GHS reference: ${macroByName["USD/GHS"].value.toFixed(2)} ${macroByName["USD/GHS"].unit}.</li>
      <li>GDP growth indicator: ${macroByName["GDP growth"].value.toFixed(1)}%.</li>
    </ul>

    <h3>Investment Read-Through</h3>
    <p>High local fixed-income yields remain a key benchmark for equity allocation. Dividend and banking names should be assessed against Treasury bill yields, earnings quality, liquidity, and capital strength. Low-volume counters need extra caution because price signals may be less reliable.</p>

    <h3>News and Risk Context</h3>
    ${sourceLine}

    <h3>Desk View</h3>
    <p>For the next session, monitor ${volumeLeader.ticker} for liquidity continuation, ${top.ticker} for momentum follow-through, and financial stocks for sensitivity to policy-rate, Treasury-bill, and sovereign-credit developments.</p>
  `;
  const button = byId("generateBrief");
  const status = byId("briefStatus");
  button.textContent = `Generated ${briefVersion}`;
  if (status) status.textContent = `Last generated: ${generatedAt} Ghana Time · Version ${briefVersion}`;
  const brief = byId("marketBrief");
  brief.classList.remove("flash");
  void brief.offsetWidth;
  brief.classList.add("flash");
  if (userTriggered) brief.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    button.textContent = "Generate daily brief";
  }, 1400);
}

function handleGenerateBriefClick() {
  generateBrief(true);
  return false;
}

window.generateBrief = generateBrief;
window.handleGenerateBriefClick = handleGenerateBriefClick;

function renderAlerts() {
  byId("alertsList").innerHTML = alerts.map((alert) => `
    <div class="alert-item">
      <span>${alert.channel} · ${alert.severity.toUpperCase()}</span>
      <strong>${alert.title}</strong>
      <p>${alert.detail}</p>
    </div>
  `).join("");
}

function renderMacro() {
  byId("macroMetrics").innerHTML = marketData.macro.map((item) => metric(item.name, `${number.format(item.value)}${item.unit ? ` ${item.unit}` : ""}`, item.source, "neutral", item.sourceUrl)).join("");
  drawBarChart("macroChart", marketData.macro.map((item) => item.value), marketData.macro.map((item) => item.name));
}

function renderSources() {
  const generated = externalData?.generatedAt
    ? ghanaDateTime.format(new Date(externalData.generatedAt))
    : "Waiting for first scheduled run";
  const okSources = externalData?.sources?.filter((source) => source.ok).length || 0;
  const totalSources = externalData?.sources?.length || marketData.sources.length;
  const items = externalData?.items || [];

  byId("externalMetrics").innerHTML = [
    metric("Last update", generated, "Ghana time", "neutral"),
    metric("Fetched sources", `${okSources}/${totalSources}`, "Public pages and feeds", okSources === totalSources ? "positive" : "neutral"),
    metric("External items", number.format(items.length), "Research and business news", "neutral"),
    metric("Schedule", "11:00 AM", "Africa/Accra daily", "positive"),
  ].join("");

  const query = byId("sourceSearch")?.value?.toLowerCase() || "";
  const visibleItems = items.filter((item) => {
    const haystack = `${item.title} ${item.source} ${item.category} ${item.summary}`.toLowerCase();
    return haystack.includes(query);
  });

  byId("externalFeed").innerHTML = visibleItems.length
    ? visibleItems.slice(0, 15).map((item) => `
      <article class="external-item">
        <span>${item.source} · ${item.category}${item.publishedAt ? ` · ${new Date(item.publishedAt).toLocaleDateString("en-US")}` : ""}</span>
        <a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a>
        ${item.summary ? `<p>${item.summary}</p>` : ""}
      </article>
    `).join("")
    : `<div class="external-item"><span>Status</span><strong>No generated feed file loaded yet.</strong><p>The GitHub Action will write data/external-sources.json during the next 11:00 AM Ghana time run.</p></div>`;

  byId("sourceGrid").innerHTML = marketData.sources.map((source) => `
    <article class="source-item">
      <span>${source.type}</span>
      <strong>${source.name}</strong>
      <p>${source.note}</p>
      <p><a href="${source.url}" target="_blank" rel="noreferrer">Open source link</a></p>
    </article>
  `).join("");
}

function renderSectorOptions() {
  const sectors = [...new Set(marketData.stocks.map((stock) => stock.sector))].sort();
  byId("sectorFilter").innerHTML = [`<option value="all">All sectors</option>`, ...sectors.map((sector) => `<option value="${sector}">${sector}</option>`)].join("");
  byId("companySectorFilter").innerHTML = [`<option value="all">All sectors</option>`, ...sectors.map((sector) => `<option value="${sector}">${sector}</option>`)].join("");
}

function renderCompanies() {
  const query = byId("companySearch")?.value?.toLowerCase() || "";
  const sector = byId("companySectorFilter")?.value || "all";
  const companies = marketData.stocks
    .filter((stock) => sector === "all" || stock.sector === sector)
    .filter((stock) => `${stock.ticker} ${stock.name} ${stock.sector} ${stock.historyNote}`.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name));
  currentCompanyResults = companies;
  const totalCap = companies.reduce((sum, stock) => sum + stock.marketCap, 0);
  const avgYield = companies.reduce((sum, stock) => sum + stock.yield, 0) / (companies.length || 1);
  const sectors = new Set(companies.map((stock) => stock.sector)).size;

  byId("companyDirectoryMetrics").innerHTML = [
    directoryMetric("Companies", number.format(companies.length)),
    directoryMetric("Sectors", number.format(sectors)),
    directoryMetric("Tracked market cap", currency.format(totalCap)),
    directoryMetric("Avg dividend yield", `${avgYield.toFixed(1)}%`),
  ].join("");

  byId("companyGrid").innerHTML = companies.length
    ? companies.map((stock) => `
      <article class="company-card">
        <div class="company-card-main">
          <div class="company-card-header">
            <div>
              <span class="eyebrow">${stock.sector}</span>
              <div class="company-card-title">${companyLogo(stock, "lg")}<h3>${stock.name}</h3></div>
            </div>
            <span class="company-badge">${stock.ticker}</span>
          </div>
          <p>${stock.historyNote}</p>
        </div>
        <div class="company-card-side">
          <div class="company-facts">
            <div class="company-fact"><span>Listed</span><strong>${stock.listed || "GSE"}</strong></div>
            <div class="company-fact"><span>Market cap</span><strong>${currency.format(stock.marketCap)}</strong></div>
            <div class="company-fact"><span>Dividend yield</span><strong>${stock.yield.toFixed(1)}%</strong></div>
            <div class="company-fact"><span>P/E</span><strong>${stock.pe.toFixed(1)}</strong></div>
            <div class="company-fact"><span>ROE</span><strong>${stock.roe.toFixed(1)}%</strong></div>
            <div class="company-fact"><span>Recommendation</span><strong>${stock.recommendation}</strong></div>
          </div>
          <p>Use the stock view for charts, valuation indicators, and daily movement context.</p>
        </div>
      </article>
    `).join("")
    : `<div class="company-card"><h3>No companies found</h3><p>Adjust the search or sector filter.</p></div>`;
}

function directoryMetric(label, value) {
  return `<div class="company-directory-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function answerAssistantQuestion() {
  const question = byId("assistantQuestion").value.toLowerCase();
  const bestDividend = [...marketData.stocks].sort((a, b) => b.yield - a.yield).slice(0, 3);
  const banks = marketData.stocks.filter((stock) => stock.sector === "Financials").sort((a, b) => stockChange(b) - stockChange(a));
  const volumeLeader = [...marketData.stocks].sort((a, b) => b.volume - a.volume)[0];
  const top = [...marketData.stocks].sort((a, b) => stockChange(b) - stockChange(a))[0];
  let answer = `Market summary: ${top.ticker} is the strongest price mover at ${formatPercent(stockChange(top))}, while ${volumeLeader.ticker} leads volume with ${number.format(volumeLeader.volume)} shares.`;
  if (question.includes("dividend") || question.includes("yield")) {
    answer = `Highest dividend-yield screen: ${bestDividend.map((stock) => `${stock.ticker} ${stock.yield.toFixed(1)}%`).join(", ")}. Confirm with official filings before investment decisions.`;
  } else if (question.includes("bank") || question.includes("financial")) {
    answer = `Financial stocks by daily performance: ${banks.map((stock) => `${stock.ticker} ${formatPercent(stockChange(stock))}`).join(", ")}. SCB and GCB also show stronger ROE in this sample dataset.`;
  } else if (question.includes("volume") || question.includes("unusual")) {
    answer = `${volumeLeader.ticker} has the highest tracked volume at ${number.format(volumeLeader.volume)} shares. CAL also shows elevated liquidity compared with most non-telecom counters.`;
  }
  byId("assistantAnswer").textContent = answer;
}

async function loadExternalData() {
  try {
    const response = await fetch(`data/external-sources.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return;
    externalData = await response.json();
    applyExternalIndicators();
    if (externalData?.generatedAt) {
      byId("lastUpdated").textContent = `Last updated: ${ghanaDateTime.format(new Date(externalData.generatedAt))} Ghana Time`;
    }
    renderMetrics();
    renderMacro();
    renderCharts();
    generateBrief(false);
    renderSources();
  } catch (error) {
    externalData = null;
    byId("lastUpdated").textContent = `Last updated: ${formatStaticGhanaDate(marketData.tradingDate)} Ghana Time`;
  }
}

function renderAdmin() {
  byId("ingestionLog").innerHTML = [
    log("Market prices", "Last sample upload validated successfully"),
    log("Announcements", "Document retrieval connector pending"),
    log("Macro indicators", "Bank of Ghana source mapping required"),
  ].join("");
  byId("roleList").innerHTML = ["Admin", "Research Analyst", "Research Lead", "Portfolio Manager", "Compliance Officer", "Executive"].map((role) => `
    <div class="role-item"><span>Role</span><strong>${role}</strong></div>
  `).join("");
}

function log(label, value) {
  return `<div class="log-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function drawLineChart(canvasId, data, label, color) {
  const canvas = byId(canvasId);
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, rect.width, rect.height);
  const pad = 34;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const xStep = (rect.width - pad * 2) / (data.length - 1);
  const y = (value) => rect.height - pad - ((value - min) / (max - min || 1)) * (rect.height - pad * 2);

  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--line");
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i += 1) {
    const yy = pad + i * ((rect.height - pad * 2) / 3);
    ctx.beginPath();
    ctx.moveTo(pad, yy);
    ctx.lineTo(rect.width - pad, yy);
    ctx.stroke();
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  data.forEach((value, index) => {
    const x = pad + index * xStep;
    const yy = y(value);
    if (index === 0) ctx.moveTo(x, yy);
    else ctx.lineTo(x, yy);
  });
  ctx.stroke();

  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text");
  ctx.font = "700 13px system-ui";
  ctx.fillText(label, pad, 24);
}

function getIndexSeries(index, range) {
  const rangePoints = { "1M": 22, "3M": 66, "6M": 132, YTD: 86 };
  const count = rangePoints[range] || 22;
  const current = index.value;
  const previous = current - index.change;
  const rangeDrift = {
    "1M": index.percent / 100,
    "3M": index.percent / 100 + 0.05,
    "6M": index.percent / 100 + 0.12,
    YTD: index.percent / 100 + 0.1,
  }[range];
  const start = current / (1 + rangeDrift);
  const series = [];
  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1 || 1);
    const wave = Math.sin(t * Math.PI * 5) * current * 0.006;
    const smallerWave = Math.cos(t * Math.PI * 11) * current * 0.0025;
    const value = start + (previous - start) * t + wave + smallerWave;
    series.push({
      label: `T-${count - i - 1}`,
      value: i === count - 1 ? current : value,
    });
  }
  if (count > 1) series[count - 2].value = previous;
  return series;
}

function drawInteractiveIndexChart() {
  const selectedIndex = byId("indexSelect").value;
  const index = marketData.indices[selectedIndex];
  const series = getIndexSeries(index, activeIndexRange);
  const canvas = byId("indexChart");
  const tooltip = byId("indexTooltip");
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, rect.width, rect.height);

  const styles = getComputedStyle(document.documentElement);
  const text = styles.getPropertyValue("--text").trim();
  const muted = styles.getPropertyValue("--muted").trim();
  const line = styles.getPropertyValue("--line").trim();
  const accent = styles.getPropertyValue("--accent").trim();
  const good = styles.getPropertyValue("--good").trim();
  const bad = styles.getPropertyValue("--bad").trim();
  const pad = { top: 26, right: 22, bottom: 34, left: 56 };
  const values = series.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = (max - min || max * 0.01) * 0.14;
  const yMin = min - padding;
  const yMax = max + padding;
  const plotWidth = rect.width - pad.left - pad.right;
  const plotHeight = rect.height - pad.top - pad.bottom;
  const xFor = (indexPosition) => pad.left + (indexPosition / (series.length - 1 || 1)) * plotWidth;
  const yFor = (value) => pad.top + (1 - (value - yMin) / (yMax - yMin || 1)) * plotHeight;

  const gradient = ctx.createLinearGradient(0, pad.top, 0, rect.height - pad.bottom);
  gradient.addColorStop(0, "rgba(11, 107, 95, 0.28)");
  gradient.addColorStop(1, "rgba(11, 107, 95, 0.02)");

  ctx.strokeStyle = line;
  ctx.lineWidth = 1;
  ctx.fillStyle = muted;
  ctx.font = "11px system-ui";
  for (let i = 0; i < 5; i += 1) {
    const y = pad.top + (i / 4) * plotHeight;
    const value = yMax - (i / 4) * (yMax - yMin);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(rect.width - pad.right, y);
    ctx.stroke();
    ctx.fillText(number.format(Math.round(value)), 10, y + 4);
  }

  ctx.beginPath();
  series.forEach((point, indexPosition) => {
    const x = xFor(indexPosition);
    const y = yFor(point.value);
    if (indexPosition === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(xFor(series.length - 1), rect.height - pad.bottom);
  ctx.lineTo(xFor(0), rect.height - pad.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  series.forEach((point, indexPosition) => {
    const x = xFor(indexPosition);
    const y = yFor(point.value);
    if (indexPosition === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = index.change >= 0 ? good : bad;
  ctx.lineWidth = 3;
  ctx.stroke();

  const lastX = xFor(series.length - 1);
  const lastY = yFor(series[series.length - 1].value);
  ctx.fillStyle = index.change >= 0 ? good : bad;
  ctx.beginPath();
  ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = text;
  ctx.font = "700 13px system-ui";
  ctx.fillText(index.name, pad.left, 18);
  ctx.fillStyle = muted;
  ctx.font = "11px system-ui";
  ctx.fillText(`${activeIndexRange} range · ${index.source}`, pad.left, rect.height - 10);

  if (indexHoverPoint) {
    const x = xFor(indexHoverPoint.index);
    const y = yFor(indexHoverPoint.value);
    ctx.strokeStyle = "rgba(101, 113, 111, 0.7)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, rect.height - pad.bottom);
    ctx.stroke();
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    tooltip.style.display = "block";
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.innerHTML = `<strong>${number.format(Math.round(indexHoverPoint.value))}</strong><span>${index.name} · ${indexHoverPoint.label}</span>`;
  } else {
    tooltip.style.display = "none";
  }

  const startValue = series[0].value;
  const endValue = series[series.length - 1].value;
  const move = pct(endValue, startValue);
  byId("indexChartStats").innerHTML = [
    indexStat("Current", number.format(endValue.toFixed(2))),
    indexStat("Range move", formatPercent(move), classFor(move)),
    indexStat("Range high", number.format(Math.max(...values).toFixed(2))),
    indexStat("Range low", number.format(Math.min(...values).toFixed(2))),
  ].join("");
}

function indexStat(label, value, tone = "neutral") {
  return `<div class="index-stat"><span>${label}</span><strong class="${tone}">${value}</strong></div>`;
}

function drawBarChart(canvasId, data, labels) {
  const canvas = byId(canvasId);
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = rect.width * scale;
  canvas.height = rect.height * scale;
  ctx.scale(scale, scale);
  ctx.clearRect(0, 0, rect.width, rect.height);
  const pad = 34;
  const max = Math.max(...data);
  const barWidth = (rect.width - pad * 2) / data.length - 12;
  data.forEach((value, index) => {
    const height = ((value / max) * (rect.height - pad * 2));
    const x = pad + index * (barWidth + 12);
    const y = rect.height - pad - height;
    ctx.fillStyle = index < 3 ? "#0b6b5f" : "#c79a27";
    ctx.fillRect(x, y, barWidth, height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--text");
    ctx.font = "11px system-ui";
    ctx.fillText(labels[index].slice(0, 10), x, rect.height - 12);
  });
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelector(".sidebar").classList.remove("open");
}

function exportCsv() {
  const header = ["ticker", "company", "sector", "price", "previous_close", "change_percent", "volume", "value_traded", "market_cap"];
  const rows = marketData.stocks.map((stock) => [
    stock.ticker,
    stock.name,
    stock.sector,
    stock.price,
    stock.previousClose,
    stockChange(stock).toFixed(2),
    stock.volume,
    stock.value,
    stock.marketCap,
  ]);
  const csv = [header, ...rows].map((row) => row.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `gse-market-${marketData.tradingDate}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  byId("navList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (button) switchView(button.dataset.view);
  });
  byId("mobileMenu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
  byId("themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    renderCharts();
  });
  byId("indexSelect").addEventListener("change", renderCharts);
  byId("indexRangeButtons").addEventListener("click", (event) => {
    const button = event.target.closest("[data-range]");
    if (!button) return;
    activeIndexRange = button.dataset.range;
    indexHoverPoint = null;
    document.querySelectorAll(".range-button").forEach((item) => item.classList.toggle("active", item.dataset.range === activeIndexRange));
    renderCharts();
  });
  byId("indexChart").addEventListener("mousemove", (event) => {
    const canvas = byId("indexChart");
    const rect = canvas.getBoundingClientRect();
    const series = getIndexSeries(marketData.indices[byId("indexSelect").value], activeIndexRange);
    const padLeft = 56;
    const padRight = 22;
    const plotWidth = rect.width - padLeft - padRight;
    const x = Math.min(Math.max(event.clientX - rect.left, padLeft), rect.width - padRight);
    const indexPosition = Math.round(((x - padLeft) / plotWidth) * (series.length - 1));
    indexHoverPoint = { ...series[indexPosition], index: indexPosition };
    drawInteractiveIndexChart();
  });
  byId("indexChart").addEventListener("mouseleave", () => {
    indexHoverPoint = null;
    drawInteractiveIndexChart();
  });
  byId("exportMarket").addEventListener("click", exportCsv);
  byId("askAssistant").addEventListener("click", answerAssistantQuestion);
  byId("assistantQuestion").addEventListener("keydown", (event) => {
    if (event.key === "Enter") answerAssistantQuestion();
  });
  byId("recommendations").addEventListener("click", (event) => {
    const button = event.target.closest("[data-recommendation]");
    if (!button) return;
    selectedRecommendationTicker = button.dataset.recommendation;
    document.querySelectorAll("[data-recommendation]").forEach((item) => item.classList.toggle("active", item.dataset.recommendation === selectedRecommendationTicker));
    renderRecommendationDetail(selectedRecommendationTicker);
  });
  byId("sectorFilter").addEventListener("change", (event) => {
    selectedSector = event.target.value;
    renderTables();
    renderSectors();
  });
  byId("companySearch").addEventListener("input", renderCompanies);
  byId("companySectorFilter").addEventListener("change", renderCompanies);
  byId("openCompanyStock").addEventListener("click", () => {
    selectedStock = currentCompanyResults[0] || selectedStock;
    selectedSector = "all";
    byId("sectorFilter").value = "all";
    renderTables();
    renderStockDetail();
    switchView("stocks");
  });
  byId("sectorGrid").addEventListener("click", (event) => {
    const tile = event.target.closest("[data-sector]");
    if (!tile) return;
    selectedSector = selectedSector === tile.dataset.sector ? "all" : tile.dataset.sector;
    byId("sectorFilter").value = selectedSector;
    renderTables();
    renderSectors();
    switchView("stocks");
  });
  byId("sourceSearch").addEventListener("input", renderSources);
  byId("refreshSources").addEventListener("click", () => {
    renderSources();
    byId("refreshSources").textContent = "Refreshed";
  });
  byId("addAlert").addEventListener("click", () => {
    alerts = [{ title: "GSE Composite Index threshold", detail: "Index movement alert created at +/- 1.5% daily threshold.", channel: "In-app, Email", severity: "medium" }, ...alerts];
    renderAlerts();
  });
  byId("stocksTable").addEventListener("click", (event) => {
    const watchButton = event.target.closest("[data-watch]");
    if (watchButton) {
      toggleWatch(watchButton.dataset.watch);
      return;
    }
    const row = event.target.closest("[data-ticker]");
    if (!row) return;
    selectedStock = marketData.stocks.find((stock) => stock.ticker === row.dataset.ticker);
    renderStockDetail();
  });
  byId("stockDetail").addEventListener("click", (event) => {
    const watchButton = event.target.closest("[data-watch]");
    if (watchButton) toggleWatch(watchButton.dataset.watch);
  });
  document.querySelectorAll(".table-sort").forEach((button) => {
    button.addEventListener("click", () => {
      sortKey = button.dataset.sort;
      renderTables();
    });
  });
  byId("globalSearch").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll("#stocksTable tr").forEach((row) => {
      row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
    });
  });
  byId("csvUpload").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    byId("ingestionLog").insertAdjacentHTML("afterbegin", log("Manual upload", `${file.name} queued for validation`));
  });
  window.addEventListener("resize", renderCharts);
}

function toggleWatch(ticker) {
  if (watchlist.has(ticker)) watchlist.delete(ticker);
  else watchlist.add(ticker);
  saveWatchlist();
  renderTables();
  renderStockDetail();
}

function renderCharts() {
  drawInteractiveIndexChart();
  drawLineChart("stockChart", selectedStock.history, selectedStock.ticker, "#0b6b5f");
  drawBarChart("macroChart", marketData.macro.map((item) => item.value), marketData.macro.map((item) => item.name));
}

function init() {
  document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";
  renderMetrics();
  renderSectorOptions();
  renderCompanies();
  renderTables();
  renderSectors();
  renderStockDetail();
  renderPortfolio();
  renderResearch();
  renderAlerts();
  renderMacro();
  renderSources();
  renderAdmin();
  bindEvents();
  renderCharts();
  loadExternalData();
}

init();
