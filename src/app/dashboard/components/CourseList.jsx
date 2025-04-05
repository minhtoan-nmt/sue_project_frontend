'use client';

const courses = [
  {
    id: 1,
    title: 'Dasar Pemrograman Web',
    description: 'Materi pembelajaran mengenai pembuatan website ...',
    progress: 20,
    image: '/images/default.png',
    status: 'Lanjutkan'
  },
  {
    id: 2,
    title: 'Digital Marketing 101',
    description: 'Materi mengenai strategi dan konsep marketing pemula',
    progress: 100,
    image: '/images/default.png',
    status: 'Sertifikat'
  },
  {
    id: 3,
    title: 'Data Science Dasar',
    description: 'Materi pembelajaran mengenai dasar-dasar data science',
    progress: 50,
    image: '/images/default.png',
    status: 'Lanjutkan'
  },
  {
    id: 4,
    title: 'UI/UX Pemula',
    description: 'Dasar-dasar teori dan praktik tentang dunia UI/UX design',
    progress: 90,
    image: '/images/default.png',
    status: 'Lanjutkan'
  },
];

export default function CourseList() {
  return (
    <div className="bg-white p-6 rounded-[30px] shadow-sm">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
  <h2 className="text-[24px] font-bold text-[#0C1421]">Aktivitas Belajar</h2>

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

    {/* Kategori Dropdown */}
    <div className="flex items-center justify-between bg-white border border-[#E4E7EC] rounded-[10px] px-4 h-[38px] cursor-pointer">
      <span className="text-[14px] text-[#1C1E53]">Kategori</span>
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


      {/* Label hàng ngang */}
      <div className="flex items-center justify-between h-[35px] border-b border-[#EEEEEE] text-[#B5B7C0] text-[14px] font-medium mt-2">
        <span className="w-1/2">Nama Kursus</span>
        <span className="w-1/4 text-center">Progress</span>
        <span className="w-1/4 text-right pr-2">Status</span>
      </div>

      {/* Danh sách khóa học */}
      <div className="space-y-6 mt-4">
        {courses.map((course) => (
          <div key={course.id} className="flex justify-between items-start">
            {/* Left: Image + Info */}
            <div className="flex items-start gap-4 w-1/2">
              <img
                src={course.image}
                alt={course.title}
                className="w-[60px] h-[60px] rounded-[12px] object-cover"
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

            {/* Center: Progress */}
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
              {course.status === 'Sertifikat' ? (
                <span className="text-[14px] bg-[#FCD980] text-[#1C1E53] font-medium px-4 py-[4px] rounded-[8px]">
                  Sertifikat
                </span>
              ) : (
                <a
                  href="#"
                  className="text-[14px] font-medium text-[#1C1E53] underline hover:text-[#0a0e90]"
                >
                  Lanjutkan
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
