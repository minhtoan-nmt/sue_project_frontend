// File: src/component/Dashboard/UserInfo.jsx

'use client';

export default function UserInfo() {
  return (
    <div className="flex items-center justify-end gap-4 w-full px-6 pt-6">
      {/* Avatar */}
      <img
        src="/icons/default.png"
        alt="User Avatar"
        className="w-[42px] h-[42px] rounded-full object-cover"
      />

      {/* User Info */}
      <div className="flex flex-col">
        <p className="text-[14px] text-black font-normal leading-[150%]">Hi, user_name </p>
        <p className="text-[12px] text-[#757575] font-medium leading-[150%]">Frontend Developer</p>
      </div>

      <svg
        className="w-[24px] h-[24px] text-[#757575]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#757575"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
