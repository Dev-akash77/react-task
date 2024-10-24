import React from "react";

const UserStatus = () => {
  return (
    <div className="cc mt-8 mb-5">
      <div className="container bg-[#2b3945] p-2 rounded-sm">
        <div className="w-full bg-blue-500 flex items-center justify-between py-1 px-3 rounded-sm text-md">
          <p className="hidden md:block">Employee Name</p>
          <p className="md:hidden block">Name</p>
          <p className="hidden md:block">New Task</p>
          <p className=" md:hidden block">New</p>
          <p className="hidden md:block">Active Task</p>
          <p className=" md:hidden block">Active</p>
          <p>Compleated</p>
          <p>Failed</p>
        </div>
        <div className="flex flex-col gap-2 mt-2 w-full overflow-y-auto h-[7.5rem] task_cont">
          <div className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full">
            <p>Akash</p>
            <p className="text-blue-300">1</p>
            <p className="text-yellow-300">1</p>
            <p>1</p>
            <p className="text-red-300">1</p>
          </div>
          <div className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full">
            <p>Akash</p>
            <p className="text-blue-300">1</p>
            <p className="text-yellow-300">1</p>
            <p>1</p>
            <p className="text-red-300">1</p>
          </div>
          <div className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full">
            <p>Akash</p>
            <p className="text-blue-300">1</p>
            <p className="text-yellow-300">1</p>
            <p>1</p>
            <p className="text-red-300">1</p>
          </div>
          <div className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full">
            <p>Akash</p>
            <p className="text-blue-300">1</p>
            <p className="text-yellow-300">1</p>
            <p>1</p>
            <p className="text-red-300">1</p>
          </div>
          <div className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full">
            <p>Akash</p>
            <p className="text-blue-300">1</p>
            <p className="text-yellow-300">1</p>
            <p>1</p>
            <p className="text-red-300">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
