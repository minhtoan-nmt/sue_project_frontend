// src/app/allblog/components/CategoryTab.jsx

"use client";

const categories = [
  "Semua",
  "Tips & Tricks",
  "Event",
  "Berita",
  "Soft Skill",
  "Hard Skill",
  "Tutorial",
];

export default function CategoryTab() {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-wrap justify-center space-x-6 text-[#282938]/70 font-medium text-[18px] leading-[32px]">
        {categories.map((cat) => (
          <button
            key={cat}
            className="hover:text-[#282938] focus:outline-none"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
