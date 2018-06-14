import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import SignUpForm from '../Forms/SignUpForm'

  class SignUp extends Component {
    onSubmit = values => {
      this.props.actions.signUp(values)
    }

    // TODO: Look at moving this to HOC function smae for signin and update
    renderErrors() {
      if(this.props.error) {
        // TODO: Imprve error handling from server
        return (
          <div>
            {this.props.error.errors.userName.message}  
          </div>
        )
      }
    }
 
    render() {
      return (
        <div>
          <h1>Sign Up Page</h1>
          {this.renderErrors()}
          <SignUpForm onSubmit={this.onSubmit} />
        </div>
      )
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

export default connect(mapStatetToProps, mapDispatchToProps)(SignUp)