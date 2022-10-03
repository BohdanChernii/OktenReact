import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {urls} from "../../configs";

const CarForm = () => {
  const {handleSubmit, register} = useForm({defaultValues: {model: '', price: '', year: '',}})

  const submit = async (data) => {
    await carService.create(data)
    await window.location.reload()
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder='model' {...register('model')}/>
      <input type="text" placeholder='price'{...register('price')}/>
      <input type="text" placeholder='year' {...register('year')}/>
      <button>Add New Car</button>
    </form>
  );
};

export default CarForm;