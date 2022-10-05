import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const usersServices = {
  getAll: () => axiosService.get(urls.users),
  getById: (id) => axiosService.get(`${urls.users}/${id}`)
}
export {usersServices}