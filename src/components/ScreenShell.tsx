import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";

interface Props {
  children: ReactNode;
  /** Whether to show the colored gradient header strip at top */
  hero?: boolean;
}

export const ScreenShell = ({ children, hero = false }: Props) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-background overflow-hidden">
      {hero && (
        <div className="absolute top-0 left-0 right-0 h-72 gradient-hero pointer-events-none" />
      )}
      <div className="relative flex-1 overflow-y-auto no-scrollbar pb-28 animate-float-up">
        {children}
      </div>
      <BottomNav />
    </div>
  );
};
