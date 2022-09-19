import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {'Content-Type': 'application/json'}
},)
const getUsers = () => axiosInstance.get('/users')
const getPosts = (id)=>axiosInstance.get(`/users/${id}/posts`)

export {getUsers,getPosts}