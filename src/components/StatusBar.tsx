import { Signal, Wifi, BatteryFull } from "lucide-react";

export const StatusBar = ({ tone = "light" }: { tone?: "light" | "dark" }) => {
  const color = tone === "light" ? "text-white" : "text-foreground";
  return (
    <div className={`flex items-center justify-between px-7 pt-3 pb-1 text-[13px] font-semibold ${color}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <BatteryFull className="w-4 h-4" />
      </div>
    </div>
  );
};
