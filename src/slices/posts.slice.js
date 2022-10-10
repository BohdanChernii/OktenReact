import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services";

const initialState = {
  posts: [],
  post: null,
  error: null,
  loading: false
}


const getAll = createAsyncThunk(
  'postSlice/getAll',
  async (_, {rejectedWithValue}) => {
    try {
      const {data} = await postsService.getAll()
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const getById = createAsyncThunk(
  'postSlice/getById',
  async ({id}, {rejectedWithValue}) => {
    try {
      const {data} = await postsService.getById(id)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    // getAll: (state, action) => {
    //   state.posts = action.payload
    // }
  },
  // extraReducers: {
  //   [getAll.fulfilled]: (state, action) => {
  //     state.posts = action.payload
  //   },
  //   [getById.fulfilled]: (state, action) => {
  //     state.post = action.payload
  //   }
  // }
  extraReducers: builder =>
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.posts = action.payload
      state.loading = false
    })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload
        state.loading = false
      })
      .addCase(getAll.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAll.rejected, (state, action) => {
        state.error = action.payload
      })
})
const {reducer: postReducer, actions: {}} = postSlice

const postActions = {
  getAll,
  getById
}

export {postActions, postSlice, postReducer}