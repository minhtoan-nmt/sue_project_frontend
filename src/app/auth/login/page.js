import Image from "next/image";
import Banner from "@/../public/banner.jpg";

export default function Login() {
    return (
        <div className="flex flex-row p-12">
            <div id="banner" className="w-1/2">
                <Image src={ Banner } />
            </div>
            <div id="login-form" className="w-1/2 bg-(--background-red) text-white px-24 py-15 ">
                <h1 className="text-3xl font-bold mb-10">Log in</h1>
                <p className="text-base mb-2">Please type in your username and password.</p>
                <form>
                    <label htmlFor="username">Your username is:</label>
                    <input type="text" name="username" placeholder="Your username" className="w-full mt-2 mb-5 p-3 border border-white rounded-xs"></input>
                    <label htmlFor="password">Your password is:</label>
                    <input type="password" name="password" placeholder="Your password" className="w-full mb-5 mt-2 p-3 border border-white rounded-xs"></input>
                    <div id="remember" className="flex flex-row justify-start">
                        <input type="checkbox" name="remember" className="size-6"></input> <p className="mx-2 relative bottom-0.5">Remember me</p>
                    </div>
                    <button type="submit" className="p-3 border-white border my-3 rounded-md w-1/4 hover:bg-amber-500">Log in</button> 
                </form>
            </div>
        </div>
    )
}