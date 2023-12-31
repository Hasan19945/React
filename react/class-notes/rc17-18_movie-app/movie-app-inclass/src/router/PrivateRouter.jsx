import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useAuthContext();

  //* Redirect them to the /login page, but save the current location they were
  //* trying to go to when they were redirected. This allows us to send them
  //* along to that page after they login, which is a nicer user experience
  //* than dropping them off on the home page.
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
