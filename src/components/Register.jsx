import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register , login} from '../redux/user/userActions';


const Register = () => {
  const [inputs, setInputs] = useState( { email: '', username: '', password: ''} );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const handleLogin = () => {
    const url = 'http://localhost:1337/auth/local';
    const data = {
      identifier: inputs.email,
      password: inputs.password
    }
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

  const handleRegister = (event) => {
    event.preventDefault();
    const url = 'http://localhost:1337/auth/local/register';
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then( (response) => response.json() )
    .then( (json) => json.jwt )
    .then( (token) => {
      dispatch(register(token));
      handleLogin();
    })
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleRegister}>
        <label>Enter your email :
          <input 
            type='text' 
            name='email'
            onChange={handleChange}
            value={inputs.email}
          />
        </label>
        <label>Choose a username :
          <input 
            type='text' 
            name='username'
            onChange={handleChange}
            value={inputs.username}
          />
        </label>
        <label>Choose a password :
          <input 
          type='password' 
          name='password'
          onChange={handleChange}
          value={inputs.password} 
        />
        </label>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register;