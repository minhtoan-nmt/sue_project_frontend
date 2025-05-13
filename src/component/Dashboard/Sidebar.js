// File: src/component/dashboard/Sidebar.js

export default function Sidebar() {
    return (
      <div className="w-[306px] min-h-screen bg-white drop-shadow-[0_10px_60px_rgba(226,236,249,0.5)]">
        <div className="bg-[#D84040] h-[79px] flex items-center justify-center">
          <h1 className="text-white text-[24px] font-bold tracking-[0.5px] leading-[140%]">[EDUFREE]</h1>
        </div>
  
        <div className="mt-[42px] ml-[40px] flex flex-col gap-8">
          <div className="flex items-center gap-3 text-[#282938] font-medium text-[14px]">
            <img src="/icons/dashboard.png" alt="Dashboard" className="w-[22px] h-[22px]" />
            <span>Document</span>
          </div>
          <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
            <img src="/icons/course.png" alt="Courses" className="w-[22px] h-[22px]" />
            <span>Evaluation</span>
          </div>
          <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
            <img src="/icons/event.png" alt="Events" className="w-[22px] h-[22px]" />
            <span>Student information</span>
          </div>
          {/* <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
            <img src="/icons/settings.png" alt="Settings" className="w-[22px] h-[22px]" />
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-3 text-[#B8B9D2] font-medium text-[14px]">
            <img src="/icons/help.png" alt="Help" className="w-[22px] h-[22px]" />
            <span>Help</span>
          </div> */}
        </div>
      </div>
    );
  }
  