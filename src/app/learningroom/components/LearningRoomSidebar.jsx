"use client";

export default function LearningRoomSidebar() {
  return (
    <aside className="w-[306px] h-screen bg-white shadow-md">
      {/* EDUFREE Header */}
      <div className="bg-[#D84040] h-[79px] flex items-center justify-center">
        <span className="text-[24px] font-bold tracking-wide text-white">[EDUFREE]</span>
      </div>

      <div className="px-[28px] pt-[32px]">
        {/* Statistik */}
        <div className="mb-[40px]">
          <h3 className="text-[16px] font-medium text-[#2405F2] leading-none">Statistik</h3>
          <div className="mt-[8px] text-[10px] text-[#282938] opacity-70 leading-[14px]">
            4 dari 20 video telah selesai
          </div>
          <div className="relative mt-[8px] h-[8px] rounded-full bg-[#C4C4C4]/50 w-[229px]">
            <div className="absolute top-0 left-0 h-[8px] w-[45.8px] rounded-full bg-[#1C1E53] opacity-70" />
            <div className="absolute top-[-24px] right-0 text-[14px] text-[#282938] opacity-90">20%</div>
          </div>
        </div>

        {/* Menu sections */}
        <div className="space-y-[40px] text-[14px]">
          {/* Intro */}
          <div className="space-y-[12px]">
            <h4 className="text-[#2405F2] text-[16px] font-bold">Intro</h4>
            <ul className="space-y-[10px]">
              <li className="flex items-center gap-2 text-[#6E6E6E]">
                <PlayIcon color="#00B6BD" />
                Perkenalan instruktur
              </li>
            </ul>
          </div>

          {/* Installasi */}
          <div className="space-y-[12px]">
            <h4 className="text-[#2405F2] text-[16px] font-bold">Installasi</h4>
            <ul className="space-y-[10px]">
              <li className="flex items-center gap-2 text-[#6E6E6E]">
                <PlayIcon color="#00B6BD" />
                Download Tools
              </li>
              <li className="flex items-center gap-2 font-semibold text-black">
                <PlayIcon color="#00B6BD" />
                Installasi Tools
              </li>
              <li className="flex items-center gap-2 text-[#6E6E6E]">
                <PlayIcon color="#00B6BD" />
                Basic Penggunaan Tools
              </li>
            </ul>
          </div>

          {/* Dasar HTML */}
          <div className="space-y-[12px]">
            <h4 className="text-[#2405F2] text-[16px] font-bold">Dasar HTML</h4>
            <ul className="space-y-[10px]">
              {[
                "Tentang HTML",
                "Menjalankan Kode",
                "Tag",
                "Header dan Paragraf",
                "List",
                "Table",
              ].map((title, index) => (
                <li key={index} className="flex items-center gap-2 text-[#6E6E6E]">
                  <PlayIcon color="#818181" />
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

function PlayIcon({ color }) {
  return (
    <svg
      className="w-[22px] h-[22px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M10 9v6l5-3z" fill={color} />
    </svg>
  );
}
