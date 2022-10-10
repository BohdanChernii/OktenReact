import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsServices} from "../services";

const initialState = {
  comments: [],
  comment: null,
  error: null,
  loading: false
}

const getAll = createAsyncThunk(
  'commentSlice/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await commentsServices.getAll()
      return data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
)

const getById = createAsyncThunk(
  'commentSlice/getById',
  async ({id}, {rejectedWithValue}) => {
    try {
      const {data} = await  commentsServices.getById(id)
      return data
    } catch (e) {
      return rejectedWithValue(e.response.data)
    }
  }
)

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.comments = action.payload
      state.loading = false
    })
      .addCase(getById.rejected, (state, action) => {
        state.comment = action.payload
        state.error = action.payload
      })
      .addCase(getAll.pending, (state, action) => {
        state.loading = true
      })
})

const {reducer: commentsReducer, actions: {}} = commentSlice

const commentActions = {
  getAll,
  getById
}

export {commentSlice, commentsReducer, commentActions}