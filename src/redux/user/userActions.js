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
      username: response.username,
      email: response.email,
      id: response.id
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
      description: response.description,
      id: response.id
    }
  }
}