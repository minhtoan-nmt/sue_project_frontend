'use client';

import Sidebar from '@/component/Dashboard/Sidebar';
import Overview from '@/component/Dashboard/Overview';
import Customers from '@/component/Dashboard/Customers';
import UserInfo from '@/component/Dashboard/UserInfo';
import CourseList from '@/component/Dashboard/CourseList';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F6FC]">
      <Sidebar />
      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Top bar */}
        <div className="flex justify-between items-start">
          <div className="text-2xl font-semibold">{/* Optional heading */}</div>
          <UserInfo />
        </div>

        {/* Overview & Customers side-by-side */}
        {/* <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex-1">
            <Overview />
          </div>
          <div className="w-full xl:w-[304px]">
            <Customers />
          </div>
        </div> */}

        {/* Course List */}
        <CourseList />
      </main>
    </div>
  );
}
