'use client'

import Image from "next/image";
import logo from "@/../public/logo_img.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Footer() {
    const pathName = usePathname();
        if (pathName.startsWith("/auth")) {
          return null;
        }
    return (
        <div>
            <div className="bg-(--background-red) text-(--foreground-white) px-24 pt-12">
                <div className=" grid grid-cols-[3fr_1fr_1fr_1fr] h-64">
                    <div className="pt-6">
                        <Image src={logo} alt="S.U.E. logo" width={64} height={64} className="rounded-full mb-2"/>
                        <p className="text-2xl font-bold mb-2">Speed-up International English Center</p>
                        <p className="text-xl">Your English, Your Future</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="text-xl font-bold mb-4">Social Media</h1>
                        <Link href="https://www.facebook.com/S.U.ECC2018" target="_blank" className="text-lg mb-2">Facebook</Link>
                        <p className="text-lg mb-2 mt-2">Instagram</p>
                        <p className="text-lg mb-2">Twitter</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="text-xl font-bold mb-4">Program</h1>
                        <p className="text-lg mb-2">Starters / Movers / Flyers</p>
                        <p className="text-lg mb-2">KET / PET / FCE</p>
                        <p className="text-lg mb-2">TOEIC / IELTS</p>
                    </div>
                    <div className="pt-6">
                        <h1 className="text-xl font-bold mb-4">Company</h1>
                        <p className="text-lg mb-2">About us</p>
                        <p className="text-lg mb-2">Contact us</p>
                    </div>
                </div>
                <div className="flex flex-row text-(--black-letter) w-3/7">
                    <div className="px-12 w-full py-3 bg-(--yellow)">
                        <h1 className="text-xl font-bold mb-2">Email</h1>
                        <p className="text-lg">tangtoc.ttnn2018@gmail.com</p>
                    </div>
                    <div className="w-full px-12 py-3 bg-(--yellow)">
                        <h1 className="text-xl font-bold mb-2">Telephone</h1>
                        <p className="text-lg">090 806 46 26</p>
                    </div>
                </div>          
            </div>
            <div className="p-5 flex flex-row justify-between font-semibold">
                <div>
                    <p>Copyright SPEED UP INTERNATIONAL ENGLISH CENTER 2025</p>
                </div>
                <div className="flex flex-row justify-evenly w-1/2">
                    <p>HOME</p>
                    <p>ABOUT CENTER</p>
                    <p>COURSES</p>
                    <p>FAQS</p>
                    <p>BLOG</p>
                </div>
            </div>
        </div>
    )
}