import { StudentTable } from "@/component/Admin/StudentTable";
import { TeacherTable } from "@/component/Admin/TeacherTable";

export default function Page() {
    return (
        <div className="p-10">
            <h1 className="font-bold text-3xl mb-10">User Administration</h1>
            <StudentTable />
            <TeacherTable />
        </div>
    )
}