import React from "react";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-end bg-white  w-[90%] md:w-[60%] lg:w-[60%] lg:top-[12%] lg:h-[40%] xl:w-[100%] 
    lg:left-[20%] md:h-[45%] md:left-[20%] h-[60%] xl:h-[70%] absolute xl:top-[25%] xl:left-[0%] z-[30] top-[20%] left-[5%] 
    rounded-xl border border-white border-1 dark:bg-gray-900 dark:border-gray-900">
        {/*Division inside Division */}
      <div className="bg-white p-8 rounded-lg shadow-md xl:w-full w-[80%] max-w-md py-10 m-10 border border-2 border-gray-200 
      xl:my-[auto] lg:m-10 mx-20 dark:bg-gray-900 dark:border-gray-900">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Enter username or Email"
          id="one"
          name="username"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Enter password"
          id="two"
          name="password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        {/* Links */}
        <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-600">
          <a
            href="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
          <span>|</span>
          <a
            href="http://127.0.0.1:5500/index.html"
            className="text-blue-600 hover:underline"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;