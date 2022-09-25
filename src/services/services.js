import axios from "axios";


const baseUrl = 'https://jsonplaceholder.typicode.com'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers:{'Content-Type':'application/json'}
})

const getTodos = () => axiosInstance.get(baseUrl+'/todos')
const getAlbums = () => axiosInstance.get(baseUrl+'/albums')
const getComments = () => axiosInstance.get(baseUrl+'/comments')
const getPosts = (id)=>axiosInstance.get(`${baseUrl}/posts/${id}`)

export {getTodos,getAlbums,getComments,getPosts}