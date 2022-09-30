import React, {useReducer, useState} from 'react';

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'AddCat':
      return {...state, cats: state.cats.concat([action.payload])}
    case 'AddDog':
      return {...state, dogs: state.dogs.concat([action.payload])}
    case 'DeleteCat':
      return {...state, cats: state.cats.filter(item => item.id !== action.payload.id)}
    case 'DeleteDog':
      return {...state, dogs: state.dogs.filter(item => item.id !== action.payload.id)}
  }
}
const Main = () => {
  const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []})
  const [cat, setCat] = useState({id: null, body: ''})
  const [dog, setDog] = useState({id: null, body: ''})
  return (
    <>
      <header>
        <h1>ZOO</h1>
      </header>
      <div>
        <input type="text" onChange={(e) => setCat({id: Math.random() * 1000, body: e.target.value})}/>
        <button onClick={(e) => {
          e.preventDefault()
          dispatch({type: 'AddCat', payload: cat})
        }}>create cat
        </button>
        <div>
          {
            state.cats.map((item, index) => (
              <div style={{display: 'flex', justifyContent: 'center'}} key={index}>
                <p>{item.body}</p>
                <button onClick={() => dispatch({type: 'DeleteCat', payload: item})}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <input type="text" onChange={(e) => setDog({id: Math.random() * 1000, body: e.target.value})}/>
        <button onClick={(e) => {
          e.preventDefault()
          dispatch({type: 'AddDog', payload: dog})
        }}>create dog
        </button>
        <div>
          {
            state.dogs.map((item, index) => (
              <div style={{display: 'flex', justifyContent: 'center'}} key={index}>
                <p>{item.body}</p>
                <button onClick={() => dispatch({type: 'DeleteDog', payload: item})}>Delete</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Main;