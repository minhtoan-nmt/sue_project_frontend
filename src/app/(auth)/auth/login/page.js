'use client';

import { logIn } from '@/component/Auth/logIn';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Login() {
  return (
    <main className="w-full h-screen bg-white">
      {/* Home Link */}
      <div className="px-[69px] pt-[60px]">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M19 8H1M1 8L8 1M1 8L8 15"
              stroke="#282938"
              strokeWidth="1.5"
              strokeOpacity="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[20px] font-semibold text-[#282938] opacity-80 tracking-[0.5%]">
            Homepage
          </span>
        </Link>
      </div>

      {/* Login Container */}
      <div className="flex justify-center px-[70px] pt-[13px] pb-[20px]">
        <div className="w-[1301px] h-[691px] flex">
          {/* Left Side */}
          <div className="w-[666px] h-full relative rounded-l-2xl overflow-hidden">
            <Image
              src="/login_banner.jpeg"
              alt="login"
              fill
              className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-[#1C1E53]/60 z-10" />
            <div className="absolute top-[75px] left-[75px] w-[444px] z-20">
              <h1 className="text-white text-[42px] leading-[160%] font-semibold tracking-[0.5%]">
                One Step Closer To Your Dreams
              </h1>
              <p className="text-white text-[16px] leading-[28px] font-medium mt-4 w-[417px]">
                A free E-Learning service that will help you become an expert
              </p>
            </div>
          </div>

          {/* Right Side - Red Background */}
          <div className="w-[635px] h-full bg-[#D84040] rounded-r-2xl flex items-center justify-center">
            <div className="w-[432px] h-[542px] pt-[0px] px-[0px]">
              <h2 className="text-white text-[36px] font-semibold leading-[160%] tracking-[0.5%] mb-2">
                Login
              </h2>
              <p className="text-white text-[16px] leading-[28px] font-medium mb-6">
                Prepare yourself for a future full of stars
              </p>
              <form className="flex flex-col gap-4" onSubmit={(e) => {
                e.preventDefault();
                let success = false;
                logIn(e.target.email.value, e.target.password.value, success).then((data) => {
                  console.log(data.role);
                  if (!data) {
                    alert("Log in failed");
                  } else {
                    alert("Log in successfully");
                    if (data.role==="Admin") redirect("/admin");
                    else redirect("/");
                  }

                });
              }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  className="px-4 py-3 rounded-md border border-white bg-transparent text-white placeholder-white text-[14px] leading-[21px]"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="px-4 py-3 rounded-md border border-white bg-transparent text-white placeholder-white text-[14px] leading-[21px]"
                />
                <label className="flex items-center text-white gap-2 text-sm">
                  <input type="checkbox" />
                  Remember me
                </label>
                <button
                  type="submit"
                  className="mt-[40px] bg-[#FCD980] py-3 font-bold text-black rounded-md cursor-pointer hover:bg-[#e6c675]"
                >
                  LOGIN
                </button>
              </form>
              <p className="text-white text-sm mt-[40px]">
                Already have an account?{' '}
                <Link href="/auth/register" className="underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
