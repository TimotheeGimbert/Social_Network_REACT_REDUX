import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { login } from '../redux/user/actions';
import { useNavigate } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';


const Login = () => {
  const [userInputs, setUserInputs] = useState( { email: '', password: '' } );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { doFetch } = useFetch();


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInputs(values => ( {...values, [name]: value} ))
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
    await doLogin();
    navigate('/profile');
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter your email :
          <input 
            type='text' 
            name='email'
            onChange={handleChange}
            value={userInputs.email}
          />
        </label>
        <label>Enter your password :
          <input 
          type='password' 
          name='password'
          onChange={handleChange}
          value={userInputs.password} 
        />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default Login;