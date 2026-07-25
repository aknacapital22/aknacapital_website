import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

export function NumberField({ label, value, onChange, min, max, step = 1, prefix, suffix }: NumberFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <div className="flex items-center gap-1 bg-muted/50 border border-border/60 rounded-lg px-2.5 py-1">
          {prefix && <span className="text-xs text-muted-foreground">{prefix}</span>}
          <Input
            type="number"
            value={Number.isFinite(value) ? value : ""}
            onChange={(e) => onChange(Number(e.target.value))}
            className="h-6 w-24 border-0 bg-transparent p-0 text-right text-sm font-semibold focus-visible:ring-0"
          />
          {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
        </div>
      </div>
      <Slider
        value={[Math.min(Math.max(value, min), max)]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
      />
    </div>
  );
}
