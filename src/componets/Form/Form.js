import React from 'react';
import {useForm} from "react-hook-form";
import {getCars, postCar} from "../../services/service";
import {useNavigate} from "react-router";

const Form = () => {
  const {register, handleSubmit, reset} = useForm({defaultValues: {model: '', price: '', year: ''}})
  const navigator = useNavigate()
  const onSubmit = async (data) => {

    await getCars().then(() => postCar(data))
    await reset()
    await navigator('/cars')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder={'model'} {...register('model')}/>
      <input type="text" placeholder={'price'}{...register('price')}/>
      <input type="text" placeholder={'year'} {...register('year')}/>
      <button >Create Car</button>
    </form>
  );
};

export default Form;