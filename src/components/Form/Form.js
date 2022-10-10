import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slice/cars.slice";

const Form = () => {

  const {selectCar} = useSelector(state => state.carsReducer)
  const {register, handleSubmit, setValue,reset} = useForm({defaultValues: {model: '', price: '', year: ''}})
const dispatch= useDispatch()
  useEffect(() => {
    setValue('madel', selectCar?.model)
    setValue('price', selectCar?.price)
    setValue('year', selectCar?.year)
  }, [selectCar])


  const onSubmit = (data) => {
    selectCar?dispatch(carsActions.updateCar(selectCar))
      :dispatch(carsActions.setCar(data))
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder={'model'} {...register('model')}/>
      <input type="text" placeholder={'price'} {...register('price')}/>
      <input type="text" placeholder={'year'} {...register('year')}/>
      <button>Save</button>
    </form>
  );
};

export {Form}