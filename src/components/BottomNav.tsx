import { Home, Send, QrCode, Wallet, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/transfer", icon: Send, label: "Transfer" },
  { to: "/scan", icon: QrCode, label: "Scan", center: true },
  { to: "/salary", icon: Wallet, label: "Salary" },
  { to: "/profile", icon: User, label: "Profile" },
];

export const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="absolute bottom-0 left-0 right-0 z-40">
      <div className="mx-3 mb-3 rounded-3xl bg-card/95 backdrop-blur-xl shadow-elevated border border-border/40 px-2 py-2 flex items-end justify-between">
        {items.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          if (item.center) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="relative -mt-8 flex flex-col items-center"
              >
                <span className="absolute inset-0 -m-1 rounded-full bg-primary/30 animate-pulse-ring" />
                <span className="relative w-14 h-14 rounded-full gradient-hero grid place-items-center shadow-glow">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </span>
                <span className="text-[10px] font-medium text-muted-foreground mt-1">
                  {item.label}
                </span>
              </NavLink>
            );
          }
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 py-2 rounded-2xl transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5 transition-transform", active && "scale-110")} />
              <span className="text-[10px] font-semibold">{item.label}</span>
              {active && <span className="w-1 h-1 rounded-full bg-primary" />}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
