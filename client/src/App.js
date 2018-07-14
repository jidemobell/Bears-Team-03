import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import LoginForm from './components/login/Login';
import Register from './components/register/Register';
import AddExpense from './components/Expense/AddExpense';
import Home from './components/Home/Home';
//import Auth from './hoc/Auth/Auth';
//import AuxComp from './hoc/AuxComp/AuxComp';




// class App extends Component {
//   render() {
//     return (
//        <AuxComp>
      
//          <Switch>
//            {/* <Route exact path='/home' component={Home} /> */}
//            <Route exact path='/user' component={Auth(Dashboard)} />
//            <Route  path='/home' component={Home} />
//            <Route  path='/register' component={Register} />
//            <Route  path='/expense' component={Auth(AddExpense)}/>
//           </Switch>
//          </AuxComp>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
         <Router>
         <Switch>
           {/* <Route exact path='/home' component={Home} /> */}
           <Route exact path='/user' component={Dashboard} />
           <Route  exact path='/' component={Home} />
           <Route  path='/login' component={LoginForm} />
           <Route  path='/register' component={Register} />
           <Route  path='/expense' component={AddExpense}/>
          </Switch> 
          </Router>
    );
  }
}

export default App;
