import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import LineGraph from './container/Charts/Line';
import App from './App';
//import {Provider} from 'react-redux';
import { Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers/index';
//import Async from './middleware/async';
//import history from './hoc/History/History';
//import * as actionTypes from './actions/actionTypes';


// const storeMiddleware = applyMiddleware(Async, reduxThunk)(createStore)
// const store = storeMiddleware(reducers);

// const token = localStorage.getItem('token')
// if(token){
//   store.dispatch({
//     type: actionTypes.LOGGED_IN
//   })
// }

// ReactDOM.render( 
//        <Provider>
//          <Router history={history}>
//          <App />
//          </Router>
//        </Provider>,
//    document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render( 
    
    <App />
  
  ,
document.getElementById('root'));
registerServiceWorker();