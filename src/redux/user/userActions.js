import { REGISTER, LOGIN, DISCONNECT, EDIT } from './userTypes'

export const register = (token) => {
  return {
    type: REGISTER,
    payload: {
      token: token
    }
  }
}

export const login = (response) => {
  return {
    type: LOGIN,
    payload: {
      token: response.jwt,
      username: response.user.username,
      email: response.user.email,
      id: response.user.id
    }
  }
}

export const disconnect = () => {
  return {
    type: DISCONNECT,
  }
}

export const edit = (response) => {
  return {
    type: EDIT,
    payload: {
      username: response.username,
      email: response.email,
      description: response.description
    }
  }
}