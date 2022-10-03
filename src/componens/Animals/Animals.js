import React from 'react';
import {useForm} from "react-hook-form";

const Animals = ({setAnimal, animal, animals, dispatch, addAnimal, deleteAnimal, create}) => {
  const {register, setValue, handleSubmit, reset} = useForm({defaultValues: {field: ''}})
  const onSubmit = async (data) => {
    if( data.field !== ''){
      await dispatch({type: addAnimal, payload: animal})
      await setAnimal({id: Math.random() * 1000, body: data.field})
      await setValue('field', null)
    }
    reset()

  }

  const onDelete = (item) => {
    dispatch({type: deleteAnimal, payload: item})
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
            (<div style={{display: 'flex', justifyContent: 'center'}} key={index}>
              <p>{item.body}</p>
              <button onClick={() => onDelete(item)}>Delete</button>
            </div>)
          ))
        }
      </div>
    </form>
  );
};

export default Animals;