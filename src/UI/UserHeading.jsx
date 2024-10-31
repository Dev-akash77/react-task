import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserHeading = ({ text }) => {
  const { handleLogout, handleDeletAccount, userdata, userRole } =
    useContext(AuthContext);
  const [account, setAccount] = useState(false);
  return (
    <div className="cc">
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-center items-start text-xl capitalize">
            Hello{" "}
            <span className="text-3xl font-semibold">
              {text.split(" ")[0]}👋
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <button
              className="border-none outline-none bg-red-500 w-10 h-10 cc text-xl font-semibold rounded-full uppercase"
              onClick={() => {
                setAccount(!account);
              }}
            >
              {text[0]}
            </button>
            <div
              className={`${
                account ? "flex" : "hidden"
              } items-start justify-center flex-col gap-3 bg-[#2b3945] p-4`}
            >
              <button
                className="bg-[#202c37] cc w-full p-2 font-bold rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
              {userRole == "employee" && (
                <button
                  className="bg-[#202c37] cc w-full p-2 font-bold rounded-lg"
                  onClick={() => {
                    handleDeletAccount(userdata);
                  }}
                >
                  Delet Account
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
