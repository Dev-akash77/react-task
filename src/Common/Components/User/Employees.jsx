import React from "react";
import UserHeading from "../../../UI/UserHeading";
import TaskCard from './../../../UI/TaskCard';
import UserTask from "../../../UI/UserTask";

const Employees = () => {
  return (
    <div className="bg-[#202c37] w-screen h-auto md:h-screen text-white">
      <div className="py-8 md:py-12">
        <UserHeading text={"akash"} />
      </div>
      <div className="cc flex items-center justify-between gap-2">
        <div className="container flex items-center flex-col justify-between gap-[2rem] md:gap-[4rem]">
          <TaskCard />
          <UserTask />
        </div>
      </div>
    </div>
  );
};

export default Employees;
