'use client';

import { useParams } from 'next/navigation';

const fakeCourses = [
  {
    id: '1',
    name: 'E34-P2123',
    description: 'This course is supposed to be preparing for PET exams',
    slides: [
      { name: 'Introduction', url: '#' },
      { name: 'Lesson 1', url: '#' },
      { name: 'Exercises', url: '#' },
      { name: 'Exam', url: '#' },
      { name: 'Teacher Info', url: '#' },
    ]
  }
];

export default function CourseSlides() {
  const { id } = useParams();
  const course = fakeCourses.find(c => c.id === id);

  if (!course) return <div className="p-10 text-red-600">Không tìm thấy khóa học!</div>;

  return (
    <div className="px-16 py-10 bg-gray-50 min-h-screen">
      {/* Tiêu đề */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-red-600 mb-1">{course.name}</h1>
        <p className="text-base text-gray-700 italic mb-1">{course.description}</p>
        <p className="text-sm text-gray-400">Course ID: {course.id}</p>
      </div>

      {/* Slide */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Documents</h2>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {course.slides.map((doc, i) => (
          <div
            key={i}
            className="flex items-center justify-between px-5 py-4 border-b last:border-b-0 hover:bg-gray-100 transition"
          >
            {/* PDF + Tên tài liệu */}
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline text-sm font-medium"
            >
              <span className="text-xl">📄</span>
              {doc.name}
            </a>

            {/* Biểu tượng download (Unicode) */}
            <a
              href={doc.url}
              download
              className="text-gray-500 hover:text-gray-700 text-lg"
              title="Download"
            >
              ⬇️
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
