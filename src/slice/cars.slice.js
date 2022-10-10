import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../services/cars.service";

const initialState = {
  cars: [],
  car: null,
  error: null,
  loading: false,
  selectCar: null,
}

const getCars = createAsyncThunk(
  'carsSlice/getCars',
  async (_, {rejectedWithValue}) => {
    try {
      const {data} = await carsService.getAll()
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const setCar = createAsyncThunk(
  'carsSlice/setCar',
  async (car, {rejectedWithValue}) => {
    try {
      const {data} = await carsService.set(car)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const updateCar = createAsyncThunk(
  'carsSlice/updateCar',
  async ({id}, {rejectedWithValue}) => {
    try {
      const {data} = await carsService.update(id)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const deleteCar = createAsyncThunk(
  'carsSlice/deleteCar',
  async ({id}, {rejectedWithValue}) => {
    try {
      const {data} = await carsService.delete(id)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const carsSlice = createSlice({
  initialState,
  name: 'carsSlice',
  reducers: {
    selectCar: (state, action) => {
      state.selectCar = action.payload
    }
  },
  extraReducers: builder =>
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload
    })
      .addCase(setCar.fulfilled, (state, action) => {
        state.car = action.payload
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.car = action.payload
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.car = action.payload
      })
})

const {reducer: carsReducer, actions: {selectCar}} = carsSlice

const carsActions = {
  setCar,
  getCars,
  deleteCar,
  selectCar,
  updateCar,
}
export {carsReducer, carsSlice, carsActions}