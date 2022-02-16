import { REGISTER, CONNECT, DISCONNECT} from './userTypes'

const initialState = {
  username: undefined,
  email: undefined,
  token: undefined,
}

const userReducer = (state = initialState, action) => {
  console.log('action: ', action)
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        email: action.payload.email,
        token: action.payload.token
      }
    case CONNECT:
      return {
        ...state,
        token: action.payload.token
      }
    case DISCONNECT:
      return {
        ...state,
        token: undefined
      }
    default:
      return state
  }
}

export default userReducer;