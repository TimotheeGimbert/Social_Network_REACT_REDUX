import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { register } from '../redux/user/userActions';


const Register = () => {
  const [inputs, setInputs] = useState( { email: '', username: '', password: '' } );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ( {...values, [name]: value} ))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = inputs;
    fetch('http://localhost:1337/auth/local/register', {
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
      dispatch(register(token));
    });
  };

  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
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