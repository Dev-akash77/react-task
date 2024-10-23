import React from "react";
import UserHeading from "../UI/UserHeading";
import AdminFromData from './../UI/AdminFromData';
import UserStatus from "../UI/UserStatus";

const Admin = () => {
  return (
    <div className="bg-[#202c37] h-screen w-screen text-white overflow-x-hidden">
      <div className="py-8 md:py-4">
        <UserHeading text="Akash" />
      </div>
      <AdminFromData />
      <UserStatus />
    </div>
  );
};

export default Admin;
