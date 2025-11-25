"use client";
import React, { useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface LanyardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Lanyard: React.FC<LanyardProps> = ({ children, className, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Simple pendulum physics simulation
  const rotate = useSpring(0, { stiffness: 200, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const offsetX = e.clientX - centerX;
    
    // Rotate based on mouse position relative to center
    rotate.set(offsetX * 0.1);
  };

  const handleMouseLeave = () => {
    rotate.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className={cn("relative flex flex-col items-center", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* The String */}
      <div className="h-16 w-0.5 bg-gradient-to-b from-neutral-700 to-neutral-500 origin-top" />
      
      {/* The Badge/Card */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ rotate, transformOrigin: "top center" }}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur-md shadow-lg transition-colors hover:bg-neutral-800/80">
          {children}
        </div>
      </motion.a>
    </div>
  );
};
