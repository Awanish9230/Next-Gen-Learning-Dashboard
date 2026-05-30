"use client";

import { motion, Variants } from "framer-motion";
import { Flame } from "lucide-react";

export function HeroTile() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 glass-panel glass-panel-hover p-8 flex flex-col justify-between relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gradient-to-br from-[#00f0ff] to-[#8a2be2] rounded-full opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
          Welcome back, Alex 👋
        </h2>
        <p className="text-gray-400 text-lg">
          You are doing great this week. Keep up the momentum!
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <div className="inline-flex items-center space-x-3 bg-white/5 rounded-2xl px-5 py-3 border border-white/10 backdrop-blur-md shadow-lg">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Flame className="w-6 h-6 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Learning streak</p>
            <p className="text-xl font-bold text-white">17 Day Streak 🔥</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
