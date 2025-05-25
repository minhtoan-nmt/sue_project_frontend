import image1 from "../../public/dummy_photos/img1.jpg"
import image2 from "../../public/dummy_photos/img2.jpg";
import image3 from "../../public/dummy_photos/img3.jpg";
import Image from "next/image";
import Link from "next/link";

export function CourseItem() {
    const courses = [
        { id: 1, name: "E34-P2123", imageSrc: image1, description: "This course is supposed to be preparing for PET exams" },
        { id: 2, name: "Course 2", imageSrc: image2, description: "Description for Course 2" },
        { id: 3, name: "Course 3", imageSrc: image3, description: "Description for Course 3" },
    ];
    return (
        <div className="grid grid-cols-3 gap-12 p-24">
            {courses.map((course) => (
                <div key={course.id} className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Image src={course.imageSrc} alt={course.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h2 className="text-xl font-bold mb-2">{course.name}</h2>
                    <p className="text-gray-600">{course.description}</p>
                    <Link href={`/courses/${course.id}`} className="text-blue-500 mt-4 inline-block">View Details</Link>
                </div>
            ))}
        </div>
    )
} 

export default function CourseLists() {
    return (
        <div>
            <form className="flex justify-center items-center mt-10 mb-10">
                <input type="text" placeholder="Search for Courses" className="border-2 border-gray-300 rounded-lg p-5 h-12 w-1/2" />
            </form>
            <CourseItem />
        </div>
    );
}