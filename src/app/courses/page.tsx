"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[70vh] glass-panel rounded-3xl border border-white/5"
    >
      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10">
        <BookOpen className="w-10 h-10 text-[#00f0ff]" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Course Catalog</h1>
      <p className="text-gray-400 text-lg max-w-md text-center">
        Our comprehensive learning catalog is currently being synced with the matrix. Check back soon!
      </p>
    </motion.div>
  );
}
