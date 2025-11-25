"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FluidGlassProps {
  children: React.ReactNode;
  className?: string;
}

export const FluidGlass: React.FC<FluidGlassProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20",
        className
      )}
    >
      <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 blur-2xl group-hover:animate-shine" />
      <motion.div
        className="absolute -inset-[100%] opacity-30 blur-3xl"
        style={{
            background: "conic-gradient(from 0deg at 50% 50%, rgba(76, 29, 149, 0.4) 0deg, transparent 60deg, rgba(76, 29, 149, 0.4) 120deg, transparent 180deg, rgba(76, 29, 149, 0.4) 240deg, transparent 300deg, rgba(76, 29, 149, 0.4) 360deg)"
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
