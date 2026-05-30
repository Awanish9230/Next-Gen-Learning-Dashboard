"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-white/10 rounded-full h-2.5 mt-4 overflow-hidden relative">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
      />
      
      {/* Subtle glow effect on the progress bar */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 bg-white/20 blur-[4px]"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: `${progress}%`, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
      />
    </div>
  );
}
