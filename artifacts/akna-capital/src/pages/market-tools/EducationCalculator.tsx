import { useMemo, useState } from "react";
import { GraduationCap } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { goalCalculator } from "@/lib/calculators";

export default function EducationCalculator() {
  const [currentCost, setCurrentCost] = useState(1500000);
  const [yearsToGoal, setYearsToGoal] = useState(12);
  const [inflation, setInflation] = useState(8);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(
    () => goalCalculator(currentCost, yearsToGoal, inflation, returnRate),
    [currentCost, yearsToGoal, inflation, returnRate]
  );

  return (
    <CalculatorLayout
      slug="education-calculator"
      title="Education Calculator"
      metaTitle="Child Education Planning Calculator | AKNA Capital"
      metaDescription="Estimate the future cost of your child's education after inflation, and the monthly SIP needed to reach that goal."
      keywords="child education planning calculator, education inflation calculator India, education goal SIP"
      icon={GraduationCap}
      description="Estimate the future cost of your child's education after inflation, and the monthly SIP you'd need to start today to reach it."
    >
      <div className="space-y-6">
        <NumberField label="Current Cost of Education" value={currentCost} onChange={setCurrentCost} min={100000} max={20000000} step={50000} prefix="₹" />
        <NumberField label="Years Until Goal" value={yearsToGoal} onChange={setYearsToGoal} min={1} max={25} step={1} suffix="yrs" />
        <NumberField label="Education Inflation" value={inflation} onChange={setInflation} min={2} max={15} step={0.5} suffix="%" />
        <NumberField label="Expected Return Rate (p.a.)" value={returnRate} onChange={setReturnRate} min={1} max={30} step={0.5} suffix="%" />
      </div>

      <CalculatorResult
        stats={[
          { label: "Future Cost of Education", value: result.futureCost },
          { label: "Required Monthly SIP", value: result.requiredMonthlySIP, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
