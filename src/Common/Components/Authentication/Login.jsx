import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Heading from './../../Heading';

const Login = () => {
  const [showPassword, SetshowPassword] = useState(true);
  return (
    <div className="bg-[#202c37] h-screen w-screen flex flex-col items-center justify-center">
      <div className="md:w-[30rem] md:h-[30rem] h-[62%] w-[90%] rounded-md md:py-6 md:px-8 p-4 bg-[#2b3945]">
        <div className="cc text-white">
          <Heading heading={"Sign In"} />
        </div>
        <form className="flex flex-col gap-4 justify-start mt-2 text-white">
          <div className="flex flex-col gap-2">
            <p className="text-md">Name</p>
            <input
              type="text"
              className="outline-none border-2 w-full h-10 rounded-lg text-black px-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md">Email or Mobile Phone Number</p>
            <input
              type="email"
              className="outline-none border-2 w-full h-10 rounded-lg text-black px-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-md flex items-center justify-between">
              Password
              <span
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  SetshowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
                {showPassword ? "Show" : "Hide"}
              </span>
            </p>
            <input
              type={`${showPassword ? "password" : "text"}`}
              className="text-black outline-none border-2 w-full h-10 rounded-lg px-2"
              required
            />
          </div>
          <button
            type="submit"
            className="cc bg-slate-600 text-white p-2 text-2xl rounded-full cursor-pointer mt-8 hover:bg-slate-700 duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
