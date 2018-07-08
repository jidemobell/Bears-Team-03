import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';
import LoginForm from './pages/login/Login';
import Registration from './pages/register/Register';
import AddExpense from './pages/Expense/AddExpense';





class App extends Component {
  render() {
    return (
       <Router>
         <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route  path='/login' component={LoginForm} />
           <Route  path='/register' component={Registration} />
           <Route  path='/expense' component={AddExpense}/>
          </Switch>
       </Router>
    );
  }
}

export default App;
