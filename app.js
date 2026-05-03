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
    { ticker: "GCB", name: "GCB Bank PLC", sector: "Financials", price: 6.42, open: 6.31, previousClose: 6.29, high: 6.48, low: 6.28, volume: 189400, value: 1215948, marketCap: 1701300000, shares: 265000000, high52: 7.08, low52: 4.72, pe: 4.8, eps: 1.34, roe: 22.6, roa: 3.1, yield: 6.9, book: 8.4, pb: 0.76, recommendation: "Buy", history: [5.72, 5.88, 5.91, 6.02, 5.97, 6.1, 6.18, 6.21, 6.29, 6.35, 6.42] },
    { ticker: "CAL", name: "CalBank PLC", sector: "Financials", price: 0.67, open: 0.64, previousClose: 0.64, high: 0.68, low: 0.63, volume: 871000, value: 583570, marketCap: 375200000, shares: 560000000, high52: 0.85, low52: 0.48, pe: 3.2, eps: 0.21, roe: 18.1, roa: 2.4, yield: 5.2, book: 1.08, pb: 0.62, recommendation: "Hold", history: [0.58, 0.59, 0.6, 0.61, 0.6, 0.63, 0.62, 0.64, 0.64, 0.65, 0.67] },
    { ticker: "SCB", name: "Standard Chartered Bank Ghana PLC", sector: "Financials", price: 24.1, open: 23.6, previousClose: 23.5, high: 24.3, low: 23.4, volume: 24100, value: 580810, marketCap: 3243860000, shares: 134600000, high52: 25.4, low52: 18.2, pe: 5.9, eps: 4.08, roe: 27.8, roa: 4.4, yield: 8.1, book: 19.2, pb: 1.26, recommendation: "Buy", history: [21.6, 22.0, 22.4, 22.1, 22.8, 23.0, 23.1, 23.5, 23.7, 23.9, 24.1] },
    { ticker: "EGL", name: "Enterprise Group PLC", sector: "Insurance", price: 3.22, open: 3.2, previousClose: 3.21, high: 3.24, low: 3.18, volume: 58200, value: 187404, marketCap: 521640000, shares: 162000000, high52: 3.8, low52: 2.74, pe: 6.1, eps: 0.53, roe: 17.2, roa: 2.8, yield: 4.7, book: 4.05, pb: 0.8, recommendation: "Hold", history: [3.02, 3.05, 3.08, 3.1, 3.09, 3.14, 3.16, 3.21, 3.2, 3.2, 3.22] },
    { ticker: "MTNGH", name: "MTN Ghana", sector: "Telecom", price: 2.84, open: 2.86, previousClose: 2.88, high: 2.89, low: 2.82, volume: 1320000, value: 3748800, marketCap: 37062000000, shares: 13050000000, high52: 3.05, low52: 1.88, pe: 12.4, eps: 0.23, roe: 31.5, roa: 12.8, yield: 7.4, book: 0.68, pb: 4.18, recommendation: "Hold", history: [2.54, 2.6, 2.69, 2.74, 2.76, 2.82, 2.9, 2.92, 2.88, 2.86, 2.84] },
    { ticker: "GOIL", name: "GOIL PLC", sector: "Energy", price: 1.78, open: 1.82, previousClose: 1.83, high: 1.84, low: 1.76, volume: 94400, value: 168032, marketCap: 696000000, shares: 391000000, high52: 2.1, low52: 1.32, pe: 7.0, eps: 0.25, roe: 14.3, roa: 5.5, yield: 3.8, book: 2.12, pb: 0.84, recommendation: "Hold", history: [1.62, 1.65, 1.71, 1.75, 1.77, 1.81, 1.86, 1.85, 1.83, 1.8, 1.78] },
    { ticker: "TOTAL", name: "TotalEnergies Marketing Ghana PLC", sector: "Energy", price: 13.9, open: 14.0, previousClose: 14.1, high: 14.05, low: 13.85, volume: 7200, value: 100080, marketCap: 1540000000, shares: 110800000, high52: 15.2, low52: 11.1, pe: 8.5, eps: 1.64, roe: 19.4, roa: 7.1, yield: 5.6, book: 11.8, pb: 1.18, recommendation: "Hold", history: [12.4, 12.7, 13.1, 13.4, 13.6, 13.9, 14.3, 14.2, 14.1, 14.0, 13.9] },
    { ticker: "UNIL", name: "Unilever Ghana PLC", sector: "Consumer", price: 18.44, open: 18.5, previousClose: 18.52, high: 18.6, low: 18.4, volume: 3400, value: 62696, marketCap: 1152500000, shares: 62500000, high52: 20.3, low52: 14.2, pe: 10.8, eps: 1.71, roe: 15.8, roa: 8.3, yield: 4.1, book: 13.2, pb: 1.4, recommendation: "Hold", history: [17.4, 17.8, 18.1, 18.0, 18.3, 18.6, 18.7, 18.52, 18.46, 18.5, 18.44] },
    { ticker: "FML", name: "Fan Milk PLC", sector: "Consumer", price: 3.75, open: 3.7, previousClose: 3.68, high: 3.77, low: 3.68, volume: 21200, value: 79500, marketCap: 437250000, shares: 116600000, high52: 4.2, low52: 2.9, pe: 9.4, eps: 0.4, roe: 13.6, roa: 6.0, yield: 3.6, book: 3.1, pb: 1.21, recommendation: "Buy", history: [3.2, 3.28, 3.33, 3.4, 3.48, 3.55, 3.6, 3.68, 3.7, 3.73, 3.75] },
    { ticker: "BOPP", name: "Benso Oil Palm Plantation PLC", sector: "Agriculture", price: 22.2, open: 22.1, previousClose: 22.1, high: 22.25, low: 22.0, volume: 1800, value: 39960, marketCap: 770340000, shares: 34700000, high52: 24.8, low52: 17.6, pe: 6.7, eps: 3.31, roe: 24.2, roa: 11.1, yield: 9.3, book: 15.5, pb: 1.43, recommendation: "Buy", history: [19.1, 19.8, 20.3, 20.9, 21.4, 21.8, 22.0, 22.1, 22.1, 22.15, 22.2] },
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

const currency = new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-GH");

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

function renderMetrics() {
  const totalValue = marketData.stocks.reduce((sum, stock) => sum + stock.value, 0);
  const totalVolume = marketData.stocks.reduce((sum, stock) => sum + stock.volume, 0);
  const totalCap = marketData.stocks.reduce((sum, stock) => sum + stock.marketCap, 0);
  const advancers = marketData.stocks.filter((stock) => stockChange(stock) > 0).length;
  const decliners = marketData.stocks.filter((stock) => stockChange(stock) < 0).length;
  const unchanged = marketData.stocks.length - advancers - decliners;

  byId("tradingDate").textContent = marketData.tradingDate;
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

  byId("gainersTable").innerHTML = gainers.map(stockChangeRow).join("");
  byId("losersTable").innerHTML = losers.map(stockChangeRow).join("");
  byId("tradedTable").innerHTML = traded.map((stock) => `<tr><td>${stock.ticker}</td><td>${number.format(stock.volume)}</td><td>${currency.format(stock.value)}</td></tr>`).join("");
  byId("stocksTable").innerHTML = marketData.stocks.map((stock) => {
    const change = stockChange(stock);
    return `<tr class="stock-row" data-ticker="${stock.ticker}"><td><strong>${stock.ticker}</strong></td><td>${stock.name}</td><td>${stock.sector}</td><td class="${classFor(change)}">${formatPercent(change)}</td></tr>`;
  }).join("");
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
    return `<div class="sector-tile"><strong>${sector}</strong><span class="${classFor(avg)}">${formatPercent(avg)}</span><small>${changes.length} listed equities</small></div>`;
  }).join("");
}

function renderStockDetail() {
  const change = stockChange(selectedStock);
  byId("stockDetail").innerHTML = `
    <p class="eyebrow">${selectedStock.sector}</p>
    <h2>${selectedStock.ticker} · ${selectedStock.name}</h2>
    <p><strong>GHS ${selectedStock.price.toFixed(2)}</strong> <span class="${classFor(change)}">${formatPercent(change)}</span></p>
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
    <div class="workflow-item">
      <span>${stock.ticker} · ${stock.sector}</span>
      <strong>${stock.recommendation}</strong>
      <p>P/E ${stock.pe.toFixed(1)} · Dividend yield ${stock.yield.toFixed(1)}% · ROE ${stock.roe.toFixed(1)}%</p>
    </div>
  `).join("");
  generateBrief();
}

function generateBrief() {
  const advancers = marketData.stocks.filter((stock) => stockChange(stock) > 0).length;
  const decliners = marketData.stocks.filter((stock) => stockChange(stock) < 0).length;
  const top = [...marketData.stocks].sort((a, b) => stockChange(b) - stockChange(a))[0];
  const volumeLeader = [...marketData.stocks].sort((a, b) => b.volume - a.volume)[0];
  byId("marketBrief").innerHTML = `
    <p>The GSE market closed with a constructive institutional tone as ${advancers} advancers outpaced ${decliners} decliners. The GSE Composite Index gained ${formatPercent(marketData.indices.composite.percent)}, while the Financial Stocks Index added ${formatPercent(marketData.indices.financial.percent)}.</p>
    <p>${top.ticker} led price momentum with a ${formatPercent(stockChange(top))} move, supported by improved trading interest. ${volumeLeader.ticker} was the most active counter by volume, indicating continued liquidity concentration in high-cap names.</p>
    <p>Macro conditions remain important for equity allocation because the 91-day T-bill rate is ${marketData.macro[0].value.toFixed(1)}%, creating a high hurdle rate for dividend and growth equities. Income-focused screens should continue comparing dividend yield, liquidity, and earnings quality.</p>
  `;
}

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
  byId("sourceGrid").innerHTML = marketData.sources.map((source) => `
    <article class="source-item">
      <span>${source.type}</span>
      <strong>${source.name}</strong>
      <p>${source.note}</p>
      <p><a href="${source.url}" target="_blank" rel="noreferrer">Open source link</a></p>
    </article>
  `).join("");
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
  byId("exportMarket").addEventListener("click", exportCsv);
  byId("generateBrief").addEventListener("click", generateBrief);
  byId("addAlert").addEventListener("click", () => {
    alerts = [{ title: "GSE Composite Index threshold", detail: "Index movement alert created at +/- 1.5% daily threshold.", channel: "In-app, Email", severity: "medium" }, ...alerts];
    renderAlerts();
  });
  byId("stocksTable").addEventListener("click", (event) => {
    const row = event.target.closest("[data-ticker]");
    if (!row) return;
    selectedStock = marketData.stocks.find((stock) => stock.ticker === row.dataset.ticker);
    renderStockDetail();
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

function renderCharts() {
  const selectedIndex = byId("indexSelect").value;
  const index = marketData.indices[selectedIndex];
  drawLineChart("indexChart", index.history, index.name, "#0b6b5f");
  drawLineChart("stockChart", selectedStock.history, selectedStock.ticker, "#0b6b5f");
  drawBarChart("macroChart", marketData.macro.map((item) => item.value), marketData.macro.map((item) => item.name));
}

function init() {
  document.documentElement.dataset.theme = localStorage.getItem("theme") || "light";
  renderMetrics();
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
}

init();
