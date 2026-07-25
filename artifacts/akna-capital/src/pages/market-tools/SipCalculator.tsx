import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { sipFutureValue } from "@/lib/calculators";

export default function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => sipFutureValue(monthlyInvestment, rate, years), [monthlyInvestment, rate, years]);

  return (
    <CalculatorLayout
      slug="sip-calculator"
      title="SIP Calculator"
      metaTitle="SIP Calculator | Estimate Your Mutual Fund SIP Returns | AKNA Capital"
      metaDescription="Estimate how a monthly SIP could grow over time based on the amount, expected return rate, and investment tenure."
      keywords="SIP calculator, mutual fund SIP calculator India, monthly investment calculator"
      icon={Calculator}
      description="Estimate how a monthly SIP could grow over time based on the amount, tenure, and an assumed rate of return that you set."
    >
      <div className="space-y-6">
        <NumberField label="Monthly Investment" value={monthlyInvestment} onChange={setMonthlyInvestment} min={500} max={200000} step={500} prefix="₹" />
        <NumberField label="Expected Return Rate (p.a.)" value={rate} onChange={setRate} min={1} max={30} step={0.5} suffix="%" />
        <NumberField label="Time Period" value={years} onChange={setYears} min={1} max={40} step={1} suffix="yrs" />
      </div>

      <CalculatorResult
        invested={result.invested}
        returns={result.returns}
        stats={[
          { label: "Invested Amount", value: result.invested },
          { label: "Estimated Returns", value: result.returns },
          { label: "Total Value", value: result.total, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
