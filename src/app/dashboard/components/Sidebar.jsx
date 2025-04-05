"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  CalendarDays,
  Settings,
  HelpCircle,
  ChevronRight,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: <LayoutGrid className="w-5 h-5" />,
    href: "/dashboard",
  },
  {
    title: "Kursus Saya",
    icon: <BookOpen className="w-5 h-5" />,
    href: "/dashboard/courses",
  },
  {
    title: "Event Saya",
    icon: <CalendarDays className="w-5 h-5" />,
    href: "/dashboard/events",
  },
  {
    title: "Pengaturan",
    icon: <Settings className="w-5 h-5" />,
    href: "/dashboard/settings",
    hasChild: true,
  },
  {
    title: "Bantuan",
    icon: <HelpCircle className="w-5 h-5" />,
    href: "/dashboard/help",
    hasChild: true,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[306px] h-screen shadow-md bg-white">
      <div className="bg-[#D84040] text-white h-[79px] flex items-center justify-center">
        <span className="text-[24px] font-bold tracking-wide">[EDUFREE]</span>
      </div>

      <nav className="flex flex-col gap-4 mt-8 px-6">
        {menu.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <div
              className={`flex items-center justify-between group px-2 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
                pathname === item.href ? "font-semibold text-black" : "text-gray-400"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span
                  className={`text-[14px] font-medium transition-colors ${
                    pathname === item.href ? "text-black" : "text-muted-foreground group-hover:text-black"
                  }`}
                >
                  {item.title}
                </span>
              </div>
              {item.hasChild && <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black" />}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
