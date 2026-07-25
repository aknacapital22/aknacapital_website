import { useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { goalCalculator } from "@/lib/calculators";

export default function MarriageCalculator() {
  const [currentCost, setCurrentCost] = useState(2000000);
  const [yearsToGoal, setYearsToGoal] = useState(15);
  const [inflation, setInflation] = useState(7);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(
    () => goalCalculator(currentCost, yearsToGoal, inflation, returnRate),
    [currentCost, yearsToGoal, inflation, returnRate]
  );

  return (
    <CalculatorLayout
      slug="marriage-calculator"
      title="Marriage Calculator"
      metaTitle="Marriage Planning Calculator | AKNA Capital"
      metaDescription="Estimate the future cost of a wedding after inflation, and the monthly SIP needed to build that corpus in time."
      keywords="marriage planning calculator, wedding cost calculator India, marriage goal SIP"
      icon={Heart}
      description="Estimate the future cost of a wedding after inflation, and the monthly SIP you'd need to start today to be ready in time."
    >
      <div className="space-y-6">
        <NumberField label="Current Estimated Cost" value={currentCost} onChange={setCurrentCost} min={200000} max={20000000} step={50000} prefix="₹" />
        <NumberField label="Years Until Goal" value={yearsToGoal} onChange={setYearsToGoal} min={1} max={30} step={1} suffix="yrs" />
        <NumberField label="Inflation Rate" value={inflation} onChange={setInflation} min={2} max={15} step={0.5} suffix="%" />
        <NumberField label="Expected Return Rate (p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={30} step={0.5} suffix="%" />
      </div>

      <CalculatorResult
        stats={[
          { label: "Future Cost", value: result.futureCost },
          { label: "Required Monthly SIP", value: result.requiredMonthlySIP, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
