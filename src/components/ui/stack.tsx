"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StackItem {
  id: number | string;
  content: React.ReactNode;
}

interface StackProps {
  items: StackItem[];
  className?: string;
}

export const Stack: React.FC<StackProps> = ({ items, className }) => {
  const [stack, setStack] = useState(items);

  const moveToEnd = () => {
    setStack((prev) => {
      const newStack = [...prev];
      const item = newStack.shift();
      if (item) newStack.push(item);
      return newStack;
    });
  };

  return (
    <div className={cn("relative h-64 w-full max-w-md", className)}>
      {stack.map((item, index) => {
        // Only render the top 3 cards for performance and visual clarity
        if (index > 2) return null;

        return (
          <motion.div
            key={item.id}
            className="absolute inset-0 h-full w-full cursor-pointer rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl backdrop-blur-md flex flex-col justify-center items-center text-center"
            style={{
              zIndex: stack.length - index,
            }}
            animate={{
              scale: 1 - index * 0.05,
              y: index * 10,
              opacity: 1 - index * 0.2,
              rotate: index % 2 === 0 ? index * 2 : index * -2,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={() => index === 0 && moveToEnd()}
            whileHover={index === 0 ? { scale: 1.02 } : {}}
            drag={index === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 100) {
                moveToEnd();
              }
            }}
          >
            {item.content}
          </motion.div>
        );
      })}
    </div>
  );
};
