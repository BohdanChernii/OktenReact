import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services/auth.service";
import {useNavigate} from "react-router";

const Login = () => {
  const [error, setError] = useState(null)
  const {register, handleSubmit,reset} = useForm()
  const navigate = useNavigate()

  const submit = async (user) => {
    try {
      const {data} = await authService.login(user)
      authService.setTokens(data)
      navigate('/cars')
    } catch (e) {
      setError(e.response?.data)
    }
  }
  return (
    <div>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'username'} {...register('username')}/>
        <input type="text" placeholder={'password'} {...register('password')}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;