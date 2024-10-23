import React from "react";

const UserTask = () => {
  const userTask = [
    {
      createdDate: "22 Oct 2024",
      name: "Akash Biswas",
      id: 2341,
      teskTitle: "Make a Blog Application",
      taskDescription:
        "Make a full stack blog application with responsive design, more functionality, animations, user interaction, dynamic values, complex backend, and a beautiful landing page with authentication.",
      complitated: true,
      failed: 0,
      active: 2,
      color: "red",
      role: "developed",
    },
    {
      createdDate: "18 Oct 2024",
      name: "Rahul Mehta",
      id: 2442,
      teskTitle: "Create E-commerce Website",
      taskDescription:
        "Develop an e-commerce website with product listings, payment gateway integration, cart functionality, and order tracking. Ensure user-friendly UI and mobile responsiveness.",
      complitated: false,
      failed: 1,
      active: 4,
      color: "green",
      role: "E-com",
    },
    {
      createdDate: "12 Oct 2024",
      name: "Sonia Sharma",
      id: 2343,
      teskTitle: "Build Portfolio Website",
      taskDescription:
        "Design and develop a personal portfolio website with interactive sections, a blog, and project showcase. Ensure responsiveness and SEO optimization.",
      complitated: true,
      failed: 0,
      active: 0,
      color: "blue",
      role: "Build",
    },
    {
      createdDate: "10 Oct 2024",
      name: "Ravi Kumar",
      id: 2344,
      teskTitle: "Implement Chat Application",
      taskDescription:
        "Build a real-time chat application with WebSocket integration, multi-user support, message encryption, and responsive design. Ensure cross-browser compatibility.",
      complitated: false,
      failed: 1,
      active: 3,
      color: "yellow",
      role: "Optimize",
    },
    {
      createdDate: "05 Oct 2024",
      name: "Neha Patel",
      id: 2345,
      teskTitle: "Develop Task Management App",
      taskDescription:
        "Create a task management app with features for task creation, prioritization, reminders, and progress tracking. Include a calendar view and notifications.",
      complitated: true,
      failed: 0,
      active: 1,
      color: "green",
      role: "developed",
    },
  ];

  return (
    <div className="task_card_main flex gap-4 overflow-x-auto w-full mb-5">
      {userTask.map((cur) => {
        return (
          <div
            key={cur.id}
            className={`px-3 py-5 bg-${cur.color}-400 task_card w-[100%] md:w-[25rem] h-auto rounded-md flex-shrink-0`}
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
                className={`bg-[rgba(0,0,0,.5)] ${
                  cur.complitated
                    ? "bg-[rgba(0,0,0,.5)]"
                    : `bg-[rgba(0,0,0,.8)]`
                } px-3 py-2 text-md capitalize rounded-md font-bold outline-none w-full`}
              >
                {cur.complitated ? "Compleated" : "Marks as compleated"}
              </button>
              <button
                className={`${
                  cur.failed ? "bg-[rgba(0,0,0,.5)]" : `bg-[rgba(0,0,0,.8)]`
                } px-3 py-2 text-md capitalize rounded-md font-bold outline-none  w-full`}
              >
                {cur.failed ? "Failed" : "Marks as Failed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserTask;
