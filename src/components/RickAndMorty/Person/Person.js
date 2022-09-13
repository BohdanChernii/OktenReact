import React from 'react';

const Person = ({name,status,species,gender,image}) => {
  return (
    <div className={'person'}>
<p className="person__name">{name}</p>
      <p className="person__status">{status}</p>
      <p className="person__species">{species}</p>
      <p className="person__gender">{gender}</p>
      <img src={image} alt="" className="person__image"/>
    </div>
  );
};

export default Person;