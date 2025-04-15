import React, { useContext } from "react";
import AuthContext from "../authcontext/AuthContext";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
