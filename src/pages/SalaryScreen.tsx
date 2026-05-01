import { ScreenShell } from "@/components/ScreenShell";
import { StatusBar } from "@/components/StatusBar";
import { Briefcase, CalendarDays, CheckCircle2, Clock, Download, TrendingUp } from "lucide-react";

const history = [
  { month: "April 2026", amount: 1200000, status: "Paid", date: "30 Apr", on: true },
  { month: "March 2026", amount: 1200000, status: "Paid", date: "31 Mar", on: true },
  { month: "February 2026", amount: 1180000, status: "Paid", date: "28 Feb", on: true },
  { month: "January 2026", amount: 1150000, status: "Paid", date: "31 Jan", on: false },
];

export const SalaryScreen = () => {
  return (
    <ScreenShell hero>
      <StatusBar tone="light" />
      <header className="px-5 pt-4 pb-6 text-primary-foreground flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">Salary</h1>
          <p className="text-sm opacity-80">Track every paycheck</p>
        </div>
        <button className="w-10 h-10 rounded-full glass grid place-items-center">
          <Download className="w-4 h-4" />
        </button>
      </header>

      <div className="px-5">
        {/* Next payday */}
        <div className="rounded-3xl bg-card border border-border shadow-elevated p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Next payday
            </span>
            <span className="text-xs font-semibold text-success bg-success/10 px-2 py-1 rounded-full">
              On track
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-sm font-semibold text-muted-foreground">UGX</span>
            <span className="font-display text-4xl font-extrabold text-foreground">1,250,000</span>
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="w-4 h-4" /> Friday, 29 May 2026 · in 28 days
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>Pay cycle progress</span>
              <span className="font-semibold text-foreground">3 of 31 days</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full gradient-hero rounded-full" style={{ width: "10%" }} />
            </div>
          </div>

          <button className="mt-5 w-full py-3 rounded-2xl bg-accent text-accent-foreground font-semibold shadow-card flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Get advance · up to UGX 400,000
          </button>
        </div>

        {/* Employer */}
        <div className="mt-5 rounded-2xl bg-card border border-border p-4 shadow-soft flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-hero text-primary-foreground grid place-items-center">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-foreground">SBC Telecom Ltd</div>
            <div className="text-xs text-muted-foreground">Senior Software Engineer · Kampala</div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-success" />
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "YTD Earned", value: "4.7M" },
            { label: "Avg / mo", value: "1.18M" },
            { label: "Bonus", value: "320K" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-border p-3 shadow-soft text-center">
              <div className="font-display font-bold text-base text-foreground">UGX {s.value}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold">Payment History</h2>
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-success" /> +4.3% YoY
            </span>
          </div>
          <div className="rounded-2xl bg-card border border-border shadow-soft divide-y divide-border">
            {history.map((h) => (
              <div key={h.month} className="flex items-center gap-3 p-4">
                <div className={`w-10 h-10 rounded-xl grid place-items-center ${h.on ? "bg-success/15 text-success" : "bg-amber-100 text-amber-600"}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-foreground">{h.month}</div>
                  <div className="text-xs text-muted-foreground">Credited {h.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm text-foreground">UGX {h.amount.toLocaleString()}</div>
                  <div className="text-[10px] text-success font-semibold">{h.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
};

export default SalaryScreen;
