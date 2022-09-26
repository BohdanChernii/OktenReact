import React from 'react';

import { MyContext} from '../App'

const User = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(val)=>{
          return <h1>{val}</h1>
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default User;