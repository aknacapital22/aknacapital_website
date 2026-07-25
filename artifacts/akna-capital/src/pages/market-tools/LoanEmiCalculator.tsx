import { useMemo, useState } from "react";
import { Landmark } from "lucide-react";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { NumberField } from "@/components/calculators/NumberField";
import { CalculatorResult } from "@/components/calculators/CalculatorResult";
import { emiCalculator } from "@/lib/calculators";

export default function LoanEmiCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => emiCalculator(principal, rate, tenure), [principal, rate, tenure]);

  return (
    <CalculatorLayout
      slug="loan-emi-calculator"
      title="Loan / EMI Calculator"
      metaTitle="Loan EMI Calculator | AKNA Capital"
      metaDescription="Calculate your monthly EMI, total interest, and total payment for a home, car, or personal loan."
      keywords="EMI calculator, loan calculator India, home loan EMI calculator"
      icon={Landmark}
      description="Calculate your monthly EMI, total interest payable, and total payment for a loan based on the amount, interest rate, and tenure."
    >
      <div className="space-y-6">
        <NumberField label="Loan Amount" value={principal} onChange={setPrincipal} min={50000} max={50000000} step={50000} prefix="₹" />
        <NumberField label="Interest Rate (p.a.)" value={rate} onChange={setRate} min={1} max={20} step={0.1} suffix="%" />
        <NumberField label="Loan Tenure" value={tenure} onChange={setTenure} min={1} max={30} step={1} suffix="yrs" />
      </div>

      <CalculatorResult
        invested={principal}
        returns={result.totalInterest}
        chartLabels={["Principal", "Interest"]}
        stats={[
          { label: "Monthly EMI", value: result.emi, emphasis: true },
          { label: "Principal Amount", value: principal },
          { label: "Total Interest Payable", value: result.totalInterest },
          { label: "Total Payment", value: result.totalPayment },
        ]}
      />
    </CalculatorLayout>
  );
}
