// File: src/component/dashboard/Customers.jsx

export default function Customers() {
  return (
    <div className="w-[304px] h-[378px] bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] p-6">
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-[#000000] leading-[100%] tracking-[-1%]">
        Statistics
      </h2>
      <p className="text-[14px] font-normal text-[#ACACAC] leading-[150%] mt-1">
        Videos Watched
      </p>

      {/* Donut Chart */}
      <div className="relative w-[229px] h-[229px] mt-[20px] mx-auto">
        {/* Background circle with shadow */}
        <div className="absolute w-[229px] h-[229px] rounded-full shadow-[0_10px_60px_rgba(226,236,249,0.5)] bg-white"></div>

        {/* Outer gray circle */}
        <div className="absolute w-[181px] h-[181px] rounded-full border-[20px] border-[#F1EFFB] top-[24px] left-[24px]"></div>

        {/* Yellow ring (partial) */}
        <div className="absolute w-[181px] h-[181px] rounded-full top-[17px] left-[24px] border-[20px] border-[#FCD980] border-l-transparent border-b-transparent"></div>

        {/* Blue ring (partial) */}
        <div className="absolute w-[181px] h-[181px] rounded-full top-[24px] left-[24px] border-[20px] border-[#1C1E53] border-l-transparent border-b-transparent rotate-[135deg]"></div>

        {/* Center Text */}
        <div className="absolute top-[87px] left-1/2 transform -translate-x-1/2 text-center">
          <p className="font-bold text-[23.76px] leading-[100%] text-[#000]">65%</p>
          <p className="font-normal text-[12px] leading-[100%] text-[#000] mt-[2px]">Videos Watched</p>
        </div>
      </div>
    </div>
  );
}
