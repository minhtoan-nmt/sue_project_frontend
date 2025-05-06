'use client';

import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Introduction to Web Programming',
    description: 'Learning material about how to build websites...',
    progress: 20,
    image: '/icons/default.png',
    status: 'Continue'
  },
  {
    id: 2,
    title: 'Digital Marketing 101',
    description: 'Learning material about basic marketing strategy and concepts',
    progress: 100,
    image: '/icons/default.png',
    status: 'Certificate'
  },
  {
    id: 3,
    title: 'Basic Data Science',
    description: 'Learning material about the fundamentals of data science',
    progress: 50,
    image: '/icons/default.png',
    status: 'Continue'
  },
  {
    id: 4,
    title: 'Beginner UI/UX',
    description: 'Basic theories and practices in UI/UX design',
    progress: 90,
    image: '/icons/default.png',
    status: 'Continue'
  },
];

export default function CourseList() {
  return (
    <div className="bg-white p-6 rounded-[30px] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[24px] font-bold text-[#0C1421]">Learning Activities</h2>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center bg-[#F9FAFB] rounded-[10px] px-4 h-[38px] border border-[#E4E7EC]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#98A2B3] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[14px] text-[#98A2B3] focus:outline-none placeholder:text-[#98A2B3]"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center justify-between bg-white border border-[#E4E7EC] rounded-[10px] px-4 h-[38px] cursor-pointer">
            <span className="text-[14px] text-[#1C1E53]">Category</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2 text-[#1C1E53]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="flex items-center justify-between h-[35px] border-b border-[#EEEEEE] text-[#B5B7C0] text-[14px] font-medium mt-2">
        <span className="w-1/2">Course Name</span>
        <span className="w-1/4 text-center">Progress</span>
        <span className="w-1/4 text-right pr-2">Status</span>
      </div>

      {/* Course List */}
      <div className="space-y-6 mt-4">
        {courses.map((course) => (
          <div key={course.id} className="flex justify-between items-start">
            {/* Left: Image + Info */}
            <div className="flex items-start gap-4 w-1/2">
              <Image
                src={course.image}
                alt={course.title}
                width={60}
                height={60}
                className="rounded-[12px] object-cover"
              />
              <div>
                <h3 className="text-[18px] font-semibold text-[#0C1421] leading-[1.4]">
                  {course.title}
                </h3>
                <p className="text-[#6C737F] text-[14px] leading-[1.6] mt-[2px]">
                  {course.description}
                </p>
              </div>
            </div>

            {/* Center: Progress Bar */}
            <div className="w-1/4 pr-6">
              <div className="flex justify-between text-[14px] font-medium text-[#1C1E53] mb-1">
                <span></span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full h-[8px] bg-[#E4E7EC] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1C1E53] rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            {/* Right: Status */}
            <div className="w-1/4 flex justify-end items-center">
              {course.status === 'Certificate' ? (
                <span className="text-[14px] bg-[#FCD980] text-[#1C1E53] font-medium px-4 py-[4px] rounded-[8px]">
                  Certificate
                </span>
              ) : (
                <a
                  href="#"
                  className="text-[14px] font-medium text-[#1C1E53] underline hover:text-[#0a0e90]"
                >
                  Continue
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





