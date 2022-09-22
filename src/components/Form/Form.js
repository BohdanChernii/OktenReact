import React from 'react';
import {Button, Container, FormGroup, TextField} from "@mui/material";


const Form = ({errors,handleSubmit,update, onUpdate, onSubmit,register}) => {
  return (
    <Container>
      <FormGroup sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '100%',
        alignItems: 'center',
        padding: '0',
      }}>
        <form onSubmit={handleSubmit(data => update ? onUpdate(data) : onSubmit(data))} className="form">
          <TextField
            focused
            helperText={errors.model?.message}
            id="demo-helper-text-misaligned"
            label="model"
            {...register('model')}
          />

          <TextField
            focused
            helperText={errors.price?.message}
            id="demo-helper-text-misaligned-no-helper"
            label="price"
            {...register('price')}
          />

          <TextField
            focused
            helperText={errors.year?.message}
            id="demo-helper-text-misaligned-no-helper"
            label="year"
            {...register('year')}

          />
          <Button
            variant="contained"
            color='primary'
            type='submit'
            sx={{
              width: '200px',
              height: '50px'
            }}
          >
            {update ? 'Update' : 'Send'}
          </Button>
        </form>
      </FormGroup>
    </Container>
  );
};

export default Form;