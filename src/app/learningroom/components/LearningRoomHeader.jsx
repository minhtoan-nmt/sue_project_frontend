'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function LearningRoomHeader() {
  return (
    <div className="relative flex items-center justify-between px-6 pt-[25px]">
      {/* Hamburger menu */}
      <div className="absolute left-[30px] top-[25px] w-[40px] h-[30px]  flex flex-col items-center justify-center gap-[4px] rounded-sm">
        <span className="w-[18px] h-[2px] bg-[#282938] block rounded-sm" />
        <span className="w-[18px] h-[2px] bg-[#282938] block rounded-sm" />
        <span className="w-[18px] h-[2px] bg-[#282938] block rounded-sm" />
      </div>

      {/* Avatar and Info (right side) */}
      <div className="ml-auto flex items-center gap-4">
        <Image
          src="/images/default.png"
          alt="avatar"
          width={42}
          height={42}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col text-right leading-tight">
          <span className="text-[14px] font-normal text-black">Hi, Dimas</span>
          <span className="text-[12px] font-medium text-[#757575]">Frontend Developer</span>
        </div>

        <ChevronDown className="w-6 h-6 text-[#757575]" />
      </div>
    </div>
  );
}
