import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import SignUpForm from '../Forms/SignUpForm'
import RenderErrors from '../../../hoc/RenderErrors/RenderErrors';

  class SignUp extends Component {
    onSubmit = values => {
      this.props.actions.signUp(values)
    }

    validateError = (error) => {
      if(error.userName && (error.userName.kind === 'unique')) {
        return 'Username is already in use' 
      } else if(error.email && (error.email.kind === 'unique')) {
        return 'Email is already in use'
      }
      return 'Something went wrong. Please try again.'
    }
 
    render() {
      return (
        <div>
          <h1>Sign Up Page</h1>
          <RenderErrors error={this.props.error ? this.validateError(this.props.error) : null} />
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