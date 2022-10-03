import React from 'react';
import {useNavigate} from "react-router";

import css from './Header.module.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className={css.Header}>
      <h1>
        Reg/Log
      </h1>
      <button onClick={()=> navigate('/login')}>Login</button>
      <button onClick={()=> navigate('/register')}>Register</button>
    </div>
  );
};

export default Header;