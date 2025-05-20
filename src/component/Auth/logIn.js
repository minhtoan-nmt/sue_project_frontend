'use server'

import { cookies } from "next/headers";

export async function logIn(username, password, success) {
    const res = await fetch("http://103.172.79.235:7777/api/v0/auth/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            "email" : username,
            "password" : password,
        })
    });
    if (!res.ok) {
        console.log(res.status);
    }
    const data = await res.json();
    console.log(data.success);

    if (data.success === false) {
        success = false;
        return false;
    }

    const cookie = await cookies();
    cookie.set("token", data.data.token, {
        expires: Date.now() + 60*60*24*1000,
    });
    success = true;
    return data.success;
}