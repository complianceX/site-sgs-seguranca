import { useState, useEffect, useCallback } from "react";
import { Sparkles, Bell, FileText, CheckCircle2, AlertTriangle, Users } from "lucide-react";
import dashboardImg from "@/assets/sgs-dashboard.webp";

interface Toast {
  id: number;
  icon: typeof Bell;
  title: string;
  description: string;
  variant: "info" | "success" | "warning";
}

interface Metric {
  label: string;
  value: number;
  target: number;
  suffix: string;
}

const toasts: Toast[] = [
  { id: 1, icon: FileText, title: "Nova APR", description: "APR-2026-0421 registrada", variant: "info" },
  { id: 2, icon: CheckCircle2, title: "DDS concluído", description: "DDS-2026-0892 aprovado", variant: "success" },
  { id: 3, icon: AlertTriangle, title: "PT pendente", description: "PT-2026-0311 aguarda revisão", variant: "warning" },
  { id: 4, icon: Users, title: "Colaborador online", description: "João Silva iniciou turno", variant: "info" },
];

const metrics: Metric[] = [
  { label: "APR", target: 87, suffix: "%", value: 0 },
  { label: "DDS", target: 64, suffix: "%", value: 0 },
  { label: "PT", target: 92, suffix: "%", value: 0 },
  { label: "ASO", target: 78, suffix: "%", value: 0 },
];

function useToastCycle() {
  const [currentToast, setCurrentToast] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const show = () => {
      setCurrentToast(index % toasts.length);
      setVisible(true);
      const hideTimeout = setTimeout(() => setVisible(false), 3200);
      index++;
      return hideTimeout;
    };
    show();
    const interval = setInterval(() => {
      show();
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  return { currentToast: currentToast !== null ? toasts[currentToast] : null, visible };
}

function useCountingMetrics() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [targets] = useState(metrics.map((m) => m.target));

  useEffect(() => {
    const durations = [2000, 2400, 1800, 2600];
    const startTimes = targets.map(() => Date.now());
    const initial = targets.map(() => 0);

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          if (val >= targets[i]) return targets[i];
          const elapsed = Date.now() - startTimes[i];
          const progress = Math.min(elapsed / durations[i], 1);
          return Math.round(progress * targets[i]);
        })
      );
    }, 50);

    setTimeout(() => clearInterval(interval), Math.max(...durations) + 200);
    return () => clearInterval(interval);
  }, [targets]);

  return counts;
}

function LiveIndicator() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center gap-2 text-xs font-bold text-red-500">
      <span className={`relative h-2 w-2 rounded-full bg-red-500 transition-opacity ${pulse ? "opacity-100" : "opacity-40"}`}>
        <span className={`absolute inset-0 h-2 w-2 rounded-full bg-red-500 animate-ping ${pulse ? "opacity-75" : "opacity-0"}`} />
      </span>
      <span>REC</span>
      <span className="font-mono text-[10px] text-white/60">00:{String(Math.floor(Math.random() * 60)).padStart(2, "0")}</span>
    </div>
  );
}

function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-[0.06]">
      <div className="absolute left-0 right-0 h-[2px] bg-sgs-blue animate-sgs-scan" />
    </div>
  );
}

export function DashboardVideoMockup() {
  const { currentToast, visible } = useToastCycle();
  const counts = useCountingMetrics();
  const [recTime, setRecTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRecTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden border border-sgs-border bg-white">
      <ScanLine />

      {/* Recording overlay */}
      <div className="absolute left-3 top-3 z-20 flex items-center gap-3 rounded-lg bg-sgs-night/70 px-3 py-1.5 backdrop-blur-sm">
        <LiveIndicator />
        <span className="text-[10px] font-mono text-white/60">
          {String(Math.floor(recTime / 60)).padStart(2, "0")}:{String(recTime % 60).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-3 border-b border-sgs-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sgs-slate">
            Painel de controle SST
          </span>
          <p className="mt-1 text-xs font-medium text-sgs-slate-light">
            Documentos, pendências e evidências no mesmo painel
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-sgs-green-dark">
          <span className="h-2 w-2 rounded-full bg-sgs-green sgs-pulse-dot" />
          <span className="animate-sgs-soft-in">Online</span>
        </div>
      </div>

      <div className="relative grid md:grid-cols-[1fr_140px]">
        <div className="relative">
          <img
            src={dashboardImg}
            alt="Painel de controle do SGS com indicadores de APR, DDS, PT e pendências de SST"
            className="block h-auto w-full"
            loading="lazy"
          />

          {/* Toast notification */}
          {currentToast && (
            <div
              className={`absolute right-3 top-3 z-20 max-w-[220px] rounded-xl border bg-white/95 p-3 shadow-2xl backdrop-blur-md transition-all duration-500 ${
                visible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-2 opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex items-start gap-2">
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    currentToast.variant === "success"
                      ? "bg-sgs-green/10 text-sgs-green"
                      : currentToast.variant === "warning"
                        ? "bg-amber-50 text-amber-500"
                        : "bg-sgs-blue/10 text-sgs-blue"
                  }`}
                >
                  <currentToast.icon className="h-3 w-3" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-sgs-night truncate">{currentToast.title}</p>
                  <p className="text-[10px] text-sgs-slate leading-tight mt-0.5">{currentToast.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden border-l border-sgs-border bg-sgs-bg p-4 md:block">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="border-b border-sgs-border py-3 last:border-b-0">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-sgs-blue">{metric.label}</p>
                <span className="text-[11px] font-bold text-sgs-night font-mono tabular-nums">
                  {counts[index]}{metric.suffix}
                </span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-sgs-border/60">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sgs-blue to-sgs-green transition-all duration-500 ease-out"
                  style={{ width: `${counts[index]}%` }}
                />
              </div>
            </div>
          ))}

          {/* Mini activity blink */}
          <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-sgs-slate">
            <span className="h-1.5 w-1.5 rounded-full bg-sgs-green animate-pulse" />
            Atividade em tempo real
          </div>
        </div>
      </div>
    </div>
  );
}
