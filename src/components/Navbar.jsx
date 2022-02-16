import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { disconnect } from '../redux/user/userActions';
import Cookies from 'js-cookie';

const Navbar = () => {
  const dispatch = useDispatch();

  const checkAuth = () => {
    return Cookies.get().token !== undefined ? true : false;
  }

  const handleDisconnect = () => {
    return (dispath) => {
      Cookies.remove('token');
      dispatch(disconnect());
    }
  }

  return (
    <header className='Navbar'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <button onClick={() => console.log(checkAuth())}>Check Authentification</button>
      <button onClick={() => console.log(Cookies.get())}>Show cookies</button>
      <button onClick={ () => dispatch(handleDisconnect()) }>Disconnect</button>
    </header>
  )
};

export default Navbar;