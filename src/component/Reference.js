import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export default function ReferenceToCourse() {
    return (
        <div className="h-[90px] bg-(--background-gray) text px-24 p-3 flex items-center">
            <span className="flex flex-row justify-start text-(--black-letter)"><Link href="/">Home</Link> <MdNavigateNext size={25} /> <Link href="/courses">Course</Link></span>
        </div>
    )
}