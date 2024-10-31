import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserTask = ({ data }) => {
  const { handleCompleated, handleFailed, handleAccepted } =
    useContext(AuthContext);
  return (
    <div className="task_card_main flex gap-4 overflow-x-auto w-full mb-5">
      {data.task &&
        data.task.map((cur, index) => {
          return (
            <div
              key={index}
              className={`px-3 py-5 bg-${cur.color}-${cur.colorNumber} task_card w-[100%] md:w-[25rem] h-auto rounded-md flex-shrink-0`}
            >
              <div className="flex justify-between items-center">
                <button
                  className={`bg-[rgba(255,255,255,.3)] px-4 py-2 text-lg capitalize rounded-md font-bold outline-none`}
                >
                  {cur.role}
                </button>
                <p className="text-lg">{cur.createdDate}</p>
              </div>
              <h2 className="text-2xl font-semibold mt-4">{cur.teskTitle}</h2>
              <p className="text-md mt-2">{cur.taskDescription}</p>
              <div className="flex flex-col gap-2 w-full mt-4 justify-end">
                <button
                  onClick={() => handleCompleated(cur)}
                  className={`bg-[rgba(0,0,0,.5)] ${
                    cur.complitated
                      ? "bg-[rgba(0,0,0,.5)]"
                      : `bg-[rgba(0,0,0,.8)]`
                  } px-3 py-2 text-md capitalize rounded-md font-bold outline-none w-full`}
                >
                  {cur.complitated ? "Compleated" : "Marks as compleated"}
                </button>
                <button
                  onClick={() => handleFailed(cur)}
                  className={`${
                    cur.failed ? "bg-[rgba(0,0,0,.5)]" : `bg-[rgba(0,0,0,.8)]`
                  } px-3 py-2 text-md capitalize rounded-md font-bold outline-none  w-full`}
                >
                  {cur.failed ? "Failed" : "Marks as Failed"}
                </button>
                <button
                  onClick={() => handleAccepted(cur)}
                  className={`${
                    cur.active ? "bg-[rgba(0,0,0,.5)]" : `bg-[rgba(0,0,0,.8)]`
                  } px-3 py-2 text-md capitalize rounded-md font-bold outline-none  w-full`}
                >
                  {cur.active ? "Accepted" : "Marks as Accepted"}
                </button>
              </div>
            </div>
          );
        })}

      {data.task.length == 0 && (
        <div
          className={`px-3 py-5 text-3xl md:text-4xl capitalize bg-[#2b3945] task_card w-[100%] h-[20rem] rounded-md flex-shrink-0 cc leading-[4rem] text-center md:leading-[4.3rem] md:h-[24.2rem]`}
        >
          Tasks Providing Soon
          <br />
          Chill time {data.name.split(" ")[0]}
        </div>
      )}
    </div>
  );
};

export default UserTask;
