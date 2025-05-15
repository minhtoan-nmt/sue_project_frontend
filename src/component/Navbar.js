'use client'

import Image from "next/image";
import logo from "@/../public/logo_img.jpg";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
    const router = useRouter();
    const pathName = usePathname();
    if (pathName.startsWith("/auth")) {
      return null;
    }
    return (
      <div className="h-[90px] bg-(--background-red) text-(--foreground-white) px-24 p-3 flex flex-row justify-between">
        <Image src={logo} alt="S.U.E. Logo" width={64} height={64} className="rounded-full"/>
        <div className="flex flex-row justify-evenly xl:w-1/2 w-3/4">
          <div className="flex flex-row justify-evenly items-center w-4/5">
            <Link href="/" className="hover:bg-red-300 hover:text-yellow-300 px-2 py-5 rounded-xl ease-in duration-150">HOME</Link>
            <Link href="/about" className="hover:bg-red-300 hover:text-yellow-300 px-2 py-5 rounded-xl ease-in duration-150">ABOUT CENTER</Link>
            <Link href="/courses" className="hover:bg-red-300 hover:text-yellow-300 px-2 py-5 rounded-xl ease-in duration-150">COURSES</Link>
            <p>FAQS</p>
            <p>BLOGS</p>
          </div>
          <Link href={"/auth/login"}><button className="border-2 w-24 h-1/2 mt-4 rounded-lg cursor-pointer hover:bg-red-800 ease-in duration-150" >Login</button></Link>
        </div>
      </div>
    )
}