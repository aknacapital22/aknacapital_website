import { useMemo, useState } from "react";
import { Layers } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { lumpsumPlusSip } from "@/lib/calculators";

export default function LumpsumSipCalculator() {
  const [lumpsum, setLumpsum] = useState(500000);
  const [monthlySIP, setMonthlySIP] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => lumpsumPlusSip(lumpsum, monthlySIP, rate, years), [lumpsum, monthlySIP, rate, years]);

  return (
    <CalculatorLayout
      slug="lumpsum-sip-calculator"
      title="Lumpsum + SIP Calculator"
      metaTitle="Lumpsum + SIP Calculator | AKNA Capital"
      metaDescription="Estimate the combined future value of a one-time lumpsum investment plus an ongoing monthly SIP."
      keywords="lumpsum SIP calculator, lumpsum plus SIP India, combined investment calculator"
      icon={Layers}
      description="Combine a one-time lumpsum investment with an ongoing monthly SIP to estimate your total corpus at the end of your investment period."
    >
      <div className="space-y-6">
        <NumberField label="Lumpsum Investment" value={lumpsum} onChange={setLumpsum} min={0} max={20000000} step={10000} prefix="₹" />
        <NumberField label="Monthly SIP" value={monthlySIP} onChange={setMonthlySIP} min={0} max={200000} step={500} prefix="₹" />
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
