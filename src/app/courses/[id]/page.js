'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CourseSlides() {
  const { id } = useParams(); // Take id from URL params
  const [course, setCourse] = useState(null); // Save course data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(`http://localhost:7777/api/v0/courses/${id}`);

        if (!res.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await res.json();

        // Modify the course data to match the expected structure, after BE team fix add route
        setCourse(data);
      } catch (err) {
        console.error('Fetch course error:', err.message);
        setError('Course not found!');
      } finally {
        setLoading(false);
      }
    }

    fetchCourse();
  }, [id]);

  //  Loading state (Can add a spinner or skeleton loader here)
  if (loading) {
    return (
      <div className="px-16 py-10 bg-gray-50 min-h-screen">
        <p className="text-gray-500 italic">Loading course data...</p>
      </div>
    );
  }

  // When course is not found or error occurs
  if (!course) {
    return (
      <div className="px-16 py-10 bg-gray-50 min-h-screen">
        {/* Nút quay về trang Courses */}
        <div className="mb-6">
          <a href="/courses" className="text-blue-600 hover:underline text-sm">
            &larr; Back to COURSES
          </a>
        </div>

        {/* Error */}
        <div className="text-red-600 text-lg font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="px-16 py-10 bg-gray-50 min-h-screen">
      {/* Back button */}
      <div className="mb-6">
        <a href="/courses" className="text-blue-600 hover:underline text-sm">
          &larr; Back to COURSES
        </a>
      </div>

      {/* Course name */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold italic text-red-600">{course.name}</h1>
        <p className="text-gray-600 italic text-base">{course.description}</p>
        <p className="text-gray-400 text-sm mt-1">Course ID: {course.id}</p>
      </div>

      {/* Course Material */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documents</h2>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm divide-y">
        {course.slides?.map((doc, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-start md:items-center justify-between px-5 py-4 gap-3 hover:bg-gray-50 transition"
          >
            {/* Documents name */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
              <span className="text-xl leading-none">•</span>
              {doc.name}
            </div>

            {/* Preview & Download */} // Preview will open in a new tab
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
