import React from 'react';
import useAuth from "../hooks/useAuth";
import {Navigate, useLocation} from "react-router";

const RequireAuth = ({children}) => {
  const location = useLocation()

  const {user} = useAuth()
  if (!user) {
    return <Navigate to={'/login'} state={location}/>
  }

  return children
};

export default RequireAuth;