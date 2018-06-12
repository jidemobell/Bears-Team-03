import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import SignUpForm from '../Forms/SignUpForm'

  class SignUp extends Component {
    onSubmit = values => {
      this.props.actions.signUp(values)
    }

    render() {
      return (
        <div>
          <h1>Sign Up Page</h1>

          <SignUpForm onSubmit={this.onSubmit} />
        </div>
      )
    }
  }

  // const mapStatetToProps = (state) => {
  //   return { errorMessage: state.user.errorMessage }
  // }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(null, mapDispatchToProps)(SignUp)