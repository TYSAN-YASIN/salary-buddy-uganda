import { ScreenShell } from "@/components/ScreenShell";
import { StatusBar } from "@/components/StatusBar";
import { ArrowDownUp, ChevronDown, Globe2, Phone, Building2, User2 } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "mobile", label: "Mobile", icon: Phone },
  { id: "bank", label: "Bank", icon: Building2 },
  { id: "wallet", label: "Wallet", icon: User2 },
  { id: "intl", label: "International", icon: Globe2 },
];

const beneficiaries = [
  { i: "SK", name: "Sarah Kato", sub: "MTN · 0772 ...", color: "bg-primary/10 text-primary" },
  { i: "DM", name: "Daniel Mukasa", sub: "Airtel · 0701 ...", color: "bg-accent/10 text-accent" },
  { i: "JN", name: "Joan Namusoke", sub: "Stanbic · 9900...", color: "bg-success/15 text-success" },
  { i: "+", name: "Add new", sub: "Beneficiary", color: "bg-secondary text-muted-foreground" },
];

export const TransferScreen = () => {
  const [tab, setTab] = useState("mobile");
  const [amount, setAmount] = useState("250,000");

  return (
    <ScreenShell hero>
      <StatusBar tone="light" />
      <header className="px-5 pt-4 pb-6 text-primary-foreground">
        <h1 className="font-display text-2xl font-bold">Send Money</h1>
        <p className="text-sm opacity-80">Choose how you want to transfer</p>
      </header>

      <div className="px-5">
        {/* Tabs */}
        <div className="rounded-2xl bg-card/95 backdrop-blur border border-border p-1.5 grid grid-cols-4 gap-1 shadow-soft">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`py-2.5 rounded-xl text-[11px] font-semibold flex flex-col items-center gap-1 transition-all ${
                  active ? "gradient-hero text-primary-foreground shadow-glow" : "text-muted-foreground"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Amount entry */}
        <div className="mt-5 rounded-3xl bg-card border border-border shadow-soft p-5">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">You send</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold text-foreground">{amount}</span>
              <span className="text-sm font-semibold text-muted-foreground">UGX</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-semibold">
              🇺🇬 UGX <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="my-4 flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <button className="w-9 h-9 rounded-full gradient-hero text-primary-foreground grid place-items-center shadow-glow">
              <ArrowDownUp className="w-4 h-4" />
            </button>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="text-xs uppercase tracking-wider text-muted-foreground">They receive</div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold text-foreground">6,750</span>
              <span className="text-sm font-semibold text-muted-foreground">KES</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-xs font-semibold">
              🇰🇪 KES <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["100,000", "250,000", "500,000"].map((v) => (
              <button
                key={v}
                onClick={() => setAmount(v)}
                className={`py-2 rounded-xl text-xs font-semibold border transition ${
                  amount === v
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-secondary border-transparent text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Fee</span>
            <span className="font-semibold text-success">FREE · saves UGX 2,500</span>
          </div>
        </div>

        {/* Beneficiaries */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold">Recent Beneficiaries</h2>
            <button className="text-xs font-semibold text-primary">See all</button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {beneficiaries.map((b) => (
              <button key={b.i} className="flex flex-col items-center gap-1.5">
                <span className={`w-14 h-14 rounded-2xl grid place-items-center font-bold text-sm ${b.color}`}>
                  {b.i}
                </span>
                <span className="text-[11px] font-semibold text-foreground text-center leading-tight truncate w-full">
                  {b.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button className="mt-7 w-full py-4 rounded-2xl gradient-hero text-primary-foreground font-bold shadow-glow">
          Continue
        </button>
      </div>
    </ScreenShell>
  );
};

export default TransferScreen;
