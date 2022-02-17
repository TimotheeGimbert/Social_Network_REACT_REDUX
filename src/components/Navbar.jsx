import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { disconnect } from '../redux/user/userActions';
import Cookies from 'js-cookie';
import { checkAuth } from '../App';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state);

  const handleDisconnect = () => {
    Cookies.remove('token');
    dispatch(disconnect());
    navigate('/login');
  }

  return (
    <header className='Navbar'>
      <nav>
        <Link to="/">Home</Link>
        { !checkAuth() && <Link to="/register">Register</Link> }
        { !checkAuth() && <Link to="/login">Login</Link> }
        { checkAuth() && <Link to="/profile">Profile</Link> }
      </nav>
      <button onClick={() => console.log(checkAuth())}>Check Authentification</button>
      <button onClick={() => console.log(Cookies.get())}>Show cookies</button>
      <button onClick={() => handleDisconnect() }>Disconnect</button>
      <button onClick={() => console.log(user) }>Show user</button>

    </header>
  )
};

export default Navbar;