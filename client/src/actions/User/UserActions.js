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
          history.pushState('/home')
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
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      dispatch({
        type: actionType.USER_DASHBOARD,
        payload: response.data
      })
    }).catch(error => {
      console.log('userboard error:', error)
    })
  }
}

export function dashBoardHeader(menuGraph){
  return dispatch=>{
    dispatch(
      {
        type:actionType.USER_HEADER,
        payload: menuGraph
      }
    )
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
       // console.log('response: ',response.data)
        dispatch({
          type: actionType.SIGN_IN,
         // payload: response.data
        })
        localStorage.setItem('token', response.data.token)
        history.push('/dashboard')
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


export function updateUser({firstName, lastName, userName, email, password}){
  return dispatch => {
    let token = localStorage.getItem('token')
    axios.post(`${URL.USER_URL}/update`, {
       firstName, lastName, userName, email, password
       },{ headers: { Authorization: `Bearer ${token}` } }).then(response => {
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

// {
//   date,
//   name,
//   paidWith,
//   amount,
//   category
// }

export function addExpense({
  name,
  paidWith,
  amount,
  category
}){
    return dispatch => {
      let token = localStorage.getItem('token')
      axios.post(`${URL.EXPENSE_URL}/create`,{
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