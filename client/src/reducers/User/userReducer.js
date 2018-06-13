import { SIGN_UP, USER_ERROR, USER_DASHBOARD } from '../../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, authenticated: true }
    case USER_ERROR:
      return { ...state, error: action.payload }
    case USER_DASHBOARD:
      return { ...state, user: action.payload }
    default:
      return state
  }
}