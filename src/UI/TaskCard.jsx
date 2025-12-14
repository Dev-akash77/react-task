import React from "react";

const TaskCard = ({ data }) => {
  const compleated= data.task.filter((cur)=>cur.complitated)
  
  const accept= data.task.filter((cur)=>{
    return cur.active
  })
  const faildTask= data.task.filter((cur)=>{
    return cur.failed
  })
  const newTask= data.task.filter((cur)=> cur.new)

  return (
    <div className="flex items-center justify-between gap-4 w-full overflow-x-auto task_cont">
      <div
        className={`bg-red-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        new tasks
        <p>{newTask.length}</p>
      </div>
      <div
        className={`bg-blue-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        accepted tasks
        <p>{accept.length}</p>
      </div>
      <div
        className={`bg-green-500 w-[25.1rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        completated tasks
        <p>{compleated.length}</p>
      </div>
      <div
        className={`bg-yellow-500 w-[25rem] flex flex-col justify-center items-start p-4 rounded-lg cursor-pointer text-[1.7rem] md:text-2xl font-semibold capitalize whitespace-nowrap`}>
        failed tasks
        <p>{faildTask.length}</p>
      </div>
    </div>
  );
};

export default TaskCard;
