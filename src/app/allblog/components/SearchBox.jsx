"use client";

export default function SearchBox() {
  return (
    <div
      className="w-[746px] h-[64px] border border-[#28293899] rounded-lg flex items-center px-6 mt-12 mx-auto"
      style={{ borderWidth: "1.5px" }}
    >
      <input
        type="text"
        placeholder="Cari Blog, Event atau Berita . . ."
        className="w-full outline-none text-[#282938] placeholder-[#282938] placeholder-opacity-80 text-[20px] font-normal"
      />
    </div>
  );
}
