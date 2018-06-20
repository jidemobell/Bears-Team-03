import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import RenderErrors from '../../../hoc/RenderErrors/RenderErrors';
import Form from '../../../components/UI/Form/Form';

const formFields = [
  { label: 'User Name', name: 'userName', type: 'text', errorMsg: 'User Name is required' },
  { label: 'Password', name: 'password', type: 'password', errorMsg: 'Password is required' }
]

  class SignIn extends Component {
    onSubmit = values => {
      this.props.actions.signIn(values)
    }
 
    render() {
      return (
        <div>
          <h1>Sign In Page</h1>
          <RenderErrors error={this.props.error} />
          <Form fields={formFields} onSubmit={this.onSubmit} button='Sign In' title='Sign In Form' />
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