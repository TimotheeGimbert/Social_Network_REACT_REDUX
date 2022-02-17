import { REGISTER, LOGIN, DISCONNECT, EDIT } from './userTypes'

const initialState = {
  token: undefined,
  username: '',
  email: '',
  id: undefined
}

const userReducer = (state = initialState, action) => {
  console.log('action: ', action)
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        token: action.payload.token
      }
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        email: action.payload.email,
        id: action.payload.id
      }
    case DISCONNECT:
      return {
        ...state,
        token: undefined
      }
    case EDIT:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        description: action.payload.description
      }
    default:
      return state
  }
}

export default userReducer;