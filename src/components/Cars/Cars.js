import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {Container, Stack} from "@mui/material";

import Car from "../Car/Car";
import Form from "../Form/Form";

import {getCars, postUser, updateUser} from "../../services/cars.services";

import {yupResolver} from "@hookform/resolvers/yup";
import schema from "../../validation/validate";

import './Cars.scss'

const Cars = () => {
  const [cars, setCars] = useState([])
  const [carId, setCardId] = useState(null)
  const [update, setUpdate] = useState(false)

  const {register, handleSubmit, formState: {errors}, setValue, reset} = useForm({resolver: yupResolver(schema)})

  useEffect(() => {
    getCars().then(res => setCars(res.data))
  }, [])

  const onSubmit = (data) => {
    postUser(data).then(() => getCars()).then(res => setCars(res.data))
    reset()
  }

  const onUpdate = (data) => {
    setValue('model', data.model)
    setValue('price', data.price)
    setValue('year', data.year)
    updateUser(carId, data).then(() => getCars()).then(res => setCars(res.data))
    reset()
  }

  const updateCar = (item) => {
    setValue("model", item.model,)
    setValue("year", item.year,)
    setValue("price", item.price,)
  }


  return (
    <Container sx={{
      width: '1000px',
      margin: '0 auto',
    }}>
      <h1>Cars</h1>
      <Form errors={errors}
            handleSubmit={handleSubmit}
            update={update}
            onUpdate={onUpdate}
            onSubmit={onSubmit}
            register={register}
      />
      <Stack sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
      }}>
        {cars.map(item => (
          <Car item={item}
               setCars={setCars}
               setCardId={setCardId}
               setUpdate={setUpdate}
               updateCar={updateCar}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Cars;