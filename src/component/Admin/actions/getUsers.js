'use server'

import { cookies } from "next/headers"

export async function getUserData() {
    const cookie = await cookies();
    const token = cookie.get("token");
    console.log(token);
    // const res = await fetch("http://103.172.79.235:7777/api/v0/users?page=1&limit=20", {
    //     method: "GET",
    //     headers: {
    //         "Authorization" : "Bearer " + 
    //     }
    // })
}