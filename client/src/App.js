import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddExpense from './components/Expense/AddExpense';
import Home from './components/Home/Home';
import AuxComp from './hoc/AuxComp/AuxComp';
import Auth from './hoc/Auth/Auth';
import history from './hoc/History/History'




class App extends Component {
  render() {
    return (
         <Router history={history}>
         <Switch>
           {/* <Route exact path='/home' component={Home} /> */}
           <Route exact path='/user' component={Auth(Dashboard)} />
           <Route  exact path='/' component={Home} />
           <Route  path='/login' component={Login} />
           <Route  path='/register' component={Register} />
           <Route  path='/expense' component={Auth(AddExpense)}/>
          </Switch> 
          </Router>
    );
  }
}

export default App;
