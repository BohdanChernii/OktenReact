import {combineReducers, createStore} from "redux";
import {userReducer} from "../reducers/user.reducer";
import {postReducer} from "../reducers/post.reducer";
import {commentReducer} from "../reducers/comment.reducer";

const reducer = combineReducers({userReducer, postReducer, commentReducer})
const store = createStore(reducer)


export {store}