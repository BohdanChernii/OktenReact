import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://owu.linkpc.net/api/v2',
  headers: {'Content-Type': 'application/json'}
})

const getCars = () => axiosInstance('/cars')
const updateCar = (id, data) => axiosInstance.put(`/cars/${id}`, data)
const postCar = (data) => axiosInstance.post('/cars', data)
const deleteCar = (id) => axiosInstance.delete(`/cars/${id}`)

export {getCars,updateCar,postCar,deleteCar}