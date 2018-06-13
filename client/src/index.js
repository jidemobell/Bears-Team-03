import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import Async from './middleware/async'
import history from './hoc/History/History'
import { LOGGED_IN } from './actions/types'

const stroeMiddleware = applyMiddleware(Async, reduxThunk)(createStore)
const store = stroeMiddleware(rootReducer)

const token = localStorage.getItem('token')
if(token) {
   store.dispatch({ type: LOGGED_IN })
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
