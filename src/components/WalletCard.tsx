import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export const WalletCard = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="relative rounded-[28px] gradient-card p-6 text-white shadow-card overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-white/20" />
      <div className="absolute -right-8 -bottom-20 w-44 h-44 rounded-full border border-white/10" />
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-destructive/90" />
          <div className="w-9 h-9 rounded-full bg-accent-soft -ml-5 mix-blend-screen" />
        </div>
        <div className="font-display font-bold text-lg tracking-tight">
          SBC<span className="font-medium opacity-80">Pay</span>
        </div>
      </div>

      <div className="relative mt-7">
        <div className="flex items-center gap-2 text-white/80 text-sm">
          Available Balance
          <button onClick={() => setHidden((v) => !v)} aria-label="Toggle balance visibility">
            {hidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-sm font-semibold opacity-90">UGX</span>
          <span className="font-display text-4xl font-extrabold tracking-tight">
            {hidden ? "•••••••" : "2,450,000"}
          </span>
        </div>
      </div>

      <div className="relative mt-7 flex items-end justify-between text-xs">
        <div>
          <div className="opacity-70 text-[10px] uppercase tracking-wider">Account</div>
          <div className="font-mono font-semibold tracking-wider">0355 6400 1217</div>
        </div>
        <div className="font-mono font-bold tracking-widest">**** 4521</div>
      </div>
    </div>
  );
};
