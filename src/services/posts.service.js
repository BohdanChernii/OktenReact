import axios from "axios";
import {baseURL} from "../configs/urls";

const axiosPosts = axios.create({baseURL})

const postsService = {
  get: ()=>axiosPosts.get('/posts'),
  getById: (id)=>axiosPosts.get(`/posts/${id}`)
}
export {postsService}