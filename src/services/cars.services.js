import axios from "axios";

const BaseUrl = 'http://owu.linkpc.net/api/v2'
const axiosInstance = axios.create({
  baseURL: BaseUrl,
  headers: {'Content-Type': 'application/json'}
})
const getCars = () => axiosInstance.get('/cars')
const updateUser = (id, data) => axiosInstance.put(`/cars/${id}`, data)
const postUser = (data) => axiosInstance.post('/cars',data)
const deleteUser = (id) => axiosInstance.delete(`/cars/${id}`).then(res=> console.log(res))

export {getCars,updateUser,deleteUser,postUser}