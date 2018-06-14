import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Aux from './hoc/Aux/Aux'
import Auth from './hoc/Auth/Auth'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import SignUp from './containers/User/SignUp/SignUp';
import SignIn from './containers/User/SignIn/SignIn';
import SignOut from './containers/User/SignOut/SignOut';
import Dashboard from './containers/User/Dashboard/Dashboard';
import UpdateUser from './containers/User/Update/UpdateUser'

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />

        <Switch>
          <Route path='/home' exact component={Auth(Home)} />
          <Route path='/about' exact component={About} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signout' exact component={Auth(SignOut)} />
          <Route path='/dashboard' exact component={Auth(Dashboard)} />
          <Route path='/edit' exact component={Auth(UpdateUser)} />
        </Switch>
      </Aux>
    );
  }
}

export default App
