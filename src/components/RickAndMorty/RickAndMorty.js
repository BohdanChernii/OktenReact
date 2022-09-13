import React, {useState, useEffect} from 'react';
import Person from './Person/Person'

const RickAndMorty = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character').then(res=> res.json()).then(res=> setData(res.results))
  },[])
  return (
    <div>
      {data.map(item=>(
        <Person key={item.id} name={item.name} status={item.status} image={item.image} gender={item.gender} species={item.species}></Person>
      ))}
    </div>
  );
};

export default RickAndMorty;