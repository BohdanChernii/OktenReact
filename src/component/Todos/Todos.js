import React, {useEffect, useState} from 'react';

import {getTodos} from "../../services/services";

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    getTodos().then(res=>setTodos(res.data))
  },[])

  return (
    <div>
      {todos.map(item=>(
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default Todos;