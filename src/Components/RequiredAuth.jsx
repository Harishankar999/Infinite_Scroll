import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequiredAuth = ({ children }) => {
  let isAuth = useSelector((state) => state.authReducer.isAuth);
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RequiredAuth;
