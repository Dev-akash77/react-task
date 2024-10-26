import React, { useContext } from "react";
import Login from "./Authentication/Login";
import { AuthContext } from "../../Context/AuthContext";
import Employees from "./User/Employees";

const AllComponents = () => {
  const { employees, admin, userdata } = useContext(AuthContext);
  return (
    <>
      {userdata.length==0 ?<Login />:<Employees data={userdata} />}
    </>
  );
};

export default AllComponents;
