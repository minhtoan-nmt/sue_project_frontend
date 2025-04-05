'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-end gap-4 px-6 pt-[25px]">
      {/* Avatar */}
      <Image
        src="/images/default.png"
        alt="avatar"
        width={42}
        height={42}
        className="rounded-full object-cover"
      />

      {/* User Info */}
      <div className="flex flex-col text-right leading-tight">
        <span className="text-[14px] font-normal text-black">Hi, Dimas</span>
        <span className="text-[12px] font-medium text-[#757575]">Frontend Developer</span>
      </div>

      {/* Dropdown icon */}
      <ChevronDown className="w-6 h-6 text-[#757575]" />
    </div>
  );
}
