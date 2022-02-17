import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { login } from '../redux/user/userActions';


const Login = () => {
  const [inputs, setInputs] = useState( { identifier: '', password: '' } );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const data = inputs;
    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then( (response) => response.json() )
    .then( (json) => json.jwt )
    .then( (token) => {
      Cookies.set('token', token, { expires: 1 }, { secure: true }, { sameSite: 'strict' });
      dispatch(login(token));
    });
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={handleLogin}>
        <label>Enter your email :
          <input 
            type='text' 
            name='identifier'
            onChange={handleChange}
            value={inputs.identifier}
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