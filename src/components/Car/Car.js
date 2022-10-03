import React from 'react';
import {carService} from "../../services";

const Car = ({car, setCars}) => {
  const {id, model, price, year, photo} = car

  const sendPhoto = async (e) => {
    const formData = new FormData();
    const [file] = e.target.files;
    formData.append('photo', file)
    const {data} = await carService.addPhotoById(id, formData)

    setCars(cars => {
      const find = cars.find(car => car.id === id)
      Object.assign(find, {...data, photo: URL.createObjectURL(file)})
      return [...cars]
    })
  }

  return (
    <div style={{margin: '10px auto', border: '1px solid black', width: '23%'}}>
      <p>id: {id}</p>
      <p>model: {model}</p>
      <p>price: {price}</p>
      <p>year: {year}</p>
      {
        photo ? <img src={photo} alt={model} style={{width: '50%'}}/> : <input type={'file'} onChange={sendPhoto}/>
      }
    </div>
  );
};

export default Car;