import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Elements/Logo"; // Assuming you have separate logos for light and dark mode
import FormSignIn from "../Fragments/FormSignIn";
import { useTheme } from "../context/ThemeContext"; // Import ThemeContext
import { motion } from "framer-motion"; // Import framer-motion

const AuthLayout = (props) => {
  const { children, type } = props;
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-special-mainBg text-black"
      }`}
    >
      {/* Container start */}
      <div className="w-full max-w-sm p-6 rounded-lg shadow-md">
        {/* Logo start */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} // Initial state
            animate={{ opacity: 1, scale: 1 }} // Final state
            transition={{ duration: 0.6 }} // Duration of the animation
          >
            {theme === "dark" ? (
              <Logo theme="dark" /> // Assuming the Logo component accepts a "theme" prop to render the correct logo
            ) : (
              <Logo theme="light" />
            )}
          </motion.div>
        </div>
        {/* Logo end */}

        {/* Form start */}
        <div className="mt-6">
          {/* Render FormSignIn if type is 'sign in' */}
          {type === "sign in" ? <FormSignIn /> : children}
        </div>
        {/* Form end */}

        {/* Dark Mode Toggle */}
        <div className="mt-8 text-center">
          <button
            className="py-2 px-4 rounded-md bg-primary text-white flex items-center justify-center"
            onClick={toggleTheme}
          >
            {/* Icons for Dark/Light mode */}
            {theme === "light" ? (
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m4.22-4.22l.71.71m-8.49 0l-.71-.71m14.07-6.36a9 9 0 10-14.14 12.71 7.6 7.6 0 01-.58-1.42C5.27 14.6 4 11.59 4 9a8 8 0 1116 0c0 2.59-1.27 5.6-3.35 7.29a7.6 7.6 0 01-.58 1.42 9 9 0 001.83-5.72z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m4.22-4.22l.71.71m-8.49 0l-.71-.71m14.07-6.36a9 9 0 10-14.14 12.71 7.6 7.6 0 01-.58-1.42C5.27 14.6 4 11.59 4 9a8 8 0 1116 0c0 2.59-1.27 5.6-3.35 7.29a7.6 7.6 0 01-.58 1.42 9 9 0 001.83-5.72z"
                />
              </svg>
            )}
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        {/* Text start */}
        <div className="my-6 px-7 flex justify-center text-xs text-gray-03 items-center flex-col relative">
          <div className="border border-gray-05 w-full"></div>
          <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
        </div>
        {/* Text end */}

        {/* Sign in with Google start */}
        <div className="mb-6">
          <button
            className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
            type="button"
          >
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <title>Google-color</title>
              {/* Content */}
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        {/* Sign in with Google end */}

        {/* Link start */}
        <div className="flex justify-center">
          {type === "sign up" ? (
            <>
              <span className="text-sm text-gray-03">
                Already have an account?&nbsp;
              </span>
              <Link to="/login" className="text-primary text-sm font-bold">
                Sign In Here
              </Link>
            </>
          ) : (
            <Link to="/register" className="text-primary text-sm font-bold">
              Create an account
            </Link>
          )}
        </div>
        {/* Link end */}
      </div>
      {/* Container end */}
    </div>
  );
};

export default AuthLayout;
