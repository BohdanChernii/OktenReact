import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services/auth.service";
import {useNavigate} from "react-router";

const Register = () => {
  const {register, handleSubmit, reset} = useForm()
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const submit = async (user) => {
    try {
      await authService.register(user)
      navigate('/login')
      reset()
    } catch (e) {
      setError(e.response?.username)
    }
  }

  return (
    <div>
      {error && <h4>error</h4>}
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register('username')}/>
        <input type="text" {...register('password')}/>
        <button>Reg</button>
      </form>
    </div>
  );
};

export default Register;