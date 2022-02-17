import React, { useState } from 'react';
import useFetch from '../customHooks/useFetch';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register, login } from '../redux/user/actions';

const Register = () => {
  const [userInputs, setUserInputs] = useState( { email: '', username: '', password: '' } );
  const { doFetch } = useFetch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInputs(values => ( {...values, [name]: value} ))
  }

  const doRegister = async () => {
    const ressource = 'auth/local/register';
    const method = 'post';
    const postData = {
      email: userInputs.email,
      username: userInputs.username,
      password: userInputs.password
    }
    const response = await doFetch(ressource, method, postData);
    dispatch(register(response.jwt))
  }

  const doLogin = async () => {
    const ressource = 'auth/local';
    const method = 'post';
    const postData = {
      identifier: userInputs.email,
      password: userInputs.password
    }
    const response = await doFetch(ressource, method, postData);
    dispatch(login(response.user));
    Cookies.set('token', response.jwt , { expires: 1 }, { secure: true }, { sameSite: 'strict' });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await doRegister();
    await doLogin();
    navigate('/profile');
  }

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label>Enter your email :
          <input 
            type='text' 
            name='email'
            onChange={handleChange}
            value={userInputs.email}
          />
        </label>
        <label>Choose a username :
          <input 
            type='text' 
            name='username'
            onChange={handleChange}
            value={userInputs.username}
          />
        </label>
        <label>Choose a password :
          <input 
          type='password' 
          name='password'
          onChange={handleChange}
          value={userInputs.password} 
        />
        </label>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register;