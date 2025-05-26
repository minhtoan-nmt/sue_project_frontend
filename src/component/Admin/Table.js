import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";

export function Table({props, items, heading, addStmt, tableHeaders}) {
    return (
        <div className={"bg-white rounded-lg p-1 md:p-3 w-fit my-10"}>
            <div className="flex justify-between items-center">
                <h1 className="p-4 text-sm md:text-2xl font-bold text-gray-500">{ heading }</h1>
                <Link href="/admin/products/add_item">
                    <button 
                        type="button" 
                        className="text-xs md:text-base h-fit py-2 px-3 bg-[#435ebe] text-white rounded-lg cursor-pointer hover:bg-blue-700 transition duration-75"
                    >
                        { addStmt }
                    </button>
                </Link>
            </div>
            <table className="m-2 text-xs md:text-base">
                <thead>
                    <tr className="border-b-2 border-gray-300">
                        {tableHeaders.map((header) => {
                            return (<th key={header} className="p-3">
                            {header}
                        </th>)})}
                    </tr>
                </thead>
                {/* <tbody className="text-gray-700">
                    {
                        newItems.map(item => {
                            return (
                                <tr key={item["ID"]} className="border-b-2 border-gray-300 w-full max-w-full">
                                    <td className="p-3">{item["ID"]}</td>
                                    <td className="p-3">{item["Product Name"]}</td>
                                    <td className="p-3">{item["Price"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Discount"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Item_type_id"]}</td>
                                    <td className="p-3 hidden md:table-cell">{item["Brand"]}</td>
                                    <td className="p-3">{item["Quantity"]}</td>
                                    <td>
                                        <Link href={`/admin/products/edit_item/${item["ID"]}`}>
                                            <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaPen /></button>
                                        </Link>
                                        <Link href={`/admin/confirmation/${item["ID"]}`}>
                                            <button type="button" className="p-2 rounded-full hover:bg-gray-300 ease-in duration-125"><FaTrashAlt /></button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody> */}
            </table>
            {/* <div className="mt-3 flex flex-row justify-end p-5">
                <button type="button" className="p-3 mr-2 rounded-md border border-gray-200 hover:bg-gray-200 cursor-pointer" onClick={() => page>1 && setPage(page - 1)}><GrPrevious /></button>
                {pageNum.map(p => 
                    <button key={p} type="button" className={"p-3 w-12 rounded-md border border-gray-200 cursor-pointer " + (p===page ? "bg-[#435ebe] text-white" : "hover:bg-gray-200")}
                        onClick={() => setPage(p)}>{p}</button>)}
                <button type="button" className="p-3 ml-2 mrounded-md border border-gray-200 hover:bg-gray-200 cursor-pointer" onClick={() => page + 1 <= numPages && setPage(page + 1)}><GrNext /></button>
                <label htmlFor="itemsPerPage" className="p-3">Số hàng mỗi trang</label>
                    <select 
                    name="itemsPerPage" 
                    id="itemsPerPage"
                    defaultValue={8}
                    className="border rounded-md border-gray-200 hover:bg-gray-200 cursor-pointer p-3"
                    onChange={(e) => setItemPerPage(Number(e.target.value))}
                    >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value={8}>8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
            </div> */}
        </div>
    )
}