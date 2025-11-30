'use client'

import { CourseTable } from "@/component/Admin/CourseTable";

export default function Page() {
    return (
        <div className="p-10">
            <h1 className="font-bold text-3xl mb-10">Courses Administration</h1>
            <CourseTable />
        </div>
    )
}