"use client";

import { motion, Variants } from "framer-motion";
import { Course } from "@/types/course";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getIconByName } from "@/utils/iconMap";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const Icon = getIconByName(course.icon_name);

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      tabIndex={0}
      aria-label={`Course: ${course.title}, ${course.progress}% completed`}
      className="col-span-1 row-span-1 glass-panel p-6 flex flex-col justify-between group relative overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
    >
      {/* Background mesh gradient transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#00f0ff]/30 transition-colors duration-500" />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 group-hover:border-[#00f0ff]/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
        </div>
        <span className="text-sm font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          {course.progress}%
        </span>
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300 line-clamp-2">
          {course.title}
        </h3>
        
        <ProgressBar progress={course.progress} />
      </div>
    </motion.article>
  );
}
