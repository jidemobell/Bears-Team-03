import { SIGN_UP, USER_ERROR, USER_DASHBOARD, SIGN_IN, LOGGED_IN } from '../../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, authenticated: true }
    case USER_ERROR:
      return { ...state, error: action.payload }
    case USER_DASHBOARD:
      return { ...state, user: action.payload }
    case SIGN_IN:
      return { ...state, authenticated: true }
    case LOGGED_IN: 
      return { ...state, authenticated: true}
    default:
      return state
  }
}