import React, { createContext, useEffect, useState } from "react";
import { adminData, allEmloyeeData } from "../Utils/LocalStorage";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  //! defult ls data
  const [employees, setEmployees] = useState(
    () => JSON.parse(localStorage.getItem("employee")) || [...allEmloyeeData]
  );
  const [admin, setAdmin] = useState(
    () => JSON.parse(localStorage.getItem("admin")) || [...adminData]
  );
  const [userdata, setUserdata] = useState(
    JSON.parse(localStorage.getItem("userdata")) || []
  );
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employees)); //? all emloyee data
    localStorage.setItem("admin", JSON.stringify(admin)); //? all admin data
    localStorage.setItem("userdata", JSON.stringify(userdata)); //? all admin data
  }, [employees, admin, userdata]);

  // ! all from data
  const [signIn, setSignIn] = useState(false);
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //! change from data
  const handleChangeFromData = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //! sign up functionality
  const handleClickSubmit = (e) => {
    e.preventDefault();
    setEmployees((previus) => [
      ...previus,
      { ...fromData, dashboard: { new: 2, accept: 3, complete: 4, failed: 1 } },
    ]);
    setSignIn(true);
    setFromData({
      name: "",
      email: "",
      password: "",
    });
  };

  // ! login functionality
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = fromData;
    const data = JSON.parse(localStorage.getItem("employee"));
    const userData = data.find(
      (cur) => cur.email == email && cur.password == password
    );
    if (userData) {
      setUserdata(userData);
    }
  };




// ! logout function
const handleLogout=()=>{
  setUserdata([])
}


  return (
    <AuthContext.Provider
      value={{
        // ! from data start
        handleChangeFromData,
        handleClickSubmit,
        handleLogin,
        fromData,
        signIn,
        setSignIn,
        // ! from data end
        //? user data start
        employees,
        admin,
        userdata,
        //? user data end
        // ! logout
        handleLogout,
        // ! logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
