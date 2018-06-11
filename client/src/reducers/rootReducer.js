import { combineReducers } from 'redux'
import UserReducer from './User/userReducer'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  user: UserReducer,
  form
})

export default rootReducer