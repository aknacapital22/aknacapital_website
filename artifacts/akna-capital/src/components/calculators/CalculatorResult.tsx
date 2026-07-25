import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { formatINR } from "@/lib/calculators";

interface Stat {
  label: string;
  value: number;
  emphasis?: boolean;
}

interface CalculatorResultProps {
  stats: Stat[];
  invested?: number;
  returns?: number;
  chartLabels?: [string, string];
}

const COLORS = ["hsl(38 72% 50%)", "hsl(220 10% 30%)"];

export function CalculatorResult({ stats, invested, returns, chartLabels = ["Invested", "Returns"] }: CalculatorResultProps) {
  const showChart = typeof invested === "number" && typeof returns === "number" && invested + returns > 0;
  const chartData = showChart
    ? [
        { name: chartLabels[0], value: Math.max(invested!, 0) },
        { name: chartLabels[1], value: Math.max(returns!, 0) },
      ]
    : [];

  return (
    <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-8">
      <div className={`grid grid-cols-1 ${showChart ? "md:grid-cols-2" : ""} gap-8 items-center`}>
        <div className="space-y-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-4 rounded-xl ${
                stat.emphasis ? "bg-primary/10 border border-primary/20" : "bg-muted/40"
              }`}
            >
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span className={`text-lg font-bold ${stat.emphasis ? "text-primary" : "text-foreground"}`}>
                {formatINR(stat.value)}
              </span>
            </div>
          ))}
        </div>

        {showChart && (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => formatINR(value)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 -mt-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: COLORS[0] }} />
                <span className="text-xs text-muted-foreground">{chartLabels[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: COLORS[1] }} />
                <span className="text-xs text-muted-foreground">{chartLabels[1]}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
