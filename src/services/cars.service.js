import {axiosService} from "./axios.service";

const carsService = {
  getAll:()=>axiosService.get(),
  update:(id)=>axiosService.put(`${id}`),
  set:(data)=>axiosService.post(data),
  delete:(id)=>axiosService.delete(id),
}
export {carsService}