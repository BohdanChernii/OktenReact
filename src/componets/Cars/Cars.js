import React, {useEffect, useState} from 'react';
import {getCars} from "../../services/service";
import Car from "../Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    getCars().then(res => setCars(res.data)).then(()=>localStorage.setItem('cars',JSON.stringify(cars)))

  }, [])

  console.log(cars);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {cars.map(car => (
        <Car car={car} />
      ))}
    </div>
  );
};

export default Cars;