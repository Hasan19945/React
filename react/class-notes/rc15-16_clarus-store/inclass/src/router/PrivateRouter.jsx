import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthProvider";

const PrivateRouter = () => {
  const {user} = useContext(AuthContext)
  return user ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;

//! context kullanmadan user bilgilerini okuma
// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// const PrivateRouter = () => {
//   const user = sessionStorage.getItem("user")
//   return user ? (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to="/" />
//   );
// };

// export default PrivateRouter;