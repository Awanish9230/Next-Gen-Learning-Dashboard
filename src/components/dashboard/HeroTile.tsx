"use client";

import { motion, Variants } from "framer-motion";
import { Flame, Trophy, Zap } from "lucide-react";
import Image from "next/image";

export function HeroTile() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="w-full glass-panel glass-panel-hover p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group rounded-3xl min-h-[300px]"
    >
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-gradient-to-br from-[#00f0ff] to-[#8a2be2] rounded-full opacity-20 blur-3xl transition-transform duration-500 group-hover:scale-150" />
      
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between h-full">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 tracking-tight">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">Explorer</span> 👋
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mt-4">
            You're in the top 5% of learners this week. Keep up the phenomenal momentum in the matrix!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/20">
              <Flame className="w-5 h-5 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Streak</p>
              <p className="text-xl font-bold text-white">17 Days</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#8a2be2]/20 flex items-center justify-center border border-[#8a2be2]/20">
              <Zap className="w-5 h-5 text-[#8a2be2] drop-shadow-[0_0_8px_rgba(138,43,226,0.8)]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">XP Earned</p>
              <p className="text-xl font-bold text-white">14.2k</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 rounded-2xl p-4 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg col-span-2 sm:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/20 flex items-center justify-center border border-[#00f0ff]/20">
              <Trophy className="w-5 h-5 text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Rank</p>
              <p className="text-xl font-bold text-white">Diamond</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full md:w-1/3 flex items-center justify-center mt-12 md:mt-0">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_0_50px_rgba(0,240,255,0.4)] pointer-events-none"
        >
          <Image 
            src="/hero-graphic.png" 
            alt="Futuristic Learning Matrix Graphic" 
            fill 
            className="object-contain mix-blend-screen"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
