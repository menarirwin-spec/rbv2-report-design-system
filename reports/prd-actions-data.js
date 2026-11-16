/* Shared V2.6 action-page figures. The selected comparison count includes
   the filed Lookback, just like the core report. No new actions are assumed. */
export const REPORT_SCENARIOS = [
  { id: 'lookback', label: 'Lookback · 2025 · as filed', year: 2025, conversion: 0, ordinaryIncome: 122147, ordinaryTax: 16689, taxableIncome: 134147, agi: 252094, iraDistribution: 0, qcd: 0, gain: 0, qualifiedDividends: 12000 },
  { id: 'florida', label: 'Scenario 1 · Florida', year: 2026, conversion: 0, ordinaryIncome: 129347, ordinaryTax: 17880, taxableIncome: 141347, agi: 252094, iraDistribution: 0, qcd: 0, gain: 0, qualifiedDividends: 12000 },
  { id: 'florida-roth', label: 'Scenario 2 · Florida + Roth', year: 2026, conversion: 50000, ordinaryIncome: 179347, ordinaryTax: 28880, taxableIncome: 191347, agi: 302094, iraDistribution: 50000, qcd: 0, gain: 0, qualifiedDividends: 12000 },
];

export function selectedScenarios(count = 3, scenarios = REPORT_SCENARIOS) {
  return scenarios.slice(0, Math.max(1, Math.min(scenarios.length, Math.trunc(Number(count)) || 3)));
}

export function actionComparisons(count = 3, scenarios = REPORT_SCENARIOS) {
  return selectedScenarios(count, scenarios).map((s) => {
    const federal = s.year === 2025 ? FED_STEPS_2025 : FED_STEPS;
    const capital = s.year === 2025 ? CG_STEPS_2025 : CG_STEPS;
    const preferential = s.gain + s.qualifiedDividends;
    return { ...s, federal, capital, federalRate: stepAt(federal, s.ordinaryIncome),
      roomBefore24: Math.max(0, federal[3].from - s.ordinaryIncome),
      capitalRate: stepAt(capital, s.taxableIncome),
      preferentialTax: bracketTax(s.taxableIncome, capital) - bracketTax(Math.max(0, s.taxableIncome - preferential), capital),
      roomBefore20: Math.max(0, capital[2].from - s.taxableIncome),
      taxableIra: s.iraDistribution - s.qcd };
  });
}

export function actionChartComparisons(count = 3, scenarios = REPORT_SCENARIOS) {
  return actionComparisons(count, scenarios).filter(s => s.id !== 'lookback');
}

export function hasQcdComparison(count = 3, scenarios = REPORT_SCENARIOS) {
  return actionChartComparisons(count, scenarios).some(s => s.qcd > 0);
}

export function selectedActionIds(on = []) {
  return ['A-01', 'A-03', 'A-04'].filter(id => on.includes(id));
}

export const FED_STEPS_2025 = [
  { from: 0, to: 23850, rate: 10 }, { from: 23850, to: 96750, rate: 12 },
  { from: 96750, to: 206700, rate: 22 }, { from: 206700, to: 394600, rate: 24 },
  { from: 394600, to: 501050, rate: 32 }, { from: 501050, to: 751600, rate: 35 },
  { from: 751600, to: Infinity, rate: 37 },
];
export const CG_STEPS_2025 = [
  { from: 0, to: 96700, rate: 0 }, { from: 96700, to: 600050, rate: 15 },
  { from: 600050, to: Infinity, rate: 20 },
];

/* 2026 MFJ ordinary brackets: IRS Revenue Procedure 2025-32. */
export const FED_STEPS = [
  { from: 0, to: 24800, rate: 10 },
  { from: 24800, to: 100800, rate: 12 },
  { from: 100800, to: 211400, rate: 22 },
  { from: 211400, to: 403550, rate: 24 },
  { from: 403550, to: 512450, rate: 32 },
  { from: 512450, to: 768700, rate: 35 },
  { from: 768700, to: Infinity, rate: 37 },
];

/* 2026 IRMAA household surcharge per year (MFJ, both enrolled) by MAGI. */
export const IRMAA_STEPS = [
  { from: 0, to: 218000, value: 0, label: 'Standard' },
  { from: 218000, to: 274000, value: 1980, label: 'Tier 1' },
  { from: 274000, to: 342000, value: 4992, label: 'Tier 2' },
  { from: 342000, to: 410000, value: 8004, label: 'Tier 3' },
  { from: 410000, to: 750000, value: 11016, label: 'Tier 4' },
];

/* 2026 preferential-rate thresholds on total taxable income (MFJ). */
export const CG_STEPS = [
  { from: 0, to: 98900, rate: 0 },
  { from: 98900, to: 613700, rate: 15 },
  { from: 613700, to: 760000, rate: 20 },
];

export function stepAt(steps, x, key = 'rate') {
  const s = steps.find((st) => x >= st.from && x < st.to) || steps[steps.length - 1];
  return s[key];
}

export function bracketTax(x, steps = FED_STEPS) {
  let t = 0;
  for (const s of steps) if (x > s.from) t += (Math.min(x, s.to) - s.from) * (s.rate / 100);
  return Math.round(t);
}

export function rothFederal() {
  const current = 129347;
  const conversion = 50000;
  const modeled = current + conversion;
  return {
    current, modeled, conversion,
    currentTax: bracketTax(current),
    modeledTax: bracketTax(modeled),
    addedTax: bracketTax(modeled) - bracketTax(current),
    roomBefore24Current: 211400 - current,
    roomBefore24Modeled: 211400 - modeled,
  };
}

export function rothIrmaa() {
  const current = 252094;
  const modeled = 302094;
  const cur = stepAt(IRMAA_STEPS, current, 'value');
  const mod = stepAt(IRMAA_STEPS, modeled, 'value');
  return {
    current, modeled,
    currentTier: stepAt(IRMAA_STEPS, current, 'label'),
    modeledTier: stepAt(IRMAA_STEPS, modeled, 'label'),
    currentSurcharge: cur, modeledSurcharge: mod, addedSurcharge: mod - cur,
    headroomCurrent: 274000 - current, headroomModeled: 342000 - modeled,
  };
}

export function gainRealization() {
  const current = 141347; /* Scenario 1 taxable income */
  const gain = 100000; /* hypothetical long-term gain */
  const modeled = current + gain;
  return {
    current, modeled, gain, qualifiedDividends: 12000,
    rateOnGain: stepAt(CG_STEPS, modeled),
    taxOnGain: Math.round(gain * stepAt(CG_STEPS, modeled) / 100),
    roomBefore20Current: 613700 - current,
    roomBefore20Modeled: 613700 - modeled,
  };
}

export function qcdAgi() {
  const otherIncome = 80000;
  const iraDistribution = 30000;
  const gift = 20000;
  const currentTaxableDistribution = iraDistribution;
  const modeledTaxableDistribution = iraDistribution - gift;
  return { otherIncome, iraDistribution, gift, currentTaxableDistribution, modeledTaxableDistribution, current: otherIncome + currentTaxableDistribution, modeled: otherIncome + modeledTaxableDistribution };
}
