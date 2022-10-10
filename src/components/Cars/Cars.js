import React, {useEffect} from 'react';
import {Form} from "../Form/Form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../../slice/cars.slice";
import {Car} from "../Car/Car";

const Cars = () => {
  const dispatch = useDispatch()
  const {cars} = useSelector(state => state.carsReducer)

  useEffect(() => {
    dispatch(carsActions.getCars())
    // fetch('http://owu.linkpc.net/api/v2/cars').then(res=>res.json()).then(res=> console.log(res))
  }, [])
  console.log(cars);
  return (
    <div>
      <Form/>
      <div className="cars">
        {/*{cars.map(car => (*/}
        <Car/>
        {/*))}*/}
      </div>
    </div>
  );
};

export {Cars};