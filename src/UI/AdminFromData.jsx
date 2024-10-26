import React from "react";

const AdminFromData = () => {
  return (
    <div className="cc">
      <div className="container">
        <form className="bg-[#2b3945] p-4 flex flex-col md:flex-row justify-between gap-2 md:gap-14">
          {/*  */}
          <div className="md:w-[40%] w-full flex flex-col gap-2">
            <div className="w-full">
              <h4 className="text-md">Task Title</h4>
              <input
                required
                type="text"
                className="bg-transparent border w-full mt-1 rounded-sm p-1"
                placeholder="Title"
              />
            </div>
            <div className="w-full">
              <h4 className="text-md">Date</h4>
              <input
                required
                type="date"
                className="bg-transparent border w-full mt-1 rounded-sm p-1 cursor-pointer"
              />
            </div>
            <div className="w-full">
              <h4 className="text-md">Assign To</h4>
              <input
                required
                type="text"
                className="bg-transparent border w-full mt-1 rounded-sm p-1"
                placeholder="User ID"
              />
            </div>
            <div className="w-full">
              <h4 className="text-md">Category</h4>
              <input
                required
                type="text"
                className="bg-transparent border w-full mt-1 rounded-sm p-1"
                placeholder="design, dev , etc...."
              />
            </div>
            <div className="w-full">
              <h4 className="text-md">Colour:</h4>
              <select
                required
                name="Color"
                className="bg-transparent border w-full mt-1 rounded-sm p-1 cursor-pointer outline-none"
              >
                <option
                  value="color"
                  className="bg-[#2b3945] bordernone outline-none"
                >
                  colour
                </option>
                <option
                  value="green"
                  className="bg-[#2b3945] bordernone outline-none"
                >
                  green
                </option>
                <option
                  value="blue"
                  className="bg-[#2b3945] bordernone outline-none"
                >
                  blue
                </option>
                <option
                  value="red"
                  className="bg-[#2b3945] bordernone outline-none"
                >
                  red
                </option>
                <option
                  value="yellow"
                  className="bg-[#2b3945] bordernone outline-none"
                >
                  yellow
                </option>
              </select>
            </div>
          </div>
          {/*  */}
          <div className="md:w-[40%] w-full h-full">
            <h4 className="text-md">Description</h4>
            <textarea
              rows={10}
              required
              name="description"
              className="bg-transparent border w-full mt-1 rounded-sm outline-none p-1 h-[74%]"
            ></textarea>
            <button
              type="submit"
              className="cc w-full bg-green-400 cursor-pointer rounded-sm py-2 text-lg font-semibold mt-2 hover:bg-green-500 duration-200"
            >
              Craet Task
            </button>
          </div>
          {/*  */}
        </form>
      </div>
    </div>
  );
};

export default AdminFromData;
