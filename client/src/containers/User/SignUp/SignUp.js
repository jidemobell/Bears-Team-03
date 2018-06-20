import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import RenderErrors from '../../../hoc/RenderErrors/RenderErrors';
import Form from '../../../components/UI/Form/Form';

const formFields = [
  { label: 'First Name', name: 'firstName', type: 'text', errorMsg: 'First Name is required' },
  { label: 'Last Name', name: 'lastName', type: 'text', errorMsg: 'Last Name is required' },
  { label: 'User Name', name: 'userName', type: 'text', errorMsg: 'User Name is required' },
  { label: 'Email', name: 'email', type: 'email', errorMsg: 'Email is required' },
  { label: 'Password', name: 'password', type: 'password', errorMsg: 'Password is required' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password', errorMsg: 'Passwords do not match' }
]
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
          {/* <SignUpForm onSubmit={this.onSubmit} /> */}
          <Form fields={formFields} onSubmit={this.onSubmit} button='Sign Up' title='Sign Up Form'/>
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