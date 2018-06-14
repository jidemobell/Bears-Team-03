import React, { Component } from 'react'
import { Field, reduxForm, Form} from 'redux-form'
import RenderFields from '../../../hoc/RenderFields/RenderFields'

import classes from './SignInForm.css'

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit} className={classes.Form}>
        <div>
          <Field type='text' label='Username' name='userName' component={RenderFields} />
        </div>

        <div>
          <Field type='password' label='Password' name='password' component={RenderFields} />
        </div>

        {this.props.errors}

        <div>
          <button type='submit'>Sign In</button>
        </div>
      </Form>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.userName) {
    errors.userName = 'Username is required'
  }

  if(!values.password) {
    errors.password = 'Password is required'
  }
}

export default reduxForm({
  form: 'signin',
  validate
})(SignInForm)