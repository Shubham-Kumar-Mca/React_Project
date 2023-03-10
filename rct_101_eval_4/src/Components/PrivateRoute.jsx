import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuhtContext } from "../Context/AuthContext/AuthContextProvider";

// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;

// 2. if user is not logged in; user should be redirected to the login page;

const PrivateRoute = ({children}) => {
  const {state} = useContext(AuhtContext);
  const {authStatus} = state
  if(!authStatus){
    return <Navigate to="/login"/>
  }
  return children;
};

export default PrivateRoute;
