import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/users',
  headers: {'Content-Type': 'application/json'}
})
const getUsers = () => axiosInstance()

const postUser = (data) => axiosInstance.post('http://jsonplaceholder.typicode.com/users',data)

export {getUsers,postUser}