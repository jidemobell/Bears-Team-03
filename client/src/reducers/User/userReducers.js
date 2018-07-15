import * as actionTypes from '../../actions/actionTypes'

export default function(state = {}, action){
  switch(action.type){
    // case actionTypes.SIGN_UP:
    //   return {...state, authenticated: true}
    // case actionTypes.SIGN_IN:
    //   return {...state, authenticated: true}
    // case actionTypes.USER_ERROR:
    //   return {...state, error: action.payload}
    // case actionTypes.USER_DASHBOARD:
    //   return {...state, user:action.payload.user, expenses: action.payload.expenses}
    // case actionTypes.LOGGED_IN:
    //    return {...state, authenticated: true}
    // case actionTypes.LOGGED_OUT:
    //     return {...state, authenticated: true}
    // default:
    //   return state
    case actionTypes.LOGIN:
         const newState = [...state, {
           authenticated: true
         }]
         return newState
    case actionTypes.LOGOUT:
         const newState = [...state, {}]
         return newState 
    case actionTypes.REGISTER:
         const newState = [...state, {
          authenticated: true
         }]
         return newState
   case actionTypes.LOGGED_IN:
         const newState = [...state, {
          authenticated: true
         }]
         return newState
   case actionTypes.LOGGED_OUT:
         const newState = [...state, {
          authenticated: true
         }]
         return newState
    default:
         return state
    }

}