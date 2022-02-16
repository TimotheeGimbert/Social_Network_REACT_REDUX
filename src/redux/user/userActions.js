import { REGISTER, LOGIN, DISCONNECT } from './userTypes'

export const register = (newUserData) => {
  return {
    type: REGISTER,
    payload: {
      username: newUserData.username,
      email: newUserData.email,
      password: newUserData.password,
      token: newUserData.token
    }
  }
}

export const login = (token) => {
  return {
    type: LOGIN,
    payload: {
      token: token
    }
  }
}

export const disconnect = () => {
  return {
    type: DISCONNECT,
  }
}