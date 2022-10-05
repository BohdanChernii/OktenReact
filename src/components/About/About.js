import React, {useContext} from 'react';
import {MyContext} from "../../index";

const About = () => {
  const context = useContext(MyContext)
  return (
    <div>
      About page
      <div>{JSON.stringify(context)}</div>
    </div>
  );
};

export default About;