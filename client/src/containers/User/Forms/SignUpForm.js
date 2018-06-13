import React, { Component } from 'react'
import { Field, reduxForm, Form } from 'redux-form'
 
import classes from './SignUpForm.css'

  class SignUpForm extends Component {
    render() {
      const { handleSubmit } = this.props

      // TODO: Look at moving this renderField to HOC same for SignInForm
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
            <Field type='text' label='First Name' name='firstName' component={renderField} />
          </div>

          <div>
            <Field type='text' label='Last Name' name='lastName' component={renderField} />
          </div>

          <div>
            <Field type='text' label='Username' name='userName' component={renderField} />
          </div>

          <div>
            <Field type='text' label='Email' name='email' component={renderField} />
          </div>

          <div>
            <Field type='text' label='Password' name='password' component={renderField} />
          </div>

          <div>
            <Field type='text' label='Confirm Password' name='confirmPassword' component={renderField} />
          </div>

          {this.props.errors}

          <div>
            <button type='submit'>Sign Up</button>
          </div>
        </Form>
      )
    }
  }

  const validate = values => {
    const errors = {}
    if(!values.firstName) {
      errors.firstName = 'First Name is required'
    }

    if(!values.lastName) {
      errors.lastName = 'Last Name is required'
    }

    if(!values.userName) {
      errors.userName = 'Username is required'
    }

    if(!values.email) {
      errors.email = 'Email is required'
    }

    if(!values.password) {
      errors.password = 'Password is required'
    }

    if(values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    return errors
  }

export default reduxForm({
  form: 'signup',
  validate
}) (SignUpForm)