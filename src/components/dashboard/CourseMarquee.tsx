"use client";

import { motion } from "framer-motion";
import { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";

interface CourseMarqueeProps {
  courses: Course[];
}

export function CourseMarquee({ courses }: CourseMarqueeProps) {  const duplicatedCourses = [...courses, ...courses, ...courses];

  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35, // Duration determines speed
        }}
      >
        {duplicatedCourses.map((course, index) => (
          <CourseCard key={`${course.id}-${index}`} course={course} />
        ))}
      </motion.div>
    </div>
  );
}
