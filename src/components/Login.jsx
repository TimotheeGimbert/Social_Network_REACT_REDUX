import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/userActions';
import { loginMiddleware } from '../redux/user/userMiddleware';
import Cookies from 'js-cookie';


const Login = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState( { email: '', password: '' } );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const handleLogin = (event) => {
    event.preventDefault();
    loginMiddleware(inputs)
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
        <input type='submit' />
      </form>
    </>
  )
}

export default Login;