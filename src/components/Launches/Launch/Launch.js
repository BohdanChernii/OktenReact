import React from 'react';
import './Launch.css'
const Launch = ({name, year, image}) => {
  return (
    <div className='launch'>
      <p className="name">{name}</p>
      <p className="year">{year}</p>
      <img src={image} alt="" className="image"/>
    </div>
  );
};

export default Launch;