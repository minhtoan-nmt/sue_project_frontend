// File: src/component/dashboard/Overview.jsx

export default function Overview() {
    return (
      <div className="w-full bg-white rounded-[30px] p-6 drop-shadow-[0_10px_60px_rgba(226,236,249,0.5)]">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[22px] font-semibold text-black leading-[100%] tracking-[-1%]">Overview</h2>
            <p className="text-[#ACACAC] text-[14px] mt-1">Videos Completed (Days)</p>
          </div>
          <div className="w-[118px] h-[38px] rounded-[10px] bg-[#F9FBFF] flex items-center justify-center text-[#7E7E7E] text-[12px] border border-[#E2ECF9]">
            Category
            <svg className="w-[24px] h-[24px] ml-2" fill="none" stroke="#7E7E7E" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
  
        <div className="flex items-end justify-between px-2 mt-4">
          {[
            { day: "1 Jan", height: 111 },
            { day: "2 Jan", height: 140 },
            { day: "3 Jan", height: 170 },
            { day: "4 Jan", height: 130 },
            { day: "5 Jan", height: 90 },
            { day: "6 Jan", height: 130 },
            { day: "7 Jan", height: 135 },
            { day: "8 Jan", height: 207, active: true, count: 6 },
            { day: "9 Jan", height: 160 },
            { day: "10 Jan", height: 140 },
            { day: "11 Jan", height: 90 },
            { day: "12 Jan", height: 160 },
          ].map(({ day, height, active, count }, i) => (
            <div key={i} className="flex flex-col items-center">
              {active && (
                <div className="mb-1 px-2 py-0.5 text-white bg-black text-[12px] rounded-md relative">
                  {count} Video
                  <div className="absolute left-1/2 -bottom-1 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-black transform -translate-x-1/2" />
                </div>
              )}
              <div
                className={`w-[31px] md:w-[40px] rounded-[8px] ${
                  active ? "bg-[#1C1E53] shadow-[0px_8px_12px_0px_rgba(135,145,233,0.3)]" : "bg-[#F2EFFF]"
                }`}
                style={{ height }}
              ></div>
              <div className="text-[10px] text-[#4F4F4F] mt-1">{day}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }