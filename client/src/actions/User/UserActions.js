import axios from 'axios';
import * as actionType from '../actionTypes'
import * as URL from '../../urls/URL'

// const user={
//   firstName,
//   lastName,
//   userName,
//   email,
//   password
// }
export function Register(user){
    return dispatch => {
      axios.post(`${URL.USER_URL}/create`, user)
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
          //history.pushState('/dasboard')
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

// const loginDetails ={
//   userName,
//   password
// }
export function Home(loginDetails){
  return dispatch => {
    axios.post(`${URL.USER_URL}/login`, loginDetails )
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
       // history.push('/dashoard')
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

export function signOut(){
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
      //  history.push('/dashboard')
      }
    })
  }
}