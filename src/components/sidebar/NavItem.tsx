"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  name: string;
  icon: LucideIcon;
  isActive: boolean;
}

export function NavItem({ href, name, icon: Icon, isActive, ...props }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center justify-center lg:justify-start px-3 py-3 rounded-xl group transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]",
        isActive ? "text-white" : "text-gray-400 hover:text-white"
      )}
      {...props}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active-indicator"
          className="absolute inset-0 bg-white/10 border border-white/10 rounded-xl shadow-[inset_0_0_12px_rgba(255,255,255,0.05)]"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      )}
      <Icon
        className={cn(
          "w-6 h-6 relative z-10 transition-transform duration-300",
          isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:scale-110"
        )}
      />
      <span className="ml-4 font-medium hidden lg:block relative z-10 tracking-wide">
        {name}
      </span>
    </Link>
  );
}
