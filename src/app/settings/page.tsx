"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[70vh] glass-panel rounded-3xl border border-white/5"
    >
      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/10">
        <Settings className="w-10 h-10 text-gray-300" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Preferences</h1>
      <p className="text-gray-400 text-lg max-w-md text-center">
        System configurations and account settings module is booting up.
      </p>
    </motion.div>
  );
}
