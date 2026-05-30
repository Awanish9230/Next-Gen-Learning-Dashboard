"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Mobile navigation" className="md:hidden fixed bottom-0 left-0 right-0 h-16 glass-panel rounded-none border-b-0 border-l-0 border-r-0 z-50 px-6 flex items-center justify-between">
      {navigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(item.href) || false;

        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-label={`Navigate to ${item.name}`}
            className={cn(
              "relative flex flex-col items-center justify-center w-12 h-12 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded-xl",
              isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-active-indicator"
                className="absolute inset-0 bg-white/10 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Icon
              className={cn(
                "w-5 h-5 relative z-10",
                isActive && "drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              )}
            />
            <span className="text-[10px] mt-1 relative z-10 font-medium">
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
