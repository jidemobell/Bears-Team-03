import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Aux from './hoc/Aux/Aux'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import About from './components/About/About';
import SignUp from './containers/User/SignUp/SignUp';
import SignIn from './containers/User/SignIn/SignIn';
import Dashboard from './containers/User/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout />

        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/dashboard' exact component={Dashboard} />
        </Switch>
      </Aux>
    );
  }
}

export default App
