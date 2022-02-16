import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/user/userActions';


export default function Register() {
  const dispatch = useDispatch();
  
  const userAuthInput = { // TEMPORARY
    username: 'user1',
    email: 'user1@user.com',
    password: 'aZerty1234',
  };

  const handleRegister = (userAuthInput) => {
    return (dispatch) => {
      const url = 'http://localhost:1337/auth/local/register';
      const method = 'post';
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userAuthInput)
      })
      .then((response) => response.json() )
      .then((response) => {
        const token = response.jwt;
        dispatch(register(token));
      });
    }
  };

  return (
    <>
      <div>Register</div>
      <button onClick={() => dispatch(handleRegister(userAuthInput))}>Register</button>
    </>
  )
}
