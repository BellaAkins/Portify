import { useState, useEffect } from "react";
import { Moon, Sun, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const [dark, setDark] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen flex bg-[#F3FAFA] dark:bg-[#0D1117] transition-colors duration-300">
      {/* LEFT CURVED PANEL (ALWAYS SAME COLOR) */}
      <div className="relative w-1/2 hidden lg:flex items-center justify-center overflow-hidden">
        <div
          className="absolute
    w-[140%] h-[140%]
    bg-[#1C3F63]
    rounded-full
    border-[6px] border-[#11B0F5]
    -left-[50%]
    top-1/2
    -translate-y-1/2
  "
        ></div>

        <h1 className="relative text-white font-bold text-4xl z-10">
          CREATE ACCOUNT
        </h1>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-10 py-12 relative">
        {/* DARK MODE TOGGLE */}
        <button
          onClick={() => setDark(!dark)}
          className="absolute top-6 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {dark ? (
            <Sun size={20} className="text-gray-300" />
          ) : (
            <Moon size={20} className="text-gray-700" />
          )}
        </button>

        {/* LOGO */}
        <div className="flex flex-col items-center mb-10">
          {/*For Portify Logo
          <div className="w-10 h-10 border-2 border-[#11B0F5] rounded-sm"></div>
        */}
          <p className="text-lg mt-2 font-semibold text-[#1C3B5E] dark:text-[#1ABCFE] ">
            Portify
          </p>
        </div>

        {/* FORM */}
        <form className="w-full max-w-md flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="text-[#9D9696] dark:text-[#1ABCFE] bg font-[inter] block mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-[#F9FEFF] dark:bg-[#1F2933] border border-[#1C3B5E] text-black dark:text-[#1ABCFE] outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[#1ABCFE] focus:ring-2 focus:ring-[#1ABCFE]/40"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[#9D9696] dark:text-[#1ABCFE] block mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-[#F9FEFF] dark:bg-[#1F2933] dark:text-[#1ABCFE] border border-[#1C3B5E] text-black "
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[#9D9696] dark:text-[#1ABCFE] block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded-md bg-[#F9FEFF] dark:bg-[#1F2933] border border-[#1C3B5E] text-black dark:text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="w-full border border-[#1ABCFE] text-[#1ABCFE] py-3 rounded-md font-semibold text-lg hover:bg-[#1ABCFE] hover:text-white transition-colors duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
