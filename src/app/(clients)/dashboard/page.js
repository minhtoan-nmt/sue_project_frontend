'use client';

import Sidebar from '@/component/Dashboard/Sidebar';
import Overview from '@/component/Dashboard/Overview';
import Customers from '@/component/Dashboard/Customers';
import UserInfo from '@/component/Dashboard/UserInfo';
import CourseList from '@/component/Dashboard/CourseList';

const courses = [
  {
    id: 1,
    title: 'Introduction to Web Programming',
    description: 'Learning material about how to build websites...',
    progress: 20,
    image: '/icons/default.png',
    status: 'Complete'
  },
  {
    id: 2,
    title: 'Digital Marketing 101',
    description: 'Learning material about basic marketing strategy and concepts',
    progress: 100,
    image: '/icons/default.png',
    status: 'Pending'
  },
  {
    id: 3,
    title: 'Basic Data Science',
    description: 'Learning material about the fundamentals of data science',
    progress: 50,
    image: '/icons/default.png',
    status: 'Pending'
  },
  {
    id: 4,
    title: 'Beginner UI/UX',
    description: 'Basic theories and practices in UI/UX design',
    progress: 90,
    image: '/icons/default.png',
    status: 'Pending'
  },
];

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
        <CourseList items={courses}/>
      </main>
    </div>
  );
}
