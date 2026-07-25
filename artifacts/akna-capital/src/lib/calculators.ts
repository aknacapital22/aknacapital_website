// Shared financial calculator formulas.
// All formulas are standard, illustrative estimates — not a guarantee of actual returns.

function sipFactor(monthlyRate: number, months: number): number {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return months;
  return (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
}

export interface SipResult {
  invested: number;
  returns: number;
  total: number;
}

export function sipFutureValueMonths(monthlyInvestment: number, annualRatePercent: number, months: number): SipResult {
  const r = annualRatePercent / 100 / 12;
  const invested = monthlyInvestment * Math.max(months, 0);
  const total = monthlyInvestment * sipFactor(r, months);
  return { invested, returns: total - invested, total };
}

export function sipFutureValue(monthlyInvestment: number, annualRatePercent: number, years: number): SipResult {
  return sipFutureValueMonths(monthlyInvestment, annualRatePercent, Math.round(years * 12));
}

export interface SipDelayResult {
  fvNoDelay: number;
  fvDelayed: number;
  lossFromDelay: number;
  effectiveMonths: number;
}

export function sipDelayImpact(
  monthlyInvestment: number,
  annualRatePercent: number,
  years: number,
  delayMonths: number
): SipDelayResult {
  const totalMonths = Math.round(years * 12);
  const effectiveMonths = Math.max(totalMonths - Math.max(delayMonths, 0), 0);
  const fvNoDelay = sipFutureValueMonths(monthlyInvestment, annualRatePercent, totalMonths).total;
  const fvDelayed = sipFutureValueMonths(monthlyInvestment, annualRatePercent, effectiveMonths).total;
  return { fvNoDelay, fvDelayed, lossFromDelay: fvNoDelay - fvDelayed, effectiveMonths };
}

export interface GoalResult {
  futureCost: number;
  requiredMonthlySIP: number;
}

export function goalCalculator(
  currentCost: number,
  yearsToGoal: number,
  inflationPercent: number,
  returnPercent: number
): GoalResult {
  const futureCost = currentCost * (1 + inflationPercent / 100) ** Math.max(yearsToGoal, 0);
  const r = returnPercent / 100 / 12;
  const months = Math.round(yearsToGoal * 12);
  const factor = sipFactor(r, months);
  const requiredMonthlySIP = factor > 0 ? futureCost / factor : 0;
  return { futureCost, requiredMonthlySIP };
}

export interface RetirementResult {
  yearsToRetirement: number;
  yearsInRetirement: number;
  monthlyExpenseAtRetirement: number;
  corpusRequired: number;
  requiredMonthlySIP: number;
}

export function retirementCalculator(
  currentAge: number,
  retirementAge: number,
  lifeExpectancy: number,
  currentMonthlyExpense: number,
  inflationPercent: number,
  preReturnPercent: number,
  postReturnPercent: number
): RetirementResult {
  const yearsToRetirement = Math.max(retirementAge - currentAge, 0);
  const yearsInRetirement = Math.max(lifeExpectancy - retirementAge, 0);
  const monthlyExpenseAtRetirement = currentMonthlyExpense * (1 + inflationPercent / 100) ** yearsToRetirement;
  const annualExpenseAtRetirement = monthlyExpenseAtRetirement * 12;

  const realReturn = (1 + postReturnPercent / 100) / (1 + inflationPercent / 100) - 1;
  const corpusRequired =
    realReturn === 0
      ? annualExpenseAtRetirement * yearsInRetirement
      : annualExpenseAtRetirement * ((1 - (1 + realReturn) ** -yearsInRetirement) / realReturn);

  const r = preReturnPercent / 100 / 12;
  const months = Math.round(yearsToRetirement * 12);
  const factor = sipFactor(r, months);
  const requiredMonthlySIP = factor > 0 ? corpusRequired / factor : 0;

  return { yearsToRetirement, yearsInRetirement, monthlyExpenseAtRetirement, corpusRequired, requiredMonthlySIP };
}

export interface EmiResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
}

export function emiCalculator(principal: number, annualRatePercent: number, tenureYears: number): EmiResult {
  const n = Math.round(tenureYears * 12);
  const r = annualRatePercent / 100 / 12;
  const emi = r === 0 ? principal / Math.max(n, 1) : (principal * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;
  return { emi, totalPayment, totalInterest };
}

export function sipStepUpFutureValue(
  initialMonthly: number,
  stepUpPercent: number,
  annualRatePercent: number,
  years: number
): SipResult {
  const monthlyRate = annualRatePercent / 100 / 12;
  let balance = 0;
  let invested = 0;
  for (let year = 0; year < Math.max(Math.round(years), 0); year++) {
    const monthlyAmount = initialMonthly * (1 + stepUpPercent / 100) ** year;
    for (let month = 0; month < 12; month++) {
      balance = balance * (1 + monthlyRate) + monthlyAmount;
      invested += monthlyAmount;
    }
  }
  return { invested, returns: balance - invested, total: balance };
}

export interface LumpsumSipResult extends SipResult {
  lumpsumFV: number;
  sipFV: number;
}

export function lumpsumPlusSip(
  lumpsum: number,
  monthlySIP: number,
  annualRatePercent: number,
  years: number
): LumpsumSipResult {
  const months = Math.round(years * 12);
  const r = annualRatePercent / 100 / 12;
  const lumpsumFV = lumpsum * (1 + r) ** months;
  const sip = sipFutureValueMonths(monthlySIP, annualRatePercent, months);
  const invested = lumpsum + sip.invested;
  const total = lumpsumFV + sip.total;
  return { invested, returns: total - invested, total, lumpsumFV, sipFV: sip.total };
}

export function formatINR(value: number): string {
  if (!isFinite(value) || isNaN(value)) return "₹0";
  const rounded = Math.round(value);
  return "₹" + rounded.toLocaleString("en-IN");
}
