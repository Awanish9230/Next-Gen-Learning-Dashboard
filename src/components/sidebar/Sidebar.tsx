"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, BarChart3, Settings } from "lucide-react";
import { NavItem } from "./NavItem";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-[80px] lg:w-[260px] h-screen border-r border-white/5 glass-panel rounded-none border-t-0 border-b-0 border-l-0 sticky top-0 transition-all duration-300 overflow-hidden">
      <div className="flex items-center justify-center lg:justify-start h-20 px-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f0ff] to-[#8a2be2] flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          <span className="font-bold text-white text-xl">P</span>
        </div>
        <span className="ml-4 font-bold text-xl hidden lg:block text-gradient tracking-wide">
          padhle
        </span>
      </div>

      <div className="flex-1 px-4 py-8 space-y-2">
        {navigation.map((item) => {
          // Dashboard route matches exactly '/', others match startsWith
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href) || false;

          return (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              icon={item.icon}
              isActive={isActive}
              aria-label={`Navigate to ${item.name}`}
            />
          );
        })}
      </div>
    </aside>
  );
}
