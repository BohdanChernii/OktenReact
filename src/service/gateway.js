import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/',
    headers:{'Content-Type': 'application/json',}
  }
)
const getLaunches = () => {
  return axiosInstance.get()
}

const getUsers = () => {
  return (fetch('https://jsonplaceholder.typicode.com/users'))
}
export {getUsers, getLaunches}