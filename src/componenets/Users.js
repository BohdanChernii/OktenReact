import React from 'react';
import User from "./User";
import {MyContext} from "../index";

const Users = () => {
  return (
    <div>
      <MyContext.Consumer >
        {(val )=>(
          <p>{val}</p>
        )}
      </MyContext.Consumer>
      <User/>
    </div>
  );
};

export default Users;