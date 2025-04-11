import { FaArrowRightLong } from "react-icons/fa6";
import { PRImage } from "./PRImage";
import { Rock_3D } from "next/font/google";
import { Bookmark } from "./Bookmark";

export function Section1() {
    return (
        <div className="bg-(--background-red) text-(--foreground-white) flex flex-row justify-between items-center px-24 h-120">
            <div className="">
                <h1 className="text-6xl font-bold mb-12">Anh ngữ Quốc tế Tăng Tốc</h1>
                <p className="text-2xl mb-12">Cung cấp các khóa học tiếng Anh tốt nhất</p>
                <div className="flex flex-row justify-start mb-12">
                    <button className="px-6 py-3 bg-(--yellow) text-(--black-letter) rounded-sm">Đăng kí ngay</button>
                    <button className="flex flex-row px-6 py-3">Xem khóa học <FaArrowRightLong size={24} className="mx-3"/></button>
                </div>
            </div>
            <PRImage />
        </div>
    )
}

export function Section2() {
    const data = [{ key: "Number of Students", value: "1000+" },
        { key: "Number of Courses", value: "10+" },
        { key: "Number of Teachers", value: "20+" },
        { key: "Number of Years", value: 5 }];
    const list = data.map((item) => {
        return (
            <div className="flex flex-col justify-center items-center w-1/6">
                <h1 className="text-5xl font-bold mb-2">{item.value}</h1>
                <p className="text-2xl">{item.key}</p>
            </div>
        )
    });
    return (
        <div className="bg-(--background-gray) flex flex-row justify-center h-64">
            {list}
        </div>
    )
}

export function Section3() {
    const categories = [
        { bnum: 1, title: "English", body: "You will learn English in a fun and interactive way. After completing our courses, your English will be much better. You can use English not only for your tests but also in your daily life" },
        { bnum: 2, title: "Teacher", body: "You will be taught by experienced and qualified teachers. Not only are our teachers good at English, but also are energetic and thoughtful. You will be taught with cares" },
        { bnum: 3, title: "Quality", body: "You will receive high-quality education and training. Our staff are trained to teach you with proper textbooks, and each individuals will be given chance to excel" },
        { bnum: 4, title: "Environment", body: "You will study in a friendly and supportive environment. Your class will be friendly-looking and the facilities are new and modern. They will support you on your journey" },
        { bnum: 5, title: "Certification", body: "You will receive a certificate upon completion of the course. Moreover, our center will support you when you participate in other qualification contests." },
        { bnum: 6, title: "Career", body: "You will be prepared for a successful career in English. You will be taught how to speak English to collaborate with colleagues or how to use English to write essays..." }
    ]
    const list = categories.map((item) => {
        return (
            <div className="flex flex-col justify-start items-start p-12 bg-(--background-gray) rounded-sm ">
                <Bookmark number={item.bnum} />
                <h1 className="text-2xl font-bold mb-6">{item.title}</h1>
                <p className="text-lg">{item.body}</p>
            </div>
        )
    });
    return (
        <div className="p-24">
            <h1 className="text-center text-4xl/12 font-semibold">What will you achieve at<br></br> Speed Up English Center?</h1>
            <div className="grid grid-cols-3 gap-12 mt-12">
                {list}
            </div>
        </div>
    )
}

export function Section4() {
    return (
        <div>
            <div>
                <p></p>
            </div>
        </div>
    )
}