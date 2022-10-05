import {ADD_POSTS, CHOOSE_POST} from "../actions/post.actions";

const postReducer = (state = {post: null, posts: []}, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {...state, posts: action.payload}
    case CHOOSE_POST:
      return {...state, post: state.posts.find(item => item.id === action.payload)}
    default:
      return state
  }
}
export {postReducer}