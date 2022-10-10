import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../services";

const initialState = {
  users: [],
  user: null,
  decidedUser:null,
  error: null,
  loading: false
}

const getAll = createAsyncThunk(
  'userSlice/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await usersService.getAll()
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
)

const getById = createAsyncThunk(
  'userSlice/getById',
  async ({id}, {rejectedWithValue}) => {
    try {
      const {data} = await usersService.getById(id)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    // getAll: (state, action) => {
    //   state.users = action.payload
    // },
    getUser: (state, action) => {
      state.decidedUser = action.payload
    }
  },
  // extraReducers: {
  //   [getAll.fulfilled]: (state, action) => {
  //     state.users = action.payload
  //   },
  //   [getById.fulfilled]: (state, action) => {
  //     state.user = action.payload
  //   }
  // }
  extraReducers: builder =>
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.users = action.payload
      state.loading = false
    })
      .addCase(getAll.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getAll.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.user = action.payload
      })
})

const {reducer: userReducer, actions: {getUser}} = userSlice

const userActions = {
  getAll,
  getById,
  getUser
}

export {userReducer, userActions}