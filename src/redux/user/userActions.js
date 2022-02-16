import { REGISTER, CONNECT, DISCONNECT } from './userTypes'

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

export const connect = (token) => {
  return {
    type: CONNECT,
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