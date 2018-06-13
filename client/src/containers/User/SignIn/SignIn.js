import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import SignInForm from '../Forms/SignInForm'

  class SignIn extends Component {
    onSubmit = values => {
      this.props.actions.signIn(values)
    }

    renderErrors() {
      if(this.props.error) {
        // TODO: Improve error handling from server
        return (
          <div>
            Error
          </div>
        )
      }
    }

    render() {
      return (
        <div>
          <h1>Sign In Page</h1>

          <SignInForm onSubmit={this.onSubmit} />
        </div>)
    }
  }

  const mapStatetToProps = (state) => {
    return { error: state.user.error }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }
export default connect(mapStatetToProps, mapDispatchToProps)(SignIn)