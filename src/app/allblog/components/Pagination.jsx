// src/app/allblog/components/Pagination.jsx

export default function Pagination() {
    return (
      <div className="flex justify-center items-center gap-3 mt-10">
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#FCD980] shadow-[0px_8px_15px_0px_rgba(72,72,138,0.15)] text-[#FFFFFF] text-[20px] font-semibold">
          1
        </button>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F5F5F5] text-[#656565] text-[20px] font-medium">
          2
        </button>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F5F5F5] text-[#656565] text-[20px] font-medium">
          3
        </button>
        <span className="text-[#656565] text-[24px] font-normal leading-[140%] tracking-[0.5%]">
          ...
        </span>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F5F5F5] text-[#656565] text-[20px] font-medium">
          8
        </button>
      </div>
    );
  }
  