import {axiosService} from "./axios.services";
import {urls} from "../configs";

const postsService = {
  getAll: () => axiosService(urls.posts),
  getById: (id) => axiosService(`${urls.posts}/${id}`)
}
export {postsService}