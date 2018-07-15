import axios from 'axios';
import * as actionType from '../actionTypes'
import * as URL from '../../urls/URL';
import history from '../../hoc/History/History'

export function signUp( {
  firstName,
  lastName,
  userName,
  email,
  password
}){
    return dispatch => {
      axios.post(`${URL.USER_URL}/create`, {
        firstName,
        lastName,
        userName,
        email,
        password
      })
      .then(response => {
        if(response.data.success === false){
          dispatch({
            type: actionType.USER_ERROR,
            payload: response.data.error
          })
        }else{
          dispatch({
            type: actionType.SIGN_UP
          })
          localStorage.setItem('token', response.data.token)
          history.pushState('/dasboard')
        }
      }).catch(error => {
        dispatch({
          type: actionType.USER_ERROR,
          payload: error
        })
      })
    }
}


export function userDashboard(){
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.get(`${URL.USER_URL}/dashboard`, {
      headers: {
        Authorizarion: `Bearer ${token}`
      }
    }).then(response => {
      dispatch({
        type: actionType.USER_DASHBOARD,
        payload: response.data
      })
    })
  }
}


export function signIn({userName,password}){
  return dispatch => {
    axios.post(`${URL.USER_URL}/login`, {
      userName,
      password
    } )
    .then(response => {
      if(response.status === 401){
        dispatch({
          type: actionType.USER_ERROR,
          payload: response.data.error
        })
      }else{
        dispatch({
          type: actionType.SIGN_IN,
        })
        localStorage.setItem('token', response.data.token)
        history.push('/dashoard')
      }
    }).catch(error => {
      if(error.response.status === 401){
        let errorMsg = 'Username or Password Incorrect'
        dispatch({
          type: actionType.USER_ERROR,
          payload: errorMsg
        })
      }
    })
  }
}

export function LogOut(){
  localStorage.removeItem('token')
  return({
    type: actionType.LOGGED_OUT
  })
}


export function updateUser(user){
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.post(`${URL.USER_URL}/update`, user).then(response => {
      if(response.data.success === false){
        dispatch({
          type: actionType.USER_ERROR,
          payload: response.data.error
        })
      }else{
        console.log('update user', response.data)
        dispatch({
        type: actionType.USER_DASHBOARD,
          payload: response.data
        })
        history.push('/dashboard')
      }
    })
  }
}

export function addExpense({
  date,
  name,
  paidWith,
  amount,
  category
}){
    return dispatch => {
      let token = localStorage.getItem('token')
      axios.post(`${URL.EXPENSE_URL}/create`,{
        date,
        name,
        paidWith,
        amount,
        category
      }, 
      {headers: {Authorization: `Bearer ${token}`}})
     .then(response => {
       dispatch({
          type: actionType.USER_DASHBOARD,
          payload: response.data
       })
     }).catch(error => {
       dispatch({
         type: actionType.USER_ERROR,
         payload: error
       })
     })
    }
}

export function listExpense(){
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.get(`${URL.EXPENSE_URL}/list`, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => {
      dispatch({
        type: actionType.USER_DASHBOARD,
        payload: response.data
      })
    }).catch(error => {
      dispatch({
        type: actionType.USER_ERROR,
        payload: error
      })
    }
    )
  }
}