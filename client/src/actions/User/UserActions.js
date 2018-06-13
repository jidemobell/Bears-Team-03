import axios from 'axios'
import history from '../../hoc/History/History'

import { SIGN_UP, USER_ERROR } from '../types'
 
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
      console.log('Error', error)
    })
  }
}