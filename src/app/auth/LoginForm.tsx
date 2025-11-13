"use client";

import { FaFacebook } from "react-icons/fa";

interface LoginFormProps {
  onClose: () => void;
  switchToRegister: () => void;
}

export default function LoginForm({ onClose, switchToRegister }: LoginFormProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-10">
      <div className="bg-white rounded-2xl w-full max-w-md relative shadow-2xl">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="text-center pt-12 pb-8 px-8">
          <h2 className="text-3xl font-bold text-[#2D5016] mb-2">
            Login to your Account
          </h2>
          <p className="text-[#2D5016] text-sm">To Write Review</p>
        </div>

        <form className="flex flex-col gap-3">
          <div className="px-8 pb-8">
            <div className="space-y-5">
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"

                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"

                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"

                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700">Remember Me</span>
                </label>
                <button className="text-green-700 hover:text-green-800 font-medium">
                  Forgot Password?
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-10">
            <button

              className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors shadow-md"
            >
              Login
            </button>
            {/* Facebook Login */}
            <button
              className="w-12 h-12 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg flex items-center justify-center transition-colors"
            >
              <FaFacebook className="w-6 h-6 text-blue-600" fill="currentColor" />
            </button>

            {/* Google Login */}
            <button
              className="w-12 h-12 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>
          </div>
        </form>

        <div className="flex gap-1 pt-4 justify-center text-center text-sm text-gray-600">
          <p>Don not have an account?</p>
          <button
            onClick={switchToRegister}
            className="text-green-700 hover:text-green-800 font-semibold"
          >
            Register?
          </button>
        </div>
        <div className="h-16 bg-[#7A9B57] rounded-b-2xl mt-10"></div>
      </div>
    </div>
  );
}
