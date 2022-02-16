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

export const connect = (userInput) => {
  return {
    type: CONNECT,
    payload: {
      identifier: userInput.username || userInput.email,
      password: userInput.password,
    }
  }
}

export const disconnect = () => {
  return {
    type: DISCONNECT,
  }
}