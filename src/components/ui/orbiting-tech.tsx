"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

interface TechCategory {
  label: string;
  color: string;
  items: TechItem[];
}

interface OrbitingTechProps {
  categories: TechCategory[];
  className?: string;
}

export const OrbitingTech: React.FC<OrbitingTechProps> = ({ categories, className }) => {
  return (
    <div className={cn("flex flex-wrap justify-center gap-16 lg:gap-20", className)}>
      {categories.map((category, catIdx) => (
        <div key={catIdx} className="flex flex-col items-center gap-6">
          <h3
            className="text-lg font-bold tracking-wide uppercase"
            style={{ color: category.color }}
          >
            {category.label}
          </h3>
          <div className="relative" style={{ width: getOrbitSize(category.items.length), height: getOrbitSize(category.items.length) }}>
            {/* Center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl opacity-30"
              style={{ background: category.color }}
            />
            {/* Orbit ring */}
            <div
              className="absolute inset-4 rounded-full border border-dashed opacity-20"
              style={{ borderColor: category.color }}
            />
            {/* Rotating container */}
            <div
              className="absolute inset-0 animate-orbit"
              style={{
                animationDuration: `${20 + catIdx * 5}s`,
                animationDirection: catIdx % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {category.items.map((item, itemIdx) => {
                const angle = (360 / category.items.length) * itemIdx;
                const radius = getOrbitSize(category.items.length) / 2 - 28;
                const x = Math.round(Math.cos((angle * Math.PI) / 180) * radius);
                const y = Math.round(Math.sin((angle * Math.PI) / 180) * radius);
                return (
                  <div
                    key={itemIdx}
                    className="absolute top-1/2 left-1/2 flex flex-col items-center"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Counter-rotate to keep icons upright */}
                    <div
                      className="animate-orbit-reverse flex flex-col items-center gap-1.5"
                      style={{
                        animationDuration: `${20 + catIdx * 5}s`,
                        animationDirection: catIdx % 2 === 0 ? "normal" : "reverse",
                      }}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl border bg-white/5 backdrop-blur-md shadow-lg transition-transform hover:scale-125"
                        style={{ borderColor: `${category.color}40` }}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <span className="text-xs text-neutral-400 font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

function getOrbitSize(itemCount: number): number {
  if (itemCount <= 3) return 180;
  if (itemCount <= 5) return 220;
  return 260;
}
