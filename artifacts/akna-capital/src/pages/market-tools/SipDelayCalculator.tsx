import { useMemo, useState } from "react";
import { Clock } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { sipDelayImpact } from "@/lib/calculators";

export default function SipDelayCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);
  const [delayMonths, setDelayMonths] = useState(12);

  const result = useMemo(
    () => sipDelayImpact(monthlyInvestment, rate, years, delayMonths),
    [monthlyInvestment, rate, years, delayMonths]
  );

  return (
    <CalculatorLayout
      slug="sip-delay-calculator"
      title="SIP Delay Calculator"
      metaTitle="SIP Delay Calculator | Cost of Delaying Your SIP | AKNA Capital"
      metaDescription="See how much starting your SIP a few months or years later could cost you, in terms of the final corpus you build."
      keywords="SIP delay calculator, cost of delaying SIP, start SIP early India"
      icon={Clock}
      description="See what delaying your SIP by a few months or years actually costs you in the final corpus, holding everything else the same."
    >
      <div className="space-y-6">
        <NumberField label="Monthly Investment" value={monthlyInvestment} onChange={setMonthlyInvestment} min={500} max={200000} step={500} prefix="₹" />
        <NumberField label="Expected Return Rate (p.a.)" value={rate} onChange={setRate} min={1} max={30} step={0.5} suffix="%" />
        <NumberField label="Total Investment Period" value={years} onChange={setYears} min={1} max={40} step={1} suffix="yrs" />
        <NumberField label="Delay in Starting" value={delayMonths} onChange={setDelayMonths} min={0} max={60} step={1} suffix="months" />
      </div>

      <CalculatorResult
        stats={[
          { label: "Corpus if Started Today", value: result.fvNoDelay },
          { label: `Corpus if Delayed by ${delayMonths} months`, value: result.fvDelayed },
          { label: "Cost of Delaying", value: result.lossFromDelay, emphasis: true },
        ]}
      />
    </CalculatorLayout>
  );
}
