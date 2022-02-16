import { REGISTER, CONNECT, DISCONNECT} from './userTypes'

const initialState = {
  username: undefined,
  email: undefined,
  token: undefined,
  userConnected: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token
      }
    case CONNECT:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        userConnected: true,
        token: action.payload.token
      }
    case DISCONNECT:
      return {
        ...state,
        userConnected: false,
        token: undefined
      }
    default:
      return state
  }
}

export default userReducer;