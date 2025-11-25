import React from "react";
import { cn } from "@/lib/utils";

interface GlassIconProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassIcon: React.FC<GlassIconProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        className
      )}
    >
      <div className="relative z-10 text-white">{children}</div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
    </div>
  );
};
