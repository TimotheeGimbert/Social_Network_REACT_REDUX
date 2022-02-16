import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from "js-cookie"
import { register, connect, disconnect } from '../redux/user/userActions'

export default function AppContainer() {
  const token = useSelector(state => state.token);
  const id = useSelector(state => state.id);
  const name = useSelector(state => state.username);
  const email = useSelector(state => state.email);
  const dispatch = useDispatch();

  console.log('token: ', token, '\nid: ', id, '\nname: ', name, '\nemail: ', email);

  const getLocalToken = () => {
    return Cookies.get().token;
  }

  const checkAuth = () => {
    return getLocalToken() !== undefined ? true : false;
  }

  const userAuthInput = {
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

  const handleConnect = (userAuthInput) => {
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
        dispatch(connect(token));
      });
    }
  };

  const handleDisconnect = () => {
    return (dispath) => {
      Cookies.remove('token');
      dispatch(disconnect());
    }
  }

  return (
    <div className='app-container'>
      <button onClick={() => dispatch(handleRegister(userAuthInput))}>Register</button>
      <button onClick={() => dispatch(handleConnect(userAuthInput))}>Connect</button>
      <button onClick={() => dispatch(handleDisconnect())}>Disconnect</button>

      <button onClick={() => console.log(checkAuth())}>Check Authentification</button>
      <button onClick={() => console.log(Cookies.get())}>Show cookies</button>
    </div>
  )
}











// const handleConnect = async (user) => {
//   const url = 'http://localhost:1337/auth/local';
//   const data = {
//     identifier: user.email,
//     password: user.password
//   }
//   try {
//     const response = await fetch(url, {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     const results = await response.json();
//     if (user.token === results.jwt)
//     Cookies.set('token', user.token, { expires: 7 }, { secure: true }, { sameSite: 'strict' });
//     console.log('>>> USER HAS CONNECTED WITH SUCCESS');
//     console.log(`${user.username} is now connected with the token: `, user.token);
//   } catch (error) {
//     console.error('Response error: ', error.message);
//   }
// }

// const handleDisconnect = () => {
//   Cookies.remove('token');
//   console.log('>>> USER HAS DISCONNECTED WITH SUCCESS');
//   console.log('Remaining cookies are: ', Cookies.get());
// };
