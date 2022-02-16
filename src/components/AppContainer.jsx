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

    return null;
}