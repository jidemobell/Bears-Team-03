import React, { Component } from 'react'
import SignInForm from '../Forms/SignInForm'

  class SignIn extends Component {
    render() {
      return (
        <div>
          <h1>Sign In Container</h1>

          <SignInForm />
        </div>)
    }
  }

export default SignIn