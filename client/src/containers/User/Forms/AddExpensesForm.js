import React, { Component } from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import RenderFields from '../../../hoc/RenderFields/RenderFields' 

import classes from './SignUpForm.css'

  class AddExpensesForm extends Component {    
    render() {
      const { handleSubmit } = this.props

      return (
        <Form onSubmit={handleSubmit} className={classes.Form}>
          <div> 
            <Field type='text' label='Date' name='date' component={RenderFields} />
          </div>
          <div> 
            <Field type='text' label='Name' name='name' component={RenderFields} />
          </div>

          <div> 
            <Field type='text' label='Paid With' name='paidWith' component={RenderFields} />
          </div>

          <div>
            <Field type='number' label='Amount' name='amount' component={RenderFields} />
          </div>

          <div>
            <Field type='text' label='Frequency' name='frequency' component={RenderFields} />
          </div>

          <div>
            <Field type='text' label='Color' name='color' component={RenderFields} />
          </div>

          <div> 
            <Field type='text' label='Category' name='category' component={RenderFields} />
          </div>

          {this.props.errors}

          <div>
            <button type='submit'>Add Expense</button>
            <button onClick={this.props.onClick}>Close</button>
          </div>
        </Form>
      )
    }
  }

  const validate = values => {
    const errors = {}

    if(!values.name) {
      errors.name = 'An expense must have a name'
    }

    return errors
  }

export default reduxForm({
  form: 'addexpense',
  validate
})(AddExpensesForm)