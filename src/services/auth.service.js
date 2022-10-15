import {axiosService} from "./axios.service";
import {urls} from "../configs";

const _access = 'access'
const _refresh = 'refresh'

export const authService = {
  register: (user) => axiosService.post(urls.users, user),
  login: (user) => axiosService.post(urls.auth.login, user),
  refresh: (refresh) => axiosService.post(urls.auth.refresh, {refresh}),

  setTokens: ({access, refresh}) => {
    localStorage.setItem(_access, access)
    localStorage.setItem(_refresh, refresh)
  },

  getAccessToken: () => localStorage.getItem(_access),
  getRefreshToken: () => localStorage.getItem(_refresh),

  deleteTokens: () => {
    localStorage.removeItem(_access)
    localStorage.removeItem(_refresh)
  }

}