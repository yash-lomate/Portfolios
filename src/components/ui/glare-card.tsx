"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlareCard: React.FC<GlareCardProps> = ({ children, className }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !overlayRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlayRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.1), transparent 40%)`;
  };

  const handleMouseEnter = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700",
        className
      )}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          willChange: "background, opacity"
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
