import axios from 'axios'
import history from '../../hoc/History/History'

import { SIGN_UP, USER_ERROR, USER_DASHBOARD, SIGN_IN, LOGGED_OUT } from '../types'
 
const ROOT_URL = 'http://localhost:4000/user'
const EXPENSE_URL = 'http://localhost:4000/expense'

export function signUp({ firstName, lastName, userName, email, password }) {
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
      dispatch({ type: USER_DASHBOARD, payload: response.data })
    })
  }
}

export function signIn({ userName, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/login`, { userName, password }).then(response => {
      if(response.status === 401) {
        dispatch({ type: USER_ERROR, payload: response.data.error })
      } else {
          dispatch({ type: SIGN_IN })
          localStorage.setItem('token', response.data.token)
          history.push('/dashboard')
      }
    }).catch(error => {
      if(error.response.status === 401) {
        let errorMsg = 'Username or Password incorrect'
        dispatch({ type: USER_ERROR, payload: errorMsg })
      } else {
          let errorMsg = 'Something went wrong, Please try again.'
          dispatch({ type: USER_ERROR, payload: errorMsg })
      }
    })
  }
}

export function signOut() {
  localStorage.removeItem('token')
  return ({ type: LOGGED_OUT })
}

export function updateUser({ firstName, lastName, userName, email, password }) {
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.post(`${ROOT_URL}/update`, { firstName, lastName, userName, email, password }, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
      if(response.data.success === false) {
        dispatch({ type: USER_ERROR, payload: response.data.error })
      } else {
        console.log('updateUser', response.data)
        dispatch({ type: USER_DASHBOARD, payload: response.data })
        history.push('/dashboard')
      } 
    })
  }
}



export function addExpense({ date, name, paidWith, amount, frequency, color , category }) {
  return dispatch => {
    let token = localStorage.getItem('token')
    console.log('AddExpenseAction', name)
    axios.post(`${EXPENSE_URL}/create`, {date, name, paidWith, amount, frequency, color , category, amount}, { headers: { Authorization: `Bearer ${token}` }} ).then(response => {
      dispatch({ type: USER_DASHBOARD, payload: response.data })
    }).catch(error => {
      dispatch({ type: USER_ERROR, payload: error })
    })
  }
}