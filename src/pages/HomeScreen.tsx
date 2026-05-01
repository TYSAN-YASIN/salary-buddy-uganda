import { ScreenShell } from "@/components/ScreenShell";
import { StatusBar } from "@/components/StatusBar";
import { WalletCard } from "@/components/WalletCard";
import {
  Plus, Send, Download, MoreHorizontal, TrendingUp, Zap, Droplet, Wifi,
  Tv, GraduationCap, ChevronRight, ArrowUpRight, ArrowDownLeft, Gift, Sparkles, Bell, User,
} from "lucide-react";

const quickActions = [
  { icon: Plus, label: "Add Money", primary: true },
  { icon: Send, label: "Send" },
  { icon: Download, label: "Request" },
  { icon: MoreHorizontal, label: "More" },
];

const bills = [
  { icon: Zap, label: "Electricity", color: "bg-amber-100 text-amber-600" },
  { icon: Droplet, label: "Water", color: "bg-sky-100 text-sky-600" },
  { icon: Wifi, label: "Internet", color: "bg-violet-100 text-violet-600" },
  { icon: Tv, label: "DSTV", color: "bg-rose-100 text-rose-600" },
  { icon: GraduationCap, label: "School", color: "bg-emerald-100 text-emerald-600" },
];

const supplementary = ["Child", "Nan", "Cook", "Driver", "Wife", "Others"];

const transactions = [
  { name: "Transfer to Sarah", time: "Today, 09:15 AM", amount: -50000, icon: ArrowUpRight, tone: "out" },
  { name: "Salary Credit · SBC Ltd", time: "Yesterday", amount: 1200000, icon: ArrowDownLeft, tone: "in" },
  { name: "MTN Airtime", time: "Yesterday", amount: -10000, icon: ArrowUpRight, tone: "out" },
];

const Section = ({ title, action, children }: { title: string; action?: string; children: React.ReactNode }) => (
  <section className="px-5 mt-7">
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-display font-bold text-base text-foreground">{title}</h2>
      {action && <button className="text-xs font-semibold text-primary">{action}</button>}
    </div>
    {children}
  </section>
);

export const HomeScreen = () => {
  return (
    <ScreenShell hero>
      <StatusBar tone="light" />

      {/* Greeting */}
      <header className="px-5 pt-4 pb-5 text-primary-foreground relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-80">Good morning,</p>
            <h1 className="font-display text-xl font-bold">James Kato 👋</h1>
          </div>
          <div className="relative">
            <div className="w-11 h-11 rounded-2xl glass grid place-items-center text-lg font-bold">
              JK
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent border-2 border-primary-deep" />
          </div>
        </div>
      </header>

      {/* Card */}
      <div className="px-5">
        <WalletCard />
      </div>

      {/* Quick actions */}
      <div className="px-5 mt-5 flex justify-between">
        {quickActions.map(({ icon: Icon, label, primary }) => (
          <button key={label} className="flex flex-col items-center gap-1.5 group">
            <span
              className={`w-12 h-12 rounded-2xl grid place-items-center transition-transform group-active:scale-95 ${
                primary ? "gradient-hero text-primary-foreground shadow-glow" : "bg-card border border-border shadow-soft text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-xs font-medium text-foreground">{label}</span>
          </button>
        ))}
      </div>

      {/* Spending */}
      <Section title="This month's spending">
        <div className="rounded-2xl bg-card border border-border p-4 shadow-soft flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">You've spent</p>
            <p className="font-display font-bold text-foreground">UGX 1,240,500</p>
          </div>
          <div className="flex items-end gap-1 h-10">
            {[40, 65, 30, 80, 50, 95, 70].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`w-1.5 rounded-full ${i === 5 ? "bg-primary" : "bg-primary/20"}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* International */}
      <Section title="Send Money Abroad">
        <div className="rounded-3xl gradient-hero p-5 text-primary-foreground shadow-elevated relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="flex items-center gap-2 text-sm">
            To <span className="font-bold">Kenya</span> <span className="text-lg">🇰🇪</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 relative">
            <div className="rounded-2xl glass p-3">
              <div className="text-[10px] uppercase opacity-80">You send</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xs opacity-80">UGX</span>
                <span className="font-display font-bold text-lg">500,000</span>
              </div>
            </div>
            <div className="rounded-2xl glass p-3">
              <div className="text-[10px] uppercase opacity-80">They get</div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xs opacity-80">KES</span>
                <span className="font-display font-bold text-lg">13,500</span>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs opacity-90 relative">
            <span>UGX 1 = KES 0.027</span>
            <button className="px-2 py-1 rounded-full bg-white/15">Set Alert</button>
          </div>
          <button className="mt-4 w-full py-3 rounded-2xl bg-accent text-accent-foreground font-semibold shadow-card relative">
            Start Transfer
          </button>
        </div>
      </Section>

      {/* Recent transfer */}
      <Section title="Repeat Recent Transfer" action="Show More">
        <div className="space-y-2">
          {[
            { i: "JM", name: "John Mwangi", sub: "M-Pesa · KES 13,500", color: "bg-primary/10 text-primary" },
            { i: "GA", name: "Grace Achieng", sub: "Equity Bank · KES 9,800", color: "bg-accent/10 text-accent" },
          ].map((p) => (
            <div key={p.i} className="flex items-center gap-3 rounded-2xl bg-card border border-border p-3 shadow-soft">
              <div className={`w-10 h-10 rounded-full grid place-items-center font-bold text-sm ${p.color}`}>{p.i}</div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-foreground truncate">{p.name}</div>
                <div className="text-xs text-muted-foreground truncate">{p.sub}</div>
              </div>
              <button className="text-xs font-semibold text-primary px-3 py-1.5 rounded-full bg-primary/10">Send</button>
            </div>
          ))}
        </div>
      </Section>

      {/* Bills */}
      <Section title="Pay Your Bills" action="See all">
        <div className="grid grid-cols-5 gap-2">
          {bills.map((b) => (
            <button key={b.label} className="flex flex-col items-center gap-1.5">
              <span className={`w-12 h-12 rounded-2xl grid place-items-center ${b.color}`}>
                <b.icon className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">{b.label}</span>
            </button>
          ))}
        </div>
      </Section>

      {/* Supplementary cards */}
      <Section title="Supplementary Cards">
        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
          {supplementary.map((s) => (
            <div key={s} className="shrink-0 w-20 h-24 rounded-2xl bg-secondary border border-border p-3 flex flex-col justify-between">
              <div className="w-7 h-5 rounded bg-accent/80" />
              <span className="text-xs font-semibold text-foreground">{s}</span>
            </div>
          ))}
          <button className="shrink-0 w-20 h-24 rounded-2xl border-2 border-dashed border-primary/40 grid place-items-center text-primary">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* Promos */}
      <Section title="Explore SBC Pay">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl gradient-hero p-4 text-primary-foreground h-32 flex flex-col justify-between shadow-elevated">
            <Sparkles className="w-5 h-5" />
            <div>
              <div className="font-display font-bold leading-tight">Transfer smarter</div>
              <div className="text-[11px] opacity-80 mt-1">Zero fees on global transfers</div>
            </div>
          </div>
          <div className="rounded-2xl gradient-card p-4 text-accent-foreground h-32 flex flex-col justify-between shadow-card">
            <Gift className="w-5 h-5" />
            <div>
              <div className="font-display font-bold leading-tight">Earn rewards</div>
              <div className="text-[11px] opacity-90 mt-1">Cashback on every payment</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Recent transactions */}
      <Section title="Recent Transactions" action="View all">
        <div className="rounded-2xl bg-card border border-border shadow-soft divide-y divide-border">
          {transactions.map((t, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5">
              <span
                className={`w-9 h-9 rounded-full grid place-items-center ${
                  t.tone === "in" ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"
                }`}
              >
                <t.icon className="w-4 h-4" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-foreground truncate">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.time}</div>
              </div>
              <div className={`text-sm font-bold ${t.tone === "in" ? "text-success" : "text-foreground"}`}>
                {t.amount > 0 ? "+" : "−"} UGX {Math.abs(t.amount).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to */}
      <Section title="How To">
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-1 px-1">
          {[
            { t: "Transfer International", s: "Learn how to send abroad" },
            { t: "Register to SBC Pay", s: "Activate your wallet" },
            { t: "Explore All", s: "View all services" },
          ].map((c) => (
            <div key={c.t} className="shrink-0 w-48 rounded-2xl bg-card border border-border p-4 shadow-soft">
              <div className="font-display font-bold text-sm text-foreground">{c.t}</div>
              <div className="text-xs text-muted-foreground mt-1 mb-3">{c.s}</div>
              <button className="text-xs font-semibold text-primary inline-flex items-center gap-1">
                Learn more <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </Section>
    </ScreenShell>
  );
};

export default HomeScreen;
