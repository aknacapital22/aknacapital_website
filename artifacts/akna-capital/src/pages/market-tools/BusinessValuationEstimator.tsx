import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Scale } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { businessValuationEstimate } from "@/lib/calculators";

export default function BusinessValuationEstimator() {
  const [annualRevenue, setAnnualRevenue] = useState(50000000);
  const [ebitdaMargin, setEbitdaMargin] = useState(15);
  const [evEbitdaMultiple, setEvEbitdaMultiple] = useState(8);
  const [netDebt, setNetDebt] = useState(10000000);

  const result = useMemo(
    () => businessValuationEstimate(annualRevenue, ebitdaMargin, evEbitdaMultiple, netDebt),
    [annualRevenue, ebitdaMargin, evEbitdaMultiple, netDebt]
  );

  return (
    <CalculatorLayout
      slug="business-valuation-estimator"
      title="Business Valuation Estimator"
      metaTitle="Business Valuation Estimator | Free EBITDA Multiple Calculator | AKNA Capital"
      metaDescription="Get a rough, illustrative estimate of what your business could be worth, using the EBITDA multiple method, before an M&A, IPO, or fundraising conversation."
      keywords="business valuation calculator India, EBITDA multiple calculator, company valuation estimator, how much is my business worth, valuation for M&A"
      icon={Scale}
      description="A quick, illustrative estimate of your business's value using the EBITDA multiple method, the same approach buyers, investors, and merchant bankers commonly start with. Useful before a Pre-IPO, IPO, or M&A conversation."
    >
      <div className="space-y-6">
        <NumberField label="Annual Revenue" value={annualRevenue} onChange={setAnnualRevenue} min={1000000} max={2000000000} step={1000000} prefix="₹" />
        <NumberField label="EBITDA Margin" value={ebitdaMargin} onChange={setEbitdaMargin} min={1} max={60} step={1} suffix="%" />
        <NumberField label="EV / EBITDA Multiple" value={evEbitdaMultiple} onChange={setEvEbitdaMultiple} min={2} max={25} step={0.5} suffix="x" />
        <NumberField label="Net Debt" value={netDebt} onChange={setNetDebt} min={0} max={1000000000} step={500000} prefix="₹" />
      </div>

      <CalculatorResult
        invested={Math.max(result.equityValue, 0)}
        returns={Math.max(netDebt, 0)}
        chartLabels={["Equity Value", "Net Debt"]}
        stats={[
          { label: "Estimated EBITDA", value: result.ebitda },
          { label: "Enterprise Value (EV)", value: result.enterpriseValue },
          { label: "Less: Net Debt", value: netDebt },
          { label: "Estimated Equity Value", value: result.equityValue, emphasis: true },
        ]}
      />

      <div className="p-5 rounded-2xl bg-muted/40 border border-border/50">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">A Note on This Method</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This uses the EBITDA multiple method: Enterprise Value = EBITDA × an industry multiple, then Equity Value = Enterprise Value − Net Debt.
          The right multiple varies significantly by sector, growth rate, and comparable transactions, so this is a starting reference point,
          not a formal valuation. Our{" "}
          <Link href="/services/sell-side-ma-advisory" className="text-primary font-semibold hover:underline">
            Sell-side
          </Link>{" "}
          and{" "}
          <Link href="/services/buy-side-ma-advisory" className="text-primary font-semibold hover:underline">
            Buy-side M&amp;A Advisory
          </Link>{" "}
          teams can run a proper valuation benchmarked against real comparable transactions.
        </p>
      </div>
    </CalculatorLayout>
  );
}
