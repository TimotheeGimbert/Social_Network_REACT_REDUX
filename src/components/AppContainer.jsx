import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cookies from "js-cookie"
import { connect } from '../redux/user/userActions'

export default function AppContainer() {
  const token = useSelector(state => state.token);
  const id = useSelector(state => state.id);
  const name = useSelector(state => state.username);
  const email = useSelector(state => state.email);
  const dispatch = useDispatch();

  console.log('token: ', token, '\nid: ', id, '\nname: ', name, '\nemail: ', email);







  return (
    <div className='app-container'>

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
