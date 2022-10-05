import {ADD_COMMENTS, CHOOSE_COMMENT} from "../actions/coment.actions";

const commentReducer = (state={comment:null,comments:[]},action)=>{
  switch (action.type){
    case ADD_COMMENTS:
      return {...state,comments: action.payload}
    case CHOOSE_COMMENT:
      return {...state,comment: state.comment.find(comment=>comment.id===action.payload)}
    default:
      return state
  }
}
export {commentReducer}