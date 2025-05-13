import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import center_img from "@/../public/about_img/center_img.jpg"
import students_learning from "@/../public/about_img/students_learning.jpg"

export default function About() {
    return (
        //reference to course
        <div>
        <div className="h-[90px] bg-(--background-gray) text px-24 p-3 flex items-center">
            <span className="flex flex-row justify-start text-(--black-letter)"><Link href="/">Home</Link> <MdNavigateNext size={25} /> <Link href="/about">About Center</Link></span>
        </div>
        <div className="w-5/6 py-30 text-lg m-auto">
            <p>Tan Phu Trung, Ho Chi Minh City, Vietnam</p>
            <h1 className="text-5xl mb-2 font-bold">Speed Up International English Center</h1>
            <p className="mb-12 text-base">Provide students with high-quality courses</p>
            <video width={1980} height={1024} controls preload="none">
            <source src="https://www.facebook.com/share/v/1AJkoorL2N/?mibextid=wwXIfr" type="video/mp4" />
            <track
                src="https://www.facebook.com/share/v/1AJkoorL2N/?mibextid=wwXIfr"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            </video>
        </div>
        <div className="w-2/3 p-10 m-auto">
            <h1 className="text-3xl font-bold my-5">About our center</h1>
            <Image src={center_img} alt="Our center image" className="w-full h-[500px] my-12"/>
            <p className="my-2">Speed Up English Center is a passionate team of educators, language specialists, and student supporters, all committed to one goal: helping you achieve English fluency faster and more confidently.</p>
            <p className="my-2">Founded with a vision to break barriers in communication, we combine modern teaching methods, real-world practice, and personalized support to create a dynamic and inspiring learning environment.
            Every lesson, every interaction, and every achievement at Speed Up is built around you — the learner — and your success.</p>
            <p className="my-2">We believe that learning English is more than mastering grammar or vocabulary; it’s about building bridges to new opportunities, experiences, and dreams.</p>
            <h1 className="text-3xl font-bold my-5">Courses</h1>
            <p className="my-2">English language skills are essential in today’s globalized world. At Speed Up English Center, we are dedicated to helping you master English quickly, confidently, and effectively.</p>
            <p className="my-2">Why is English so important? Because it’s the international language of communication, business, travel, and education — opening up countless opportunities worldwide.</p>
            <p className="my-2">In this course, you will learn practical English skills that meet international standards. We focus on core competencies including Speaking, Listening, Reading, and Writing, while also preparing you for exams like IELTS and TOEIC.</p>
            <p className="my-2">Benefits of studying at Speed Up English Center:</p>
            <ol className="px-5 my-2">
                <li>1. Improve your ability to communicate effectively across cultures</li>
                <li>2. Expand opportunities for studying and working abroad</li>
                <li>3. Build a strong foundation for career growth and personal development</li>
            </ol>
            <Image src={ students_learning } alt="The students are learning fun" className="my-12"/> 
        </div>
        </div>
    )
}