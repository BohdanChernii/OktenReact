import React, {useState, useEffect} from 'react';
import {getLaunches} from "../../service/gateway";
import Launch from "./Launch/Launch";
import './Launches.css'

const Launches = () => {
  const [launches,setLaunches] =useState([])
  useEffect(()=>{
    getLaunches().then(res=> setLaunches(res.data))
  },[])
  console.log(launches);
  return (
    <div className='launches'>
      {launches.filter(item=> item.launch_year !== '2020').map(item=>(<Launch name={item.mission_name} year={item.launch_year} image={item.links.mission_patch} ></Launch>))}
    </div>
  );
};

export default Launches;