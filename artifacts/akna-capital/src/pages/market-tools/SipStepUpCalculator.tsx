import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { sipStepUpFutureValue } from "@/lib/calculators";

export default function SipStepUpCalculator() {
  const [initialMonthly, setInitialMonthly] = useState(10000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(
    () => sipStepUpFutureValue(initialMonthly, stepUp, rate, years),
    [initialMonthly, stepUp, rate, years]
  );

  return (
    <CalculatorLayout
      slug="sip-step-up-calculator"
      title="SIP Step Up Calculator"
      metaTitle="SIP Step Up Calculator | AKNA Capital"
      metaDescription="Estimate how a SIP grows when you increase your monthly investment by a fixed percentage every year, compared to a flat SIP."
      keywords="SIP step up calculator, step up SIP India, increasing SIP calculator"
      icon={TrendingUp}
      description="See how increasing your monthly SIP by a fixed percentage every year, in line with your income growth, changes your final corpus."
    >
      <div className="space-y-6">
        <NumberField label="Initial Monthly Investment" value={initialMonthly} onChange={setInitialMonthly} min={500} max={200000} step={500} prefix="₹" />
        <NumberField label="Annual Step Up" value={stepUp} onChange={setStepUp} min={0} max={50} step={1} suffix="%" />
        <NumberField label="Expected Return Rate (p.a.)" value={rate} onChange={setRate} min={1} max={30} step={0.5} suffix="%" />
        <NumberField label="Time Period" value={years} onChange={setYears} min={1} max={40} step={1} suffix="yrs" />
      </div>

      <CalculatorResult
        invested={result.invested}
        returns={result.returns}
        stats={[
          { label: "Total Invested", value: result.invested },
          { label: "Estimated Returns", value: result.returns },
          { label: "Total Value", value: result.total, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
