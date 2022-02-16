import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
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
          <Route path="/profile" 
            element={
              <PrivateRoute>
                <Profile />
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

export default App;