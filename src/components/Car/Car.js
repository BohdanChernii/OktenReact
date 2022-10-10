import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions} from "../../slice/cars.slice";

const Car = ({car}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <p>Model:</p>
      <p>Price:</p>
      <p>Year:</p>
      <button onClick={()=>dispatch(carsActions.deleteCar(car?.id))}>Delete</button>
      <button onClick={()=>dispatch(carsActions.selectCar(car))}>Update</button>
    </div>
  );
};

export {Car};