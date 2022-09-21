import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/comments',
  headers: {'Content-Type': 'application/json'}
})

const getComments = () => axiosInstance()

const postComment = (data) => axiosInstance.post('http://jsonplaceholder.typicode.com/comments',data)

export {getComments,postComment}