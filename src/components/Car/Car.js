import React from 'react';

import {Button, Container, Typography} from "@mui/material";
import {deleteUser, getCars} from "../../services/cars.services";


const Car = ({item, updateCar, setCars, setCardId, setUpdate}) => {
  return (
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
  );
};

export default Car;