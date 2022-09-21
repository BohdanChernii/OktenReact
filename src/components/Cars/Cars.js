import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import {Button, Container, FormGroup, Stack, TextField, Typography} from "@mui/material";
import {getCars, deleteUser, postUser, updateUser} from "../../services/cars.services";

import './Cars.scss'

const schema = yup.object().shape({
  model: yup.string().required(),
  year: yup.number().required(),
  price: yup.number().required(),
});

const Cars = () => {
  const [cars, setCars] = useState([])
  const [carId, setCardId] = useState(null)
  const [update, setUpdate] = useState(false)
  const {register, handleSubmit,formState:{errors}, setValue} = useForm({resolver: yupResolver(schema)})

  useEffect(() => {
    getCars().then(res => setCars(res.data))
  }, [])

  const onSubmit = (data) => {
    postUser(data).then(() => getCars()).then(res => setCars(res.data))
  }

  const onUpdate = (data) => {
    setValue('model', data.model)
    setValue('price', data.price)
    setValue('year', data.year)
    updateUser(carId, data).then(() => getCars()).then(res => setCars(res.data))
  }

  const updateCar = (item) => {
    setValue("model", item.model,)
    setValue("year", item.year,)
    setValue("price", item.price,)
    console.log(item);
  }


  return (
    <Container sx={{
      width: '1000px',
      margin: '0 auto',
    }}>
      <h1>Cars</h1>
      <Container>
        <FormGroup sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 'auto',
          width: '100%',
          alignItems: 'center',
          padding: '0',
        }}>
          <form onSubmit={handleSubmit(data => update ? onUpdate(data) : onSubmit(data))} className="form">
            <TextField
              focused
              helperText={errors.model?.message}
              id="demo-helper-text-misaligned"
              label="model"
              {...register('model', )}
            />

            <TextField
              focused
              helperText={errors.price?.message}
              id="demo-helper-text-misaligned-no-helper"
              label="price"
              {...register('price', )}
            />

            <TextField
              focused
              helperText={errors.year?.message}
              id="demo-helper-text-misaligned-no-helper"
              label="year"
              {...register('year', )}

            />
            <Button
              variant="contained"
              color='primary'
              type='submit'
              sx={{
                width: '200px',
                height: '50px'
              }}
            >
              {update ? 'Update' : 'Send'}
            </Button>
          </form>
        </FormGroup>
      </Container>
      <Stack sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 'auto',
      }}>
        {cars.map(item => (
          <Container key={item.id} className='car' sx={{
            border: '1px solid black',
            width: '30%',
            height: '300px',
            margin: '1%',
            display: 'flex',
            flexDirection: 'column',
            gap: '6%',
            paddingTop: '5%',
            flexGrow: '1',
          }}>
            <Typography>
              Car model: {item.model}
            </Typography>
            <Typography>
              Car price: {item.price}
            </Typography>
            <Typography>
              Car year: {item.year}
            </Typography>

            <Button
              variant="contained"
              color='primary'
              onClick={() => {
                updateCar(item)
                setCardId(item.id)
                setUpdate(true)
              }
              }
            >
              Update
            </Button>
            <Button
              sx={{
                color: 'red'
              }}
              onClick={() => {
                deleteUser(item.id).then(() => getCars().then(res => setCars(res.data)))
              }}>
              Delete
            </Button>
          </Container>
        ))}
      </Stack>
    </Container>
  );
};

export default Cars;