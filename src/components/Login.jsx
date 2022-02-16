import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/userActions';
import Cookies from 'js-cookie';

export default function Login() {
  const dispatch = useDispatch();

  const userAuthInput = { // TEMPORARY
    username: 'user1',
    email: 'user1@user.com',
    password: 'aZerty1234',
  };

  const handleLogin = (userAuthInput) => {
    return (dispatch) => {
      const url = 'http://localhost:1337/auth/local';
      const method = 'post';
      const authInput = {
        identifier: userAuthInput.email,
        password: userAuthInput.password
      };
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(authInput)
      })
      .then((response) => response.json() )
      .then((response) => {
        const token = response.jwt;
        Cookies.set('token', token, { expires: 7 }, { secure: true }, { sameSite: 'strict' });
        dispatch(login(token));
      });
    }
  };

  return (
    <>
      <div>Login</div>
      <button onClick={() => dispatch(handleLogin(userAuthInput))}>Connect</button>
    </>
  )
}
