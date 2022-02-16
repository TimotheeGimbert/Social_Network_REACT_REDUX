import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/user/userActions';
import { loginMiddleware } from '../redux/user/userMiddleware';
import Cookies from 'js-cookie';


const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    return (dispatch) => {
      loginMiddleware()
      .then( (token) => {
        Cookies.set('token', token, { expires: 7 }, { secure: true }, { sameSite: 'strict' });
        dispatch(login(token));
      });
    }
  };

  return (
    <>
      <div>Login</div>
      <button onClick={ () => dispatch(handleLogin()) }>Login</button>
    </>
  )
}

export default Login;