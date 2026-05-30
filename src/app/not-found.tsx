"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full text-center px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f0ff] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8a2be2] rounded-full blur-[100px] opacity-10 pointer-events-none" />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 select-none drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]"
        >
          404
        </motion.h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10 tracking-wide"
      >
        Signal Lost in the Matrix
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-400 max-w-md mb-10 relative z-10 text-lg"
      >
        The coordinates you entered don't exist in our learning database. Let's teleport you back to familiar territory.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="relative z-10"
      >
        <Link 
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black/40 border border-white/10 rounded-full text-white font-medium overflow-hidden transition-all hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/20 to-[#8a2be2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-[#00f0ff]" />
          <span>Return to Dashboard</span>
        </Link>
      </motion.div>
    </div>
  );
}
