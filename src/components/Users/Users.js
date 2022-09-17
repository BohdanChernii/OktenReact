import React,{useState,useEffect} from 'react';
import User from "./User";
import * as service from "../../gateway";
import './Users.css'
const Users = () => {
  const [users,setUsers]=useState([])
  const getInfo = (user) =>{
    console.log(user);
  }
  useEffect(()=>{
service.getUsers().then(res=>res.json()).then(res=>setUsers(res))
  },[])

  return (
    <div className='users'>
      {users.map(item=>(
        <User key ={item.id} id={item.id} name={item.name} getInfo={getInfo} item={item}></User>
      ))}
    </div>
  );
};

export default Users;