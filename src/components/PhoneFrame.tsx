import { ReactNode } from "react";

/**
 * Renders children inside an iPhone-style frame on desktop,
 * and full-screen on real mobile devices (<=480px).
 */
export const PhoneFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full gradient-soft">
      {/* Mobile: full screen */}
      <div className="sm:hidden min-h-screen bg-background">{children}</div>

      {/* Desktop: phone mockup */}
      <div className="hidden sm:flex min-h-screen items-center justify-center p-8 relative overflow-hidden">
        {/* Decorative blurred glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          {/* Marketing copy on the side */}
          <div className="hidden lg:block max-w-md text-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              UGANDA · SBC PAY
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight mb-4">
              The wallet that <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">pays you</span> on time.
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Send money across East Africa, get your salary instantly, and pay every bill — all from one beautifully simple app.
            </p>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-8 h-8 rounded-full bg-success/15 text-success grid place-items-center">✓</span>
                Zero transfer fees
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-8 h-8 rounded-full bg-success/15 text-success grid place-items-center">✓</span>
                Salary on day 1
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="w-[390px] h-[820px] bg-foreground rounded-[3rem] p-[14px] shadow-elevated">
              <div className="w-full h-full bg-background rounded-[2.4rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-foreground rounded-full z-50" />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
