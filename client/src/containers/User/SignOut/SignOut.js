import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../../actions/User/UserActions'

  class SingOut extends Component {
    componentWillMount() {
      this.props.signOut()
    }

    render() {
      return (
        <div>Sorry to see you go...</div>
      )
    }
  }

export default connect(null, userActions)(SingOut)