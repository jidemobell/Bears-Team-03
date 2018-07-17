import React, { Component } from 'react';
import {  Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import AddExpense from './components/Expense/AddExpense';
import Home from './components/Home/Home';
import AuxComp from './hoc/AuxComp/AuxComp';
import Auth from './hoc/Auth/Auth';
import history from './hoc/History/History'
import Register from './container/register/Register';
import MonthlyExpenseTable from './container/Tables/MonthlyExpenseTable';
import LandinPage from './components/Landing/Landing';




class App extends Component {
  render() {
    return (
          <AuxComp>
         <Router history={history}>
         <Switch>
           {/* <Route exact path='/home' component={Home} /> */}
           <Route  path='/dashboard' component={Auth(Dashboard)} />
           <Route  exact path='/' component={LandinPage} />
           <Route  path='/login' component={Login} />
           <Route  path='/register' component={Register} />
           <Route path='/expensetable' component={MonthlyExpenseTable} />
           <Route  path='/expense' component={Auth(AddExpense)}/>
           <Route path='/home' component={Home} />
          </Switch> 
          </Router>
          </AuxComp>
    );
  }
}

export default App;
