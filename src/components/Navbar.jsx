import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { disconnect } from '../redux/user/userActions';
import Cookies from 'js-cookie';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuth = () => {
    return Cookies.get().token !== undefined ? true : false;
  }

  const handleDisconnect = () => {
    Cookies.remove('token');
    dispatch(disconnect());
    navigate('/login');
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
      <button onClick={() => handleDisconnect() }>Disconnect</button>
    </header>
  )
};

export default Navbar;