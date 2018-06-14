import { SIGN_UP, USER_ERROR, USER_DASHBOARD, SIGN_IN, LOGGED_IN, LOGGED_OUT } from '../../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, authenticated: true }
    case USER_ERROR:
      return { ...state, error: action.payload }
    case USER_DASHBOARD:
      return { ...state, user: action.payload.user, expenses: action.payload.expenses }
    case SIGN_IN:
      return { ...state, authenticated: true }
    case LOGGED_IN: 
      return { ...state, authenticated: true }
    case LOGGED_OUT: 
      return { ...state, authenticated: false }
    default:
      return state
  }
}