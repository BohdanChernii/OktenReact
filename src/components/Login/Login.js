import React, {useRef} from 'react';
import useAuth from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router";

const Login = () => {
  const {logIn} = useAuth()
  const {state} = useLocation()

  const navigate = useNavigate()

  const name = useRef()
  const login = () => {
    const userName = name.current.value
    logIn(userName, () => navigate(state.pathname, {replace: true}))

  }
  return (
    <div>
      <input type="text" ref={name}/>
      <button onClick={() => login()}>Log In</button>
    </div>
  );
};

export default Login;