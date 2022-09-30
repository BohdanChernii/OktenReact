import React, {useReducer} from 'react';

import {MyContext} from '../index'

const reducer = (state = 0, action) => {
  state = {...state, callCount: state.callCount + 1}
  switch (action.type) {
    case 'inc':
      return {...state, count: state.count + 1}
    case 'dec':
      return {...state, count: state.count - 1}
    case 'reset':
      return {...state, count: state.count = 0, callCount: state.callCount = 0}
    default:
      return state
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, callCount: 0})
  return (
    <div>
      <MyContext.Consumer>
        {(val) => {
          return <h1>{val}</h1>
        }}
      </MyContext.Consumer>
      <div>{state.callCount}</div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({type: 'inc'})}>+</button>
      <button onClick={() => dispatch({type: 'dec'})}>-</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </div>
  );
};

export default User;