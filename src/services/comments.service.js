import {axiosService} from "./axios.services";
import {urls} from "../configs";

const commentsServices = {
  getAll: () => axiosService.get(urls.comments),
  getById: (id) => axiosService.get(`${urls.comments}/${id}`)
}

export {commentsServices}