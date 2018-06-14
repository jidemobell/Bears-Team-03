import axios from 'axios'
import history from '../../hoc/History/History'

import { SIGN_UP, USER_ERROR, USER_DASHBOARD, SIGN_IN, LOGGED_OUT } from '../types'
 
const ROOT_URL = 'http://localhost:4000/user'

export function signUp({ firstName, lastName, userName, email, password
}) {
  return dispatch => {
    axios.post(`${ROOT_URL}/create`, { firstName, lastName, userName, email, password
    }).then(response => {
      if(response.data.success === false) {
        dispatch({ type: USER_ERROR, payload: response.data.error })
      } else {
        dispatch({ type: SIGN_UP })
        localStorage.setItem('token', response.data.token)
        history.push('/dashboard')
      } 
    }).catch(error => {
        dispatch({ type: USER_ERROR, payload: error })
    })
  }
}

export function userDashboard() {
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.get(`${ROOT_URL}/dashboard`, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      dispatch({ type: USER_DASHBOARD, payload: response.data.user })
    })
  }
}

export function signIn({ userName, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/login`, { userName, password }).then(response => {
      console.log('Response', response)
      if(response.data.success === false) {
        dispatch({ type: USER_ERROR, payload: response.data.error })
      } else {
          dispatch({ type: SIGN_IN })
          localStorage.setItem('token', response.data.token)
          history.push('/dashboard')
      }
    }).catch(error => {
        dispatch({ type: USER_ERROR, payload: error })
    })
  }
}

export function signOut() {
  localStorage.removeItem('token')
  return ({ type: LOGGED_OUT })
}