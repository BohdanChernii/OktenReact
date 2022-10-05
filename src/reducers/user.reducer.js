import {ADD_USERS, CHOOSE_USER} from "../actions/user.actions";

const userReducer = (state = {user: null, users: []}, action) => {
  switch (action.type) {
    case CHOOSE_USER:
      return {...state, user: state.users.find(item => item.id === action.payload)}
    case ADD_USERS:
      return {...state, users:action.payload}
    default:
      return state
  }
}
export {userReducer}