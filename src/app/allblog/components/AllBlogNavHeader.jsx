"use client";

import { ChevronDown } from "lucide-react";

export default function AllBlogNavHeader() {
  return (
    <>
      {/* Navbar màu đỏ */}
      <header className="w-full bg-[#DB4040] h-[90px] flex items-center px-[70px] justify-between text-white text-sm font-medium">
        {/* Logo */}
        <div className="text-[24px] font-bold tracking-widest leading-[140%]">[EDUFREE]</div>

        {/* Menu */}
        <nav className="flex space-x-8 text-[12px]">
          {["HOME", "TENTANG KAMI", "KURSUS", "FAQ", "BLOG"].map((item) => (
            <button key={item} className="hover:underline">
              {item}
            </button>
          ))}
        </nav>

        {/* Người dùng */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-white overflow-hidden">
            <img src="/images/default.png" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="text-xs leading-tight text-right">
            <div className="font-semibold">Hi, Dimas</div>
            <div className="text-[10px] text-gray-100">Frontend Developer</div>
          </div>
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </header>

      
    </>
  );
}
