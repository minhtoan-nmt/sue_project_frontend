'use client'

import { getUserData } from "./actions/getUsers";
import { Table } from "./Table"
// import { setStatus } from "../admin/invoices/setStatus";


export function StudentTable({props, items}) {
    const tableHeaders = ["Student ID", "Full name", "Class", "Email", "Password", "Address", "Phone number", "Actions"];
    let students;
    
    return (
        <Table 
        heading="Students" 
        addStmt={"Add a new student"}
        tableHeaders={tableHeaders}
        />
    )
}