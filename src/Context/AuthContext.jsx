import React, { createContext, useEffect, useState } from "react";
import { adminData, allEmloyeeData } from "../Utils/LocalStorage";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [userRole, setUserRole] = useState(
    JSON.parse(localStorage.getItem("role")) || null
  );
  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employees)); //? all emloyee data
    localStorage.setItem("admin", JSON.stringify(admin)); //? all admin data
    localStorage.setItem("userdata", JSON.stringify(userdata)); //? all admin data
    localStorage.setItem("role", JSON.stringify(userRole)); //? user role
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
      {
        ...fromData,
        dashboard: { new: 0, accept: 0, complete: 0, failed: 0 },
        task: [],
      },
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
    // ! logic for emloyee dashboard
    const data = JSON.parse(localStorage.getItem("employee"));
    const userData = data.find(
      (cur) => cur.email == email && cur.password == password
    );
    if (userData) {
      setUserdata(userData);
      setUserRole("employee");
      toast.success('Login Succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
        });
    }

    //! logic for admin dashboard
    const adminD=JSON.parse(localStorage.getItem("admin"));
    const adminData= adminD.find((cur)=>cur.email == email && cur.password == password);

    if (adminData) {
       setUserdata(adminData);
       setUserRole("admin");
       toast.success('Login into Admin', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
        });
    }

    if (!userData && !adminData) {
      toast.error('invalid credential', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        className: "custom-toast",
        });
    }
  }
  // ! logout function
  const handleLogout = () => {
    setUserdata([]);
    setUserRole(null)
    toast.success('Logout Succesfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: "custom-toast",
      });
  };

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
        userRole,
        //? user data end
        // ! logout
        handleLogout,
        // ! logout
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
