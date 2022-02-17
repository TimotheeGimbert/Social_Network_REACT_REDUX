import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import User from './components/User'
import PrivateRoute from './pages/PrivateRoute'
import Cookies from 'js-cookie'


const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='/register' element= { <Register /> } />
          <Route path='/login' element= { <Login /> } />
          <Route path='/profile' 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path='/users/:id' 
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export const checkAuth = () => {
  return Cookies.get().token !== undefined ? true : false;
}

export const getLocalToken = () => {
  return Cookies.get().token;
}

export default App;