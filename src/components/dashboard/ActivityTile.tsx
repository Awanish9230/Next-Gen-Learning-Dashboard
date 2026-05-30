"use client";

import { motion, Variants } from "framer-motion";

export function ActivityTile() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  // Generate a mock heatmap grid for the activity graph
  // 7 days x 10 weeks roughly
  const rows = 7;
  const cols = 14;
  const cells = Array.from({ length: rows * cols });

  return (
    <motion.div
      variants={itemVariants}
      className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 glass-panel p-6 flex flex-col justify-between group relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-lg font-bold text-white">Learning Activity</h3>
        <select 
          aria-label="Select timeframe"
          className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-sm text-gray-300 outline-none hover:bg-white/10 transition-colors cursor-pointer appearance-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
        >
          <option value="3m">Last 3 Months</option>
          <option value="6m">Last 6 Months</option>
          <option value="1y">Last Year</option>
        </select>
      </div>

      <div className="w-full overflow-x-auto pb-2 relative z-10 mt-auto">
        <div
          className="grid gap-[4px] min-w-max"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {cells.map((_, i) => {
            // Use a simple deterministic pseudo-random function based on index
            // to avoid React hydration mismatches between Server and Client rendering.
            const pseudoRandom = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
            const intensity = pseudoRandom;
            
            let bgColor = "bg-white/5"; // No activity
            let hoverColor = "hover:bg-white/10";
            
            if (intensity > 0.8) {
              bgColor = "bg-gradient-to-tr from-[#8a2be2] to-[#00f0ff]";
              hoverColor = "hover:brightness-125";
            } else if (intensity > 0.5) {
              bgColor = "bg-[#8a2be2]/60";
              hoverColor = "hover:bg-[#8a2be2]/80";
            } else if (intensity > 0.3) {
              bgColor = "bg-[#8a2be2]/30";
              hoverColor = "hover:bg-[#8a2be2]/50";
            }

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className={`w-3 h-3 lg:w-4 lg:h-4 rounded-[3px] ${bgColor} ${hoverColor} transition-all duration-200 cursor-crosshair border border-white/5`}
              />
            );
          })}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-end space-x-2 text-xs text-gray-400 relative z-10">
        <span>Less</span>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-[3px] bg-white/5" />
          <div className="w-3 h-3 rounded-[3px] bg-[#8a2be2]/30" />
          <div className="w-3 h-3 rounded-[3px] bg-[#8a2be2]/60" />
          <div className="w-3 h-3 rounded-[3px] bg-gradient-to-tr from-[#8a2be2] to-[#00f0ff]" />
        </div>
        <span>More</span>
      </div>
    </motion.div>
  );
}
