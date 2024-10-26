import React, { useContext } from "react";
import Login from "./Authentication/Login";
import { AuthContext } from "../../Context/AuthContext";
import Employees from "./User/Employees";
import Admin from './../../Pages/Admin';

const AllComponents = () => {
  const { employees, userdata,userRole } = useContext(AuthContext);
  return (
    <>
      {userdata.length==0 && <Login />}
      {userRole=="employee" && <Employees data={userdata} />}
      {userRole=="admin" && <Admin userData={userdata} eData={employees} />}
    </>
  );
};

export default AllComponents;
