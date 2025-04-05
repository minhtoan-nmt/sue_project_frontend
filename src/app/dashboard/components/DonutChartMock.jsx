'use client';

export default function DonutChartMock() {
  const percentage = 65;

  const radius = 84.5; // 169 / 2
  const stroke = 20;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center w-[304px] h-[378px] rounded-[30px] bg-white shadow-[0_10px_60px_0_rgba(226,236,249,0.5)]">
      <h2 className="text-[22px] font-semibold leading-[100%] tracking-[-0.01em] text-black mt-6">Statistik</h2>
      <p className="text-[14px] font-normal leading-[150%] text-[#ACACAC]">Video ditonton</p>

      <div className="relative w-[229px] h-[229px] mt-6 flex items-center justify-center rounded-full bg-white">
        {/* Background donut layer */}
        <div className="absolute w-[169px] h-[169px] rounded-full border-[20px] border-[#F1EFFB]"></div>

        {/* Donut SVG */}
        <svg
          width="169"
          height="169"
          className="absolute rotate-[-90deg]"
        >
          <circle
            r={normalizedRadius}
            cx="84.5"
            cy="84.5"
            stroke="#FCD980"
            strokeWidth={stroke}
            fill="transparent"
          />
          <circle
            r={normalizedRadius}
            cx="84.5"
            cy="84.5"
            stroke="#1C1E53"
            strokeWidth={stroke}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute text-center">
          <p className="text-[23.76px] font-bold leading-[100%] text-black">65%</p>
          <p className="text-[11.88px] font-normal leading-[13.07px] text-black">
            Video<br />Ditonton
          </p>
        </div>
      </div>
    </div>
  );
}
