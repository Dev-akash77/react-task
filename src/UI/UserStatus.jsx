import React from "react";

const UserStatus = ({ data }) => {
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
          {data.map((cur, index) => {
            const newTask = cur.task.filter((curTask) => {
              return curTask.new;
            });
            const activeTask = cur.task.filter((curTask) => {
              return curTask.active;
            });
            const failedTask = cur.task.filter((curTask) => {
              return curTask.failed;
            });
            const complitatedTask = cur.task.filter((curTask) => {
              return curTask.complitated;
            });
            return (
              <div
                className="border border-green-300 flex items-center justify-between py-1 px-3 rounded-sm text-md w-full"
                key={index}
              >
                <p className="capitalize">{cur.name.split(" ")[0]}</p>
                <p className="text-blue-300">{newTask.length}</p>
                <p className="text-yellow-300">{activeTask.length}</p>
                <p>{complitatedTask.length}</p>
                <p className="text-red-300">{failedTask.length}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
