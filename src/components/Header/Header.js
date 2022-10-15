import React from 'react';
import {useNavigate} from "react-router";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </header>
  );
};

export default Header;