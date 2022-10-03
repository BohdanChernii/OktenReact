import React, {useEffect, useState} from 'react';
import CarForm from "../../components/CarForm/CarForm";
import Cars from "../../components/Cars/Cars";
import {carService} from "../../services";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {
  const [cars, setCars] = useState([])
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)

  const [query, setQuery] = useSearchParams({page: '1'})

  useEffect(() => {
    carService.getAll(query.get('page')).then(({data: res}) => {
      setCars(res.data)
      setPrev(res.prev)
      setNext(res.next)
    })
  }, [query])

  const prevPage = () => {
    setQuery(value => ({page: +value.get('page') - 1}))
  }

  const nextPage = () => {
    setQuery(value => ({page: +value.get('page') + 1}))
  }

  return (
    <div>
      <CarForm/>
      <hr/>
      <Cars cars={cars} setCars={setCars}/>
      <button onClick={prevPage} disabled={!prev}>
        Previous Page
      </button>
      <button onClick={nextPage} disabled={!next}>Next Page</button>
    </div>
  );
};

export default CarsPage;