'use client'

import { Table } from "./Table";

export function TeacherTable() {
    const tableHeaders = ["Teacher ID", "Full name", "Classes", "Address", "Phone number", "Actions"]
    return (
        <Table 
        heading={"Teacher"}
        addStmt={"Add new teacher"}
        tableHeaders={tableHeaders}
        />
    )
}