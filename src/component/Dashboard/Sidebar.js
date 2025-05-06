'use client';

export default function Sidebar() {
  return (
    <div className="w-[306px] min-h-screen bg-white drop-shadow-[0_10px_60px_rgba(226,236,249,0.5)]">
      {/* Logo */}
      <div className="bg-[#D84040] h-[79px] flex items-center justify-center">
        <h1 className="text-white text-[24px] font-bold tracking-[0.5px] leading-[140%]">[EDUFREE]</h1>
      </div>

      {/* Menu Items */}
      <div className="mt-[42px] ml-[40px] flex flex-col gap-8">
        <div className="flex items-center gap-3 text-[#282938] font-medium text-[14px]">
          <span>&gt;</span>
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
          <span>&gt;</span>
          <span>My Courses</span>
        </div>
        <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
          <span>&gt;</span>
          <span>My Events</span>
        </div>
        <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
          <span>&gt;</span>
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
          <span>&gt;</span>
          <span>Help</span>
        </div>

        {/* Log Out (no redirect) */}
        <div className="flex items-center gap-3 text-[14px] font-semibold text-red-600 hover:opacity-80 cursor-pointer pt-2">
          <span>&gt;</span>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
}
