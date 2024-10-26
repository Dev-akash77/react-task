import React from "react";

const TaskCard = ({ data }) => {
  return (
    <div className="flex items-center justify-between gap-4 w-full overflow-x-auto task_cont">
      <div
        className={`bg-red-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        new tasks
        <p>{data.accept}</p>
      </div>
      <div
        className={`bg-blue-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        accepted tasks
        <p>{data.accept}</p>
      </div>
      <div
        className={`bg-green-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        completated tasks
        <p>{data.complete}</p>
      </div>
      <div
        className={`bg-yellow-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        failed tasks
        <p>{data.failed}</p>
      </div>
    </div>
  );
};

export default TaskCard;
