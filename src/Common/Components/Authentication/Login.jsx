import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Heading from "./../../Heading";
import { AuthContext } from "../../../Context/AuthContext";

const Login = () => {
  const { handleChangeFromData, fromData,signIn,setSignIn,handleClickSubmit,handleLogin } = useContext(AuthContext);
  const [showPassword, SetshowPassword] = useState(true);
  return (
    <div className="bg-[#202c37] h-screen w-screen flex flex-col items-center justify-center">
      <div className="md:w-[30rem] w-[90%] rounded-md md:py-6 md:px-8 p-4 bg-[#2b3945]">
        <div className="cc text-white">
          <Heading login={signIn} />
        </div>
        <form className="flex flex-col gap-4 justify-start mt-5 text-white" onSubmit={(e) => (signIn ? handleLogin(e) : handleClickSubmit(e))}>
          {!signIn && (
            <div className="flex flex-col gap-2">
              <p className="text-md">Full Name</p>
              <input
                name="name"
                value={fromData.name}
                type="text"
                onChange={(e) => handleChangeFromData(e)}
                className="outline-none border-2 w-full h-10 rounded-lg text-black px-2"
                required
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="text-md">Email</p>
            <input
              type="email"
              name="email"
              value={fromData.email}
              onChange={(e) => handleChangeFromData(e)}
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
              name="password"
              value={fromData.password}
              onChange={(e) => handleChangeFromData(e)}
              className="text-black outline-none border-2 w-full h-10 rounded-lg px-2"
              required
            />
          </div>

          <div className="flex text-lg text-blue-500 justify-end">
            {signIn ? (
              <p
                onClick={() => setSignIn(false)}
                className="w-max cursor-pointer"
              >
                Don't have any account ?
              </p>
            ) : (
              <p
                onClick={() => setSignIn(true)}
                className="w-max cursor-pointer"
              >
                Allraedy have an account ?
              </p>
            )}
          </div>

          <button
            type="submit"
            className="cc bg-slate-600 text-white p-2 text-2xl rounded-full cursor-pointer mt-5 hover:bg-slate-700 duration-150"
          >
            {signIn ? "Log in" : "sign up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
