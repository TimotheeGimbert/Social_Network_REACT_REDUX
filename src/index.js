import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/main.scss'
import Cookies from 'js-cookie'

Cookies.remove('token');
ReactDOM.render(<App />, document.getElementById('root'));