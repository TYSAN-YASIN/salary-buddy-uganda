import { ScreenShell } from "@/components/ScreenShell";
import { StatusBar } from "@/components/StatusBar";
import {
  Bell, ChevronRight, CreditCard, Fingerprint, Gift, Globe, HelpCircle,
  LogOut, Settings, ShieldCheck, Star,
} from "lucide-react";

const groups = [
  {
    title: "Account",
    items: [
      { icon: CreditCard, label: "Cards & Accounts", sub: "2 active" },
      { icon: ShieldCheck, label: "Security", sub: "Biometric · 2FA on", tone: "success" },
      { icon: Bell, label: "Notifications", sub: "Push, SMS" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Globe, label: "Language", sub: "English (UG)" },
      { icon: Fingerprint, label: "Login & Biometrics" },
      { icon: Settings, label: "App Settings" },
    ],
  },
  {
    title: "More",
    items: [
      { icon: Gift, label: "Refer & Earn", sub: "Get UGX 10,000", tone: "accent" },
      { icon: HelpCircle, label: "Help Center" },
      { icon: LogOut, label: "Log out", tone: "destructive" },
    ],
  },
];

export const ProfileScreen = () => {
  return (
    <ScreenShell hero>
      <StatusBar tone="light" />
      <header className="px-5 pt-4 pb-6 text-primary-foreground">
        <h1 className="font-display text-2xl font-bold">Profile</h1>
      </header>

      <div className="px-5">
        {/* Profile card */}
        <div className="rounded-3xl bg-card border border-border shadow-elevated p-5 flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl gradient-hero text-primary-foreground font-display font-bold text-xl grid place-items-center shadow-glow">
              JK
            </div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success text-success-foreground grid place-items-center text-[10px] font-bold border-2 border-card">
              ✓
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display font-bold text-foreground text-lg">James Kato</div>
            <div className="text-xs text-muted-foreground truncate">james.kato@sbcpay.ug</div>
            <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-accent" /> GOLD MEMBER
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="mt-4 rounded-2xl gradient-card text-accent-foreground p-4 shadow-card flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-wider opacity-80">Reward points</div>
            <div className="font-display font-extrabold text-2xl">12,450 pts</div>
          </div>
          <button className="px-4 py-2 rounded-full bg-card text-foreground text-xs font-bold shadow-soft">
            Redeem
          </button>
        </div>

        {/* Groups */}
        {groups.map((g) => (
          <div key={g.title} className="mt-6">
            <h3 className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold px-1 mb-2">
              {g.title}
            </h3>
            <div className="rounded-2xl bg-card border border-border shadow-soft divide-y divide-border">
              {g.items.map((item) => {
                const tone =
                  item.tone === "success"
                    ? "bg-success/15 text-success"
                    : item.tone === "destructive"
                    ? "bg-destructive/10 text-destructive"
                    : item.tone === "accent"
                    ? "bg-accent/10 text-accent"
                    : "bg-primary/10 text-primary";
                return (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 p-4 text-left active:bg-secondary/60 transition"
                  >
                    <span className={`w-10 h-10 rounded-xl grid place-items-center ${tone}`}>
                      <item.icon className="w-5 h-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-sm ${item.tone === "destructive" ? "text-destructive" : "text-foreground"}`}>
                        {item.label}
                      </div>
                      {item.sub && <div className="text-xs text-muted-foreground truncate">{item.sub}</div>}
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-6 text-center text-[10px] text-muted-foreground pb-4">
          SBC Pay v3.2.1 · Made in Kampala 🇺🇬
        </div>
      </div>
    </ScreenShell>
  );
};

export default ProfileScreen;
