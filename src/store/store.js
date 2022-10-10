import {combineReducers} from "redux";
import {carsReducer} from "../slice/cars.slice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  carsReducer
})


const setupStore = () => configureStore({
  reducer: rootReducer
})
export {
  setupStore
}