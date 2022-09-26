import React, {useEffect, useState} from 'react';
import {getCars} from "../../services/service";
import {useForm} from "react-hook-form";
import Update from "../Update/Update";

const UpdateForm = () => {
  const [cars,setCars]=useState([])
  const [car,setCar]=useState({})
  const {register, handleSubmit} = useForm({defaultValues:{}})

  useEffect(()=>{
    getCars().then(res=>setCars(res.data))

  },[])

  const chooseCar = (data) =>{
    console.log(JSON.parse(data.car));
    setCar(JSON.parse(data.car))
  }

  return (
    <div>
      <form onChange={handleSubmit(chooseCar)}>
      <select {...register('car')}>
        <option></option>
        {cars.map(car=>(
          <option value={JSON.stringify(car)} >
              model-{car.model}
              price-{car.price}
              year-{car.year}
          </option>
        ))}
      </select>
        <Update car={car}/>
      </form>

    </div>
  );
};

export default UpdateForm;