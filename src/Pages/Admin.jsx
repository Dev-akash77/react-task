import React from "react";
import UserHeading from "../UI/UserHeading";
import AdminFromData from './../UI/AdminFromData';
import UserStatus from "../UI/UserStatus";

const Admin = ({userData,eData}) => {
  
  return (
    <div className="bg-[#202c37] h-screen w-screen text-white overflow-x-hidden">
      <div className="py-8 md:py-4">
        <UserHeading text={userData.name} />
      </div>
      <AdminFromData />
      <UserStatus data={eData}/>
    </div>
  );
};

export default Admin;
