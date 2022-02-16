import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'


export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='/register' element= { <Register /> } />
          <Route path='/login' element= { <Login /> } />
          <Route path='/profile' element= { <Profile /> } />
        </Routes>
      </Router>
    </Provider>
  );
}