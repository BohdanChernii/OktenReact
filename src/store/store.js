import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commentsReducer, userReducer} from "../slices";
import {postReducer} from "../slices/posts.slice";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  commentsReducer
})

const setupStore = () => configureStore({
  reducer: rootReducer
})
export {
  setupStore
}