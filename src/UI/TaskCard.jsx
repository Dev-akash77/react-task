import React from "react";

const TaskCard = () => {
  const taskCard = [
    {
      color: "bg-blue-500",
      name: "new task",
      number: 1,
    },
    {
      color: "bg-red-500",
      name: "accepted task",
      number: 0,
    },
    {
      color: "bg-green-500",
      name: "completed task",
      number: 3,
    },
    {
      color: "bg-yellow-500",
      name: "failed task",
      number: 0,
    },
  ];
  return (
    <div className="flex items-center justify-between gap-4 w-full overflow-x-auto task_cont">
      {taskCard.map((cur, index) => {
        return (
          <div
            className={`${cur.color} w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}
            key={index}
          >
            {cur.number}
            <p>{cur.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
