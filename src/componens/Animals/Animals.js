import React from 'react';
import {useForm} from "react-hook-form";

const Animals = ({setAnimal, animal, animals, dispatch, addAnimal, deleteAnimal, create}) => {
  const {register, setValue, handleSubmit} = useForm()
  const onSubmit = async (data) => {
    dispatch({type: addAnimal, payload: animal})
    setValue('field', null)
    if (data.field === null || data.field === '') {
      setAnimal('')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('field')}
             onChange={(e) => setAnimal({id: Math.random() * 1000, body: e.target.value})}/>
      <button disabled={!animal}>Create {create}
      </button>
      <div>
        {
          animals.map((item, index) => (
            <div style={{display: 'flex', justifyContent: 'center'}} key={index}>
              <p>{item.body}</p>
              <button onClick={() => dispatch({type: deleteAnimal, payload: item})}>Delete</button>
            </div>
          ))
        }
      </div>
    </form>
  );
};

export default Animals;