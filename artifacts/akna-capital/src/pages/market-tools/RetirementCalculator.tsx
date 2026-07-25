import { useMemo, useState } from "react";
import { PiggyBank } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { retirementCalculator } from "@/lib/calculators";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(85);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [preReturn, setPreReturn] = useState(12);
  const [postReturn, setPostReturn] = useState(8);

  const result = useMemo(
    () => retirementCalculator(currentAge, retirementAge, lifeExpectancy, monthlyExpense, inflation, preReturn, postReturn),
    [currentAge, retirementAge, lifeExpectancy, monthlyExpense, inflation, preReturn, postReturn]
  );

  return (
    <CalculatorLayout
      slug="retirement-calculator"
      title="Retirement Calculator"
      metaTitle="Retirement Planning Calculator | AKNA Capital"
      metaDescription="Estimate the retirement corpus you'll need based on your current expenses, and the monthly SIP required to build it."
      keywords="retirement calculator India, retirement corpus calculator, retirement planning SIP"
      icon={PiggyBank}
      description="Estimate the retirement corpus you'll need to maintain your lifestyle, and the monthly SIP required to build it before you retire."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NumberField label="Current Age" value={currentAge} onChange={setCurrentAge} min={18} max={65} step={1} suffix="yrs" />
          <NumberField label="Retirement Age" value={retirementAge} onChange={setRetirementAge} min={40} max={75} step={1} suffix="yrs" />
          <NumberField label="Life Expectancy" value={lifeExpectancy} onChange={setLifeExpectancy} min={65} max={100} step={1} suffix="yrs" />
        </div>
        <NumberField label="Current Monthly Expense" value={monthlyExpense} onChange={setMonthlyExpense} min={5000} max={1000000} step={5000} prefix="₹" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <NumberField label="Inflation" value={inflation} onChange={setInflation} min={2} max={12} step={0.5} suffix="%" />
          <NumberField label="Pre-Retirement Return" value={preReturn} onChange={setPreReturn} min={1} max={25} step={0.5} suffix="%" />
          <NumberField label="Post-Retirement Return" value={postReturn} onChange={setPostReturn} min={1} max={20} step={0.5} suffix="%" />
        </div>
      </div>

      <CalculatorResult
        stats={[
          { label: "Monthly Expense at Retirement", value: result.monthlyExpenseAtRetirement },
          { label: "Retirement Corpus Required", value: result.corpusRequired },
          { label: "Required Monthly SIP", value: result.requiredMonthlySIP, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
