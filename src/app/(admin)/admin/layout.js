'use client'

import Sidebar from "@/component/Admin/Sidebar";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function Admin({children, modal, modal_type}) {
    const [sidebar, setSidebar] = useState("off");
    console.log(sidebar);
    return (
        <div className="flex flex-row">
            <div className={sidebar == "on" ? "block" : "hidden xl:block"}>
                <Sidebar />
            </div>
            <div className="block w-full h-full min-h-screen  bg-[#f2f7ff]">
                <button className="py-3 px-5 xl:hidden" onClick={() => sidebar=="on" ? setSidebar("off") : setSidebar("on")}>
                    <IoIosMenu size={32} />
                </button>
                
                {children}
            </div>
            {modal}
            {modal_type}
        </div>
    )
}
