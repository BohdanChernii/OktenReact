import React, {useReducer, useState} from 'react';
import Animals from "../Animals/Animals";

let index

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'AddCat':
      return {...state, cats: state.cats.concat([action.payload])}
    case 'AddDog':
      return {...state, dogs: state.dogs.concat([action.payload])}
    case 'DeleteCat':
      index = state.cats.findIndex(item=>item.id === action.payload.id)
      if (index !== -1){
        state.cats.splice(index, 1)
    }
      return {...state, cats: state.cats}
    case 'DeleteDog':
      index = state.dogs.findIndex(item=>item.id === action.payload.id)
      if (index !== -1){
        state.dogs.splice(index, 1)
      }
      return {...state, dogs: state.dogs}
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
      <Animals
        setAnimal={setCat}
        animal={cat}
        animals={state.cats}
        dispatch={dispatch}
        addAnimal={'AddCat'}
        deleteAnimal={'DeleteCat'}
        create={'Cat'}
      />
      <Animals
        setAnimal={setDog}
        animal={dog}
        animals={state.dogs}
        dispatch={dispatch}
        addAnimal={'AddDog'}
        deleteAnimal={'DeleteDog'}
        create={'Dog'}
      />

    </>
  );
};

export default Main;