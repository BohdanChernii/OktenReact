import React from 'react';
import Member from './Member/Member'

const Simpsons = ({children}) => {
  return (
    <>
      {children}
      <div className='simpsons'>
        <Member name={'Bart'}></Member>
        <Member name={'Lisa'}></Member>
        <Member name={'Maggy'}></Member>
        <Member name={'Homer'}></Member>
        <Member name={'Marge'}></Member>
      </div>
    </>
  );
};

export default Simpsons;