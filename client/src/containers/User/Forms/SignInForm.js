import React, { Component } from 'react'
import { Field, reduxForm, Form} from 'redux-form'

import classes from './SignInForm.css'

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <section>
        <label>{label}</label>
        <div>
          <input type={type} { ...input } />
          {touched && ((error && <span className={classes.Error}>{error}</span>))}
        </div>
      </section>
    )

    return (
      <Form onSubmit={handleSubmit} className={classes.Form}>
        <div>
          <Field type='text' label='Username' name='userName' component={renderField} />
        </div>

        <div>
          <Field type='password' label='Password' name='password' component={renderField} />
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