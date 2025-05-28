'use client';

import { useParams } from 'next/navigation';

const fakeCourses = [
  {
    id: '1',
    name: 'E34–P2123',
    description: 'This course is supposed to be preparing for PET exams',
    slides: [
      { name: 'Introduction', url: '#' },
      { name: 'Lesson 1', url: '#' },
      { name: 'Exercises', url: '#' },
      { name: 'Exam', url: '#' },
      { name: 'Teacher Information', url: '#' },
    ]
  }
];

export default function CourseSlides() {
  const { id } = useParams();
  const course = fakeCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="px-4 md:px-16 py-10 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <a href="/courses" className="text-blue-600 hover:underline text-sm">
            &larr; Back to COURSES
          </a>
        </div>
        <div className="text-red-600 text-lg font-semibold text-center">Course not found!</div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 py-10 bg-gray-50 min-h-screen">
      {/* Back to courses */}
      <div className="mb-6">
        <a href="/courses" className="text-blue-600 hover:underline text-sm">
          &larr; Back to COURSES
        </a>
      </div>

      {/* Course title section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold italic text-red-600">{course.name}</h1>
        <p className="text-sm text-gray-500">{course.description}</p>
        <p className="text-xs text-gray-400 mt-4">Course ID: {course.id}</p> {/* cách dòng bằng mt-4 */}
      </div>

      {/* Documents */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Documents</h2>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y">
        {course.slides.map((doc, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start md:items-center justify-between px-5 py-4 gap-3 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span className="text-xl leading-none">•</span>
              {doc.name}
            </div>
            {/* After click Dowload and Preview button, open in new tab */}
            <div className="flex gap-3 mt-2 md:mt-0">
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded hover:bg-blue-200 transition"
              >
                Preview
              </a>
              <a
                href={doc.url}
                download
                className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded hover:bg-green-200 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
