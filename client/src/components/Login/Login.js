import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default ({ isLogin }) => {
  //   const [isLogin, setLogin] = useState(isLogin);
  return (
    <>
      <Helmet>
        ‍<title>{isLogin ? "Login" : "Sign Up"} - WorkPey</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470')",
        }}
      >
        <div className="relative container mx-auto py-10 px-4">
          <div className="flex items-center h-screen/2 w-full">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
              <div className="flex items-center justify-center">
                <Link
                  to="/signup"
                  className={`flex-1 rounded-l block px-6 py-2.5 ${
                    !isLogin
                      ? "bg-green-500 text-white"
                      : "text-dark hover:text-white"
                  } text-dark font-medium text-l leading-tight uppercase hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700 transition duration-150 ease-in-out text-center`}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className={`flex-1 rounded-r block px-6 py-2.5 ${
                    isLogin
                      ? "bg-green-500 text-white"
                      : "text-dark hover:text-white"
                  } font-medium text-l leading-tight uppercase hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-700 transition duration-150 ease-in-out text-center`}
                >
                  Login
                </Link>
              </div>
              <form className="mt-4 mb-4" method="post">
                {!isLogin ? (
                  <div className="mb-4 md:w-full">
                    <label htmlFor="name" className="block text-xs mb-1">
                      Full Name
                    </label>
                    <input
                      className="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="mb-4 md:w-full">
                  <label htmlFor="email" className="block text-xs mb-1">
                    Email
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6 md:w-full">
                  <label htmlFor="password" className="block text-xs mb-1">
                    Password
                  </label>
                  <input
                    className="w-full border rounded p-2 outline-none focus:shadow-outline"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                {!isLogin ? (
                  <div className="mb-6 md:w-full">
                    <label htmlFor="confPassword" className="block text-xs mb-1">
                      Confirm Password
                    </label>
                    <input
                      className="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="password"
                      name="confPassword"
                      id="confPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                ) : (
                  ""
                )}
                <button
                  type="submit"
                  className="w-full block bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>
              {isLogin ? (
                <>
                  <div>
                    <Link
                      className="text-green-700 text-center text-sm"
                      to="/login"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-green-700 text-center text-sm"
                      to="/signup"
                    >
                      Don't have an account ? Sign Up
                    </Link>
                  </div>
                </>
              ) : (
                <Link
                  className="text-green-700 text-center text-sm"
                  to="/login"
                >
                  Already have an account ? Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
