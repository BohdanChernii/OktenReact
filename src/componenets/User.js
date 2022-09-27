import React, {useReducer} from 'react';

import {MyContext} from '../index'

const reducer = (state = 0, action) => {
  state = {...state, callCount: state.callCount + 1}
  switch (action.type) {
    case'inc':
      return {...state, value: state.value + 1}
    case 'dec':
      return {...state, value: state.value - 1}
    case 'reset':
      return {...state, value: action.payload,callCount: state.callCount = 0}
    default:
      return state
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0,callCount: 0})
  return (
    <div>
      <MyContext.Consumer>
        {(val) => {
          return <h1>{val}</h1>
        }}
      </MyContext.Consumer>
      <div>{state.callCount}</div>
      <div>{state.value}</div>
      <button onClick={() => dispatch({type: 'inc'})}>+</button>
      <button onClick={() => dispatch({type: 'dec'})}>-</button>
      <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>
    </div>
  );
};

export default User;