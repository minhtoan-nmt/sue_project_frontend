import { Table } from "./Table";

export function CourseTable() {
    const th = ["Course ID", "Name", "Number of Students", "Shift", "Level", "Homeroom Teacher", "Actions"]
    return (
        <Table
        heading={"Courses"}
        addStmt={"Add a course"}
        tableHeaders={th}
        />
    )
}