import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";


const LoginPage = () => {
  const [error, setError] = useState(null)
  const {handleSubmit, register} = useForm()
  const navigate = useNavigate()
  const [query] = useSearchParams()
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
      {query.has('expSession')&&<h1>Session End</h1>}
      <form onSubmit={handleSubmit(submit)}>
        {error && <p>{error}</p>}
        <input type="text" placeholder={'username'} {...register('username')}/>
        <input type="text" placeholder={'password'} {...register('password')}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;