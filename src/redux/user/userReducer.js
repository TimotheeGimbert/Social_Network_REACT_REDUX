import { REGISTER, LOGIN, DISCONNECT} from './userTypes'

const initialState = {
  token: undefined
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER:
      return {
        ...state,
        token: action.payload.token
      }
    case LOGIN:
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