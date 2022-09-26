import React from 'react';
import {deleteCar, getCars} from "../../services/service";
import {useLocation} from "react-router";


const Car = ({car}) => {
  const {model, price, year,id} = car


  const onDeleteCar = async (id) => {
    await deleteCar(id).then(()=>getCars())
    await window.location.reload()
  }
  return (
    <div style={{border: '0.01em solid black', width:'20%', margin:'1%', flexGrow:"1"}}>
      <p className="car__model">{model}</p>
      <p className="car__price">{price}</p>
      <p className="car__year">{year}</p>
      <div style={{display:'flex',justifyContent:'space-evenly'}} >
        <button onClick={()=> onDeleteCar(id)} >Delete User</button>
      </div>
    </div>
  );
};

export default Car;