import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { login } from '../redux/user/userActions';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [inputs, setInputs] = useState( { email: '', password: '' } );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const url = 'http://localhost:1337/auth/local';
    const data = {
      identifier: inputs.email,
      password: inputs.password
    }
    console.log(data);
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( (response) => response.json() )
    .then( (response) => {
      dispatch(login(response));
      Cookies.set('token', response.jwt , { expires: 1 }, { secure: true }, { sameSite: 'strict' }); 
      navigate('/profile');
    })
  }

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLogin}>
        <label>Enter your email :
          <input 
            type='text' 
            name='email'
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
        <label>Enter your password :
          <input 
          type='password' 
          name='password'
          onChange={handleChange}
          value={inputs.password} 
        />
        </label>
        <button type='submit'>Log In</button>
      </form>
    </>
  )
}

export default Login;