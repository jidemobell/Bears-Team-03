import axios from 'axios';
import * as actionType from '../actionTypes'
import * as URL from '../../urls/URL'

 expense = {
  date,
  name,
  paidWith,
  amount,
  category
}


export function addExpense(expense){
    return dispatch => {
      let token = localStorage.getItem('token')
      axios.post(`${URL.EXPENSE_URL}/create`,expense, 
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

