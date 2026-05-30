"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[70vh] glass-panel rounded-3xl border border-white/5"
    >
      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10">
        <BarChart3 className="w-10 h-10 text-[#8a2be2]" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Analytics</h1>
      <p className="text-gray-400 text-lg max-w-md text-center">
        Your learning data is being crunched. Detailed analytics and insights will be available here shortly.
      </p>
    </motion.div>
  );
}
