import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    );
  }
}

export default App;
