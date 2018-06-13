import { SIGN_UP, USER_ERROR } from '../../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, authenticated: true }
    case USER_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}