/* V2.6 optional action pages (PRD §5.2). Shared by both V2.6 decks.
   Pages keep stable appendix-style IDs (A-01, A-03, A-04), sit before Considerations
   & next steps and are hidden until the viewer posts
   {type:'ds-actions', on:['A-01',…]}. Charts use the PRD primitive:
   step chart, current = hollow marker, modeled = filled marker. */
import { FED_STEPS, CG_STEPS, actionComparisons, actionChartComparisons, hasQcdComparison, selectedActionIds } from './prd-actions-data.js';

const money = (n) => (n < 0 ? '−$' : '$') + Math.abs(Math.round(n)).toLocaleString('en-US');
const signed = (n) => (n === 0 ? '$0' : (n > 0 ? '+' : '−') + '$' + Math.abs(Math.round(n)).toLocaleString('en-US'));
const k = (n) => (n >= 1000 ? '$' + Math.round(n / 1000) + 'k' : '$' + n);

/* Charts render at their real pixel width so SVG text matches the page's
   HTML type scale (no viewBox scaling). Step labels sit inside the plot at
   the right end, so there is no lopsided label gutter. */
const CHARTS = [];
function stepChart(opts) {
  CHARTS.push(opts);
  return `<div class="pa-chartbox" data-chart="${CHARTS.length - 1}"></div>`;
}
function drawChart({ steps, comparisonSteps, xMin, xMax, yMax, points, numberLine = false }, W) {
  const H = Math.round(Math.max(260, Math.min(320, W * 0.25))), L = 10, R = 10, T = 92, B = 30;
  const x = (v) => L + ((Math.max(xMin, Math.min(xMax, v)) - xMin) / (xMax - xMin)) * (W - L - R);
  const y = (v) => T + (1 - v / yMax) * (H - T - B);
  const valAt = (ss, v) => (ss.find((s) => v >= s.from && v < s.to) || ss[ss.length - 1]).v;
  const path = (ss) => ss.filter(s => s.to > xMin && s.from < xMax).map((s, i) => `${i ? 'L' : 'M'}${x(s.from)},${y(s.v)} L${x(s.to)},${y(s.v)}`).join(' ');
  const d = path(steps);
  const marks = points.map((p, i) => {
    const my = y(valAt(p.steps || steps, p.value));
    const duplicate = points.slice(0, i).filter(q => q.value === p.value).length;
    return { ...p, mx: x(p.value), my, displayY: my - duplicate * 18 };
  });
  const visible = steps.filter(s => s.from < xMax && s.to > xMin);
  const grid = numberLine ? '' : visible.map(s => `<line x1="${L}" x2="${W-R}" y1="${y(s.v)}" y2="${y(s.v)}" class="pa-grid"/>`).join('');
  const labels = visible.map(s => {
    const tx = x(s.to) - 8, yy = y(s.v);
    const crowded = marks.some(m => Math.abs(m.displayY - yy) < 25 && m.mx > tx - s.lbl.length * 8 - 12 && m.mx < tx + 12);
    return `<text x="${tx}" y="${yy + (crowded ? 22 : -8)}" text-anchor="end" class="pa-step">${s.lbl}</text>`;
  }).join('');
  const ticks = visible.filter(s => s.from > xMin).map(s => `<text x="${x(s.from)}" y="${H-B+20}" text-anchor="middle" class="pa-tick">${k(s.from)}</text>`).join('');
  const markers = marks.map((p, i) => {
    const lx = L + (i + 0.5) * (W-L-R) / points.length;
    const title = p.label.startsWith('Lookback') ? 'Lookback · 2025 · as filed' : p.label;
    const shape = p.id === 'lookback' ? `<circle cx="${p.mx}" cy="${p.displayY}" r="7" class="pa-point ${p.id}"/>` : p.id === 'florida' ? `<rect x="${p.mx-6}" y="${p.displayY-6}" width="12" height="12" class="pa-point ${p.id}"/>` : `<path d="M${p.mx},${p.displayY-8} l8,14 h-16 Z" class="pa-point ${p.id}"/>`;
    return `<g data-scenario="${p.id}"><text x="${lx}" y="20" text-anchor="middle" class="pa-marker-label ${p.id}">${title}</text><text x="${lx}" y="42" text-anchor="middle" class="pa-tick">${money(p.value)}</text><path d="M${lx},52 V${T-32+i*8} H${p.mx} V${p.displayY-10}" fill="none" class="pa-drop ${p.id}"/>${p.displayY !== p.my ? `<line x1="${p.mx}" x2="${p.mx}" y1="${p.my}" y2="${p.displayY}" class="pa-drop ${p.id}"/>` : ''}${shape}</g>`;
  }).join('');
  const tickY = numberLine ? y(steps[0].v) + 25 : H-B+20;
  return `<svg class="pa-chart" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${numberLine ? 'Adjusted gross income number line; horizontal position indicates income. ' : ''}${points.length ? points.map(p => p.label + ': ' + money(p.value)).join('; ') : 'No planning scenarios selected; Lookback is shown in the table'}">${numberLine ? '' : `<path d="${d} L${W-R},${H-B} L${L},${H-B} Z" class="pa-area"/>`}${grid}<path d="${d}" class="pa-line"/>${comparisonSteps ? `<path d="${path(comparisonSteps)}" class="pa-lookback-line"/>` : ''}${labels}${numberLine ? '' : `<line x1="${L}" x2="${W-R}" y1="${H-B}" y2="${H-B}" class="pa-axis"/>`}${ticks}<text x="${L}" y="${tickY}" class="pa-tick">${k(xMin)}</text><text x="${W-R}" y="${tickY}" text-anchor="end" class="pa-tick">${k(xMax)}</text>${markers}</svg>`;
}
function renderCharts() {
  document.querySelectorAll('.pa-chartbox').forEach((box) => {
    const W = Math.round(box.clientWidth);
    if (!W || box.dataset.w === String(W)) return;
    box.dataset.w = String(W);
    const c = CHARTS[+box.dataset.chart];
    box.innerHTML = drawChart(c, W);
  });
}

function table(scenarios, rows) {
  return `<table class="dense pa-table"><thead><tr><th scope="col">Line item</th>${scenarios.map((s, i) => `<th scope="col" class="n s${i + 1}">${s.id === 'lookback' ? 'Lookback' : s.label}<br><span class="note">${s.year === 2025 ? '2025 · as filed' : '2026 · estimated'}</span></th>`).join('')}</tr></thead><tbody>${rows.map(([label, get]) => `<tr><th scope="row">${label}</th>${scenarios.map(s => `<td class="n">${get(s)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function page(id) {
  const el = document.createElement('section');
  el.className = 'slide led hide pa-page';
  el.dataset.optionalAction = id;
  return el;
}
const PAGES = ['A-01', 'A-03', 'A-04'].map(id => ({ id, el: page(id) }));
let comparisonCount = Number(document.documentElement.dataset.strategies) || 3;
const rateSteps = (ss) => ss.map(s => ({ ...s, v: s.rate, lbl: s.rate + '%' }));
function updateComparisons(n) {
  comparisonCount = n;
  const scenarios = actionComparisons(n);
  const chartScenarios = actionChartComparisons(n);
  CHARTS.length = 0;
  const chart = (steps, key, xMax, yMax, numberLine = false) => stepChart({ steps, xMin: 0, xMax, yMax, numberLine, points: chartScenarios.map(s => ({ id: s.id, label: s.label, value: s[key], steps })) });
  const qcdIncluded = hasQcdComparison(n);
  const rf = scenarios.find(s => s.id === 'florida-roth');
  const specs = [
    { title: 'Roth conversion · federal brackets', eyebrow: 'Ordinary taxable income · 2025 filed / 2026 estimated',
      chart: chart(rateSteps(FED_STEPS), 'ordinaryIncome', 260000, 32),
      rows: [['Roth conversion', s => money(s.conversion)], ['Ordinary taxable income', s => money(s.ordinaryIncome)], ['Top federal bracket', s => s.federalRate + '%'], ['Ordinary income tax', s => money(s.ordinaryTax)], ['Room before 24%', s => money(s.roomBefore24)]],
      read: `${rf ? 'Scenario 2 includes the $50,000 conversion; Scenario 1 does not. The conversion adds $11,000 of ordinary federal tax compared with Scenario 1.' : 'No Roth conversion is included in the selected comparisons.'} The chart shows selected planning scenarios against 2026 brackets; Lookback stays in the table using 2025 brackets. Differences from Lookback also reflect the year and deductions, not only a conversion. Your tax preparer should confirm the figures.` },
    { title: 'Capital gains · scenario comparison', eyebrow: 'Total taxable income · preferential rates · 2025 / 2026',
      chart: chart(rateSteps(CG_STEPS), 'taxableIncome', 760000, 24),
      rows: [['Long-term gain realized', s => money(s.gain)], ['Qualified dividends', s => money(s.qualifiedDividends)], ['Total taxable income', s => money(s.taxableIncome)], ['Top preferential rate', s => s.capitalRate + '%'], ['Tax on dividends & gains', s => money(s.preferentialTax)], ['Room before 20%', s => money(s.roomBefore20)]],
      read: `No selected scenario realizes a long-term gain. Each includes $12,000 of qualified dividends, with $1,800 of preferential tax. ${rf ? 'The Roth conversion uses $50,000 of room before 20%, without changing that tax. ' : ''}The chart uses 2026 thresholds for selected planning scenarios; Lookback stays in the table using 2025 thresholds. Net investment income tax and state tax are separate.` },
    { title: 'Qualified charitable distribution · AGI effect', eyebrow: 'Adjusted gross income · selected report comparisons',
      chart: chart([{ from: 0, to: Infinity, v: 1, lbl: 'Adjusted gross income' }], 'agi', 400000, 2, true),
      rows: [['Gross IRA distribution', s => money(s.iraDistribution)], ['Qualified charitable distribution', s => money(s.qcd)], ['Taxable IRA distribution', s => money(s.taxableIra)], ['Adjusted gross income', s => money(s.agi)]],
      read: `${qcdIncluded ? 'The chart compares total scenario AGI; differences may reflect other assumptions as well as QCDs.' : 'No QCD is included in these scenarios, so there is no QCD-related AGI reduction. ' + (rf ? 'Scenario 2’s $50,000 taxable IRA distribution is the Roth conversion, not charitable funding. ' : '')} Lookback remains in the table for historical context; only selected planning scenarios appear on the chart. QCD comparisons require eligibility and reporting review; an excluded QCD is not also deducted.` },
  ];
  PAGES.forEach((p, i) => {
    const spec = specs[i];
    const header = p.el.querySelector('.hdr .r')?.textContent || '';
    const footer = p.el.querySelector('.ftr span:last-child')?.textContent || '';
    p.el.innerHTML = `<div class="hdr"><span class="l">Bob &amp; Sally Jones · MFJ</span><span class="r">${header}</span></div><div class="body"><div class="eyebrow">${spec.eyebrow}</div><h2>${spec.title}</h2><div class="pnl pa-fig">${spec.chart}</div><div class="pnl pa-table-panel">${table(scenarios, spec.rows)}</div><div class="fn"><p><b>How to read this page:</b> ${spec.read}</p></div></div><div class="ftr"><span>Bob &amp; Sally Jones · MFJ · Action pages</span><span>${footer}</span></div>`;
  });
  requestAnimationFrame(renderCharts);
}
updateComparisons(comparisonCount);

const anchor = [...document.querySelectorAll('.slide')].find((s) => s.querySelector('h2')?.textContent.trim() === 'Considerations & next steps');
const predecessor = anchor?.previousElementSibling;
PAGES.forEach((p) => anchor?.before(p.el));

/* Optional illustrations use a compact index; core numbers and preparer
   cross-references stay unchanged. Internal action IDs are never printed. */
const contentsBody = document.querySelector('.toc-light .body');
const optionalIndex = document.createElement('div');
optionalIndex.className = 'pa-optional-index nopnl';
optionalIndex.hidden = true;
contentsBody?.querySelector('.actw')?.before(optionalIndex);
const summaryNumber = predecessor?.querySelector('.hdr .r')?.textContent.match(/^\d+/)?.[0] || '01';
const names = ['Roth · federal brackets', 'Capital gains realization', 'QCD · AGI effect'];

function apply(on) {
  const entries = [];
  const selected = selectedActionIds(on);
  PAGES.forEach((p, index) => {
    const v = selected.includes(p.id);
    p.el.classList.toggle('hide', !v);
    const label = summaryNumber + String.fromCharCode(97 + entries.length);
    const header = p.el.querySelector('.hdr .r');
    const footer = p.el.querySelector('.ftr span:last-child');
    if (header) header.textContent = label + ' — ' + names[index];
    if (footer) footer.textContent = 'Illustrative only · not tax advice · ' + label;
    if (v) entries.push(`<span data-action-index="${p.id}"><b>${label}</b> ${names[index]}</span>`);
  });
  optionalIndex.hidden = entries.length === 0;
  optionalIndex.innerHTML = '<div class="lbl">Scenario illustrations before considerations &amp; next steps</div><div class="pa-optional-list">' + entries.join('') + '</div>';
  parent.postMessage({ type: 'ds-pages-changed', count: document.querySelectorAll('.slide:not(.hide)').length }, location.origin);
  window.dispatchEvent(new Event('resize'));
  requestAnimationFrame(renderCharts);
}
window.addEventListener('message', (e) => {
  if (e.origin !== location.origin) return;
  const d = e.data || {};
  if (d.type === 'ds-actions') apply(Array.isArray(d.on) ? d.on : []);
  if (d.type === 'ds-strategies') updateComparisons(Math.max(1, Math.min(3, Math.trunc(Number(d.n)) || 3)));
});
window.addEventListener('resize', () => requestAnimationFrame(renderCharts));
new ResizeObserver(() => renderCharts()).observe(document.body);

/* Threshold lines on the bar charts overhang the bar by the same amount
   above and below (previously they started at the container top and ran
   6–10px below the bar to reach the label row). */
function evenThresholds() {
  document.querySelectorAll('div[style*="border-left:1.5px dashed"]').forEach((ln) => ln.classList.add('pa-thr'));
  document.querySelectorAll('.pa-thr').forEach((ln) => {
    const bar = [...ln.parentElement.children].find((c) => c !== ln && c.offsetHeight > 10);
    if (!bar || !bar.offsetHeight) return;
    const o = 4, top = bar.getBoundingClientRect().top - ln.parentElement.getBoundingClientRect().top;
    const z = ln.parentElement.getBoundingClientRect().height / (ln.parentElement.offsetHeight || 1);
    ln.style.top = top / z - o + 'px';
    ln.style.bottom = 'auto';
    ln.style.height = bar.offsetHeight + o * 2 + 'px';
  });
}
evenThresholds();
window.addEventListener('resize', () => requestAnimationFrame(evenThresholds));
