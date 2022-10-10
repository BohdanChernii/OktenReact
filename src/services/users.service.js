import {axiosService} from "./axios.services";
import {urls} from "../configs";

const usersService = {
  getAll: () => axiosService.get(urls.users),
  getById: (id) => axiosService(`${urls.users}/${id}`)
}
export {usersService}