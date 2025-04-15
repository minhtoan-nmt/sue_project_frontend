import Image from "next/image";
import logo from "@/../public/logo_img.jpg";
import Link from "next/link";

export function Navbar() {
    return (
      <div className="h-[90px] bg-(--background-red) text-(--foreground-white) px-24 p-3 flex flex-row justify-between">
        <Image src={logo} alt="S.U.E. Logo" width={64} height={64} className="rounded-full"/>
        <div className="flex flex-row justify-evenly xl:w-1/2 w-3/4">
          <div className="flex flex-row justify-evenly items-center w-4/5">
            <p>HOME</p>
            <p>ABOUT CENTER</p>
            <Link href="/courses">COURSES</Link>
            <p>FAQS</p>
            <p>BLOGS</p>
          </div>
          <button className="border-2 w-24 h-1/2 mt-4 rounded-lg">Login</button>
        </div>
      </div>
    )
}