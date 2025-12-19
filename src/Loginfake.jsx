import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D141C] text-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT BLUE CURVE */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="absolute w-[150%] h-[150%] bg-[#233B58] rounded-full border-[6px] border-[#11B0F5] left-[-60%] top-[-10%]"></div>
          <h1 className="relative text-4xl font-bold">WELCOME BACK!</h1>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="bg-transparent flex flex-col items-center w-full px-6">
          {/* Logo */}
          <div className="w-10 h-10 bg-transparent border-2 border-[#11B0F5] mb-3"></div>
          <h2 className="text-xl text-[#11B0F5] mb-10">Portify</h2>

          {/* Email */}
          <label className="w-full max-w-md text-[#11B0F5] text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full max-w-md bg-[#1F2933] border border-[#11B0F5] p-3 rounded-md outline-none mb-6"
          />

          {/* Password */}
          <label className="w-full max-w-md text-[#11B0F5] text-sm mb-1">
            Password
          </label>
          <div className="relative w-full max-w-md">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-[#1F2933] border border-[#11B0F5] p-3 rounded-md outline-none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="w-full max-w-md text-right text-xs text-[#11B0F5] mt-1 cursor-pointer">
            Forgot Password?
          </p>

          {/* Login Button */}
          <button className="w-full max-w-md bg-[#11B0F5] text-white py-3 rounded-md text-lg font-semibold mt-8">
            Login
          </button>

          <p className="mt-4 text-sm">
            New user?{" "}
            <span className="text-[#11B0F5] cursor-pointer">Sign Up</span>
          </p>

          {/* Social Login */}
          <p className="mt-6 text-sm">Or sign up with</p>

          <div className="flex gap-6 mt-4 text-3xl">
            <span className="cursor-pointer text-blue-500">●</span>
            <span className="cursor-pointer text-white"></span>
            <span className="cursor-pointer text-red-500">●</span>
          </div>
        </div>
      </div>
    </div>
  );
}
