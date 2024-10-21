import React, { useState } from "react";

const UserHeading = ({ text }) => {
  const [account, setAccount] = useState(false)
  return (
    <div className="cc">
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="flex flex-col justify-center items-start text-xl capitalize">
            Hello <span className="text-3xl font-semibold">{text}👋</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <button className="border-none outline-none bg-red-500 w-10 h-10 cc text-xl font-semibold rounded-full uppercase"
            onClick={()=>{setAccount(!account)}}>
              {text[0]}
            </button>
            <div className={`${account?"flex":"hidden"} items-start justify-center flex-col gap-3 bg-[#2b3945] p-4`}>
              <button className="bg-[#202c37] cc w-full p-2 font-bold rounded-lg">Logout</button>
              <button className="bg-[#202c37] cc w-full p-2 font-bold rounded-lg">Delet Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeading;
