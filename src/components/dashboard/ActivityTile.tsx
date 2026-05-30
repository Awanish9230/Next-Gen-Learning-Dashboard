"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const TIME_OPTIONS = [
  { value: "3m", label: "Last 3 Months", multiplier: 12.9898 },
  { value: "6m", label: "Last 6 Months", multiplier: 34.2341 },
  { value: "1y", label: "Last Year", multiplier: 57.1234 },
];

export function ActivityTile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(TIME_OPTIONS[0]);
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const rows = 7;
  const cols = 14;
  const cells = Array.from({ length: rows * cols });

  return (
    <motion.div
      variants={itemVariants}
      className="w-full glass-panel p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden rounded-3xl min-h-[340px]"
    >
      <div className="flex items-center justify-between mb-6 relative z-30">
        <h3 className="text-xl font-bold text-white tracking-tight">Learning Activity</h3>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 outline-none hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#00f0ff] backdrop-blur-md font-medium shadow-lg"
          >
            {selectedOption.label}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden z-50 p-1.5"
              >
                {TIME_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${
                      selectedOption.value === option.value 
                        ? "bg-[#8a2be2]/20 text-white font-medium" 
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {option.label}
                    {selectedOption.value === option.value && (
                      <Check className="w-4 h-4 text-[#00f0ff]" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-4 relative z-10 mt-auto">
        <motion.div
          key={selectedOption.value}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="grid gap-2 min-w-max mx-auto justify-center"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {cells.map((_, i) => {
            const pseudoRandom = Math.abs((Math.sin(i * selectedOption.multiplier) * 43758.5453) % 1);
            const intensity = pseudoRandom;
            
            let bgColor = "bg-white/5"; 
            let hoverColor = "hover:bg-white/15 hover:shadow-none";
            
            if (intensity > 0.8) {
              bgColor = "bg-gradient-to-tr from-[#8a2be2] to-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.3)]";
              hoverColor = "hover:brightness-125 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]";
            } else if (intensity > 0.5) {
              bgColor = "bg-[#8a2be2]/70 shadow-[0_0_8px_rgba(138,43,226,0.2)]";
              hoverColor = "hover:bg-[#8a2be2]/90 hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]";
            } else if (intensity > 0.3) {
              bgColor = "bg-[#8a2be2]/30";
              hoverColor = "hover:bg-[#8a2be2]/50";
            }

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredCell(i)}
                onMouseLeave={() => setHoveredCell(null)}
                className={`w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-[4px] ${bgColor} ${hoverColor} transition-all duration-300 cursor-crosshair border border-white/5 relative hover:scale-[1.4] hover:z-10`}
              >
                <AnimatePresence>
                  {hoveredCell === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 5, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0a0a0a]/95 border border-white/10 text-white text-[11px] font-medium rounded-md whitespace-nowrap pointer-events-none backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-50"
                    >
                      {Math.floor(intensity * 12) + 1} contributions
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      <div className="mt-4 flex items-center justify-end space-x-3 text-xs text-gray-400 relative z-10 font-medium">
        <span>Less</span>
        <div className="flex space-x-2 mx-1">
          <div className="w-4 h-4 rounded-[4px] bg-white/5 border border-white/5" />
          <div className="w-4 h-4 rounded-[4px] bg-[#8a2be2]/30 border border-white/5" />
          <div className="w-4 h-4 rounded-[4px] bg-[#8a2be2]/70 border border-white/5" />
          <div className="w-4 h-4 rounded-[4px] bg-gradient-to-tr from-[#8a2be2] to-[#00f0ff] border border-white/5 shadow-[0_0_8px_rgba(0,240,255,0.3)]" />
        </div>
        <span>More</span>
      </div>
    </motion.div>
  );
}
