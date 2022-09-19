import React, {useEffect, useState} from 'react';
import {getUsers,getPosts} from "../../services/gateway";
import User from "./User/User";
import './Users.scss'

const Users = () => {
  const [users, setUsers] = useState([])
  const [desided, setDesided] = useState()
  const [posts,setPosts] = useState([])

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])
  const lift = (item) => {
    setDesided(item)
   setPosts([])
  }
const showPosts = () =>{
  getPosts(desided.id).then(res=>setPosts(res.data))
  console.log(posts);
}
  return (
    <main className="main">
      <div className='users'>
        {users.map(item => (
          <User key={item.id} item={item} lift={lift}/>
        ))}
      </div>
      <div className="info">
        {JSON.stringify(desided)}
        {desided && <button className="button" onClick={()=>showPosts()}>Get posts</button>}

      </div>
      <div className="posts">
        {posts.map(item=>(
          <p>{item.title}</p>
        ))}
      </div>
    </main>
  );
};

export default Users;