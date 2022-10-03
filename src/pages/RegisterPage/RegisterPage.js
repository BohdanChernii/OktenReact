import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router";

const RegisterPage = () => {
  const {handleSubmit, register} = useForm()
  const [error, setError] = useState(null)
const navigation = useNavigate()

  const submit = async (user) => {
    try {
      await authService.register(user)
      navigation('/login')
    } catch (e) {
      setError(e.response.data?.username);
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      {error && <p>{error}</p>}
      <input type="text" placeholder={'username'} {...register('username')}/>
      <input type="text" placeholder={'password'} {...register('password')}/>
      <button>Register</button>

    </form>
  );
};

export default RegisterPage;