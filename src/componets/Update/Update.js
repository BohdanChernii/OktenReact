import React from 'react';
import {useForm} from "react-hook-form";

const Update = ({car}) => {
  const {register,handleSubmit}=useForm({defaultValues:{model:car.model,price:car.price,year:car.year}})

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('model')}/>
      <input type="text" {...register('price')}/>
      <input type="text" {...register('year')}/>
      <button>Update</button>
    </form>
  )
};

export default Update;