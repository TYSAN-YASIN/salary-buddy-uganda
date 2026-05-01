import { ScreenShell } from "@/components/ScreenShell";
import { StatusBar } from "@/components/StatusBar";
import { Image as ImageIcon, Zap } from "lucide-react";

export const ScanScreen = () => {
  return (
    <ScreenShell>
      <div className="absolute inset-0 bg-foreground" />
      <div className="relative">
        <StatusBar tone="light" />
        <header className="px-5 pt-4 pb-3 text-primary-foreground">
          <h1 className="font-display text-xl font-bold">Scan to Pay</h1>
          <p className="text-xs opacity-70">Place the QR code inside the frame</p>
        </header>

        {/* Viewfinder */}
        <div className="px-8 mt-6">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden">
            {/* fake camera background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-foreground to-primary/40" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow))_0%,transparent_50%)]" />

            {/* corners */}
            {[
              "top-3 left-3 border-t-4 border-l-4 rounded-tl-2xl",
              "top-3 right-3 border-t-4 border-r-4 rounded-tr-2xl",
              "bottom-3 left-3 border-b-4 border-l-4 rounded-bl-2xl",
              "bottom-3 right-3 border-b-4 border-r-4 rounded-br-2xl",
            ].map((c) => (
              <span key={c} className={`absolute w-12 h-12 border-accent ${c}`} />
            ))}

            {/* scanning line */}
            <div className="absolute inset-x-6 top-1/2 h-0.5 bg-accent shadow-glow" />
          </div>
        </div>

        {/* Recent scans */}
        <div className="mt-6 px-5">
          <div className="rounded-2xl glass p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground grid place-items-center">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Lightning checkout</div>
                <div className="text-xs opacity-80">Pay any merchant in &lt; 2 seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-8 mt-6 flex items-center justify-between text-primary-foreground">
          <button className="flex flex-col items-center gap-1.5">
            <span className="w-12 h-12 rounded-2xl glass grid place-items-center">
              <ImageIcon className="w-5 h-5" />
            </span>
            <span className="text-[11px]">Gallery</span>
          </button>

          <button className="relative">
            <span className="absolute inset-0 -m-2 rounded-full bg-primary/30 animate-pulse-ring" />
            <span className="relative w-20 h-20 rounded-full bg-card grid place-items-center shadow-elevated">
              <span className="w-16 h-16 rounded-full gradient-hero" />
            </span>
          </button>

          <button className="flex flex-col items-center gap-1.5">
            <span className="w-12 h-12 rounded-2xl glass grid place-items-center font-bold">QR</span>
            <span className="text-[11px]">My code</span>
          </button>
        </div>
      </div>
    </ScreenShell>
  );
};

export default ScanScreen;
