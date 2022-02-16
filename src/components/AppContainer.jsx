import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from "js-cookie"
import { register, connect, disconnect } from '../redux/user/userActions'


export default function AppContainer() {
  const username = useSelector(state => state.username);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

////////
  const user1 = {
    username: 'user1',
    email: 'user1@user.com',
    password: 'aZerty1234',
  };
////////

  const handleRegister = (user) => {
    return (dispatch) => {
      const url = 'http://localhost:1337/auth/local/register';
      const method = 'post';
      const userData = {
        username: user.username,
        email: user.email,
        password: user.password
      };
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((response) => response.json() )
      .then((response) => {
        const token = response.jwt;
        userData.token = token;
        dispatch(register(userData));
        console.log('>>> USER HAS REGISTERED WITH SUCCESS');
      });
    }
  };

  const handleConnect = (user) => {
    return (dispatch) => {
      const url = 'http://localhost:1337/auth/local';
      const method = 'post';
      const userData = {
        identifier: user.username || user.email,
        password: user.password
      };
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then((response) => response.json() )
      .then((response) => {
        const token = response.jwt;
        Cookies.set('token', token, { expires: 7 }, { secure: true }, { sameSite: 'strict' });
        userData.token = token;
        dispatch(connect(userData));
        console.log('>>> USER HAS CONNECTED WITH SUCCESS');
      });
    }
  };

  const handleDisconnect = () => {
    return (dispath) => {
      Cookies.remove('token');
      console.log('>>> USER HAS DISCONNECTED WITH SUCCESS');
      dispatch(disconnect());
    }
  }

  return (
    <div>
      <button onClick={() => dispatch(handleRegister(user1))}>Register</button>
      <button onClick={() => dispatch(handleConnect(user1))}>Connect</button>
      <button onClick={() => dispatch(handleDisconnect())}>Disconnect</button>

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
