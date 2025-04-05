'use client';

import React from 'react';

export default function BarChartMock() {
  const data = [3, 5, 8, 6, 4, 3, 7, 10, 8, 7, 5, 6];
  const maxVal = Math.max(...data);

  return (
    <div className="bg-white w-[628px] h-[378px] rounded-[30px] shadow-md shadow-[#E2ECF9]/50 px-6 pt-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[22px] font-semibold leading-none">Overview</h2>
          <p className="text-[#ACACAC] text-[14px] -mt-1">Video selesai (Hari)</p>
        </div>

        <div className="flex items-center gap-1 bg-[#F9FBFF] px-4 py-2 rounded-[10px]">
          <span className="text-[#7E7E7E] text-[12px]">Kategori</span>
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 5L11 1" stroke="#7E7E7E" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="absolute bottom-10 left-0 w-full px-6 flex items-end justify-between">
        {data.map((val, i) => {
          const isMax = val === maxVal;
          const height = val * 16; // scale value
          return (
            <div key={i} className="flex flex-col items-center relative">
              {/* Tooltip */}
                {isMax && (
                <div className="absolute -top-8 px-3 py-1 bg-black text-white text-[12px] font-medium rounded-md leading-[1] whitespace-nowrap z-10">
                    6 Video
                </div>
                )}


              {/* Bar */}
              <div
                className={`w-[31px] rounded-[8px] ${isMax ? 'bg-[#1E1B4B]' : 'bg-[#F2EFFF]'}`}
                style={{ height: `${height}px` }}
              />

              {/* Label */}
              <span className="text-xs text-[#ACACAC] mt-2 w-[40px] text-center">{i + 1} Jan</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
