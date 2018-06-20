import React from 'react'
import { reduxForm, Field, Form } from 'redux-form'
import classes from './Form.css'

const RenderFields = ({ input, label, type, meta: { touched, error } }) => (
  <div className={classes.InputGroup}>
    <input type={type} className={classes.Input} { ...input } required />
    <label className={classes.Label}>{label}</label>
    <div className={(touched && error) ? ([classes.Validation, classes.Error]).join(' ') : classes.Validation}></div>
    {/* TODO: Style or move/remove these messages */}
    {touched && ((error && <span>{error}</span>))}
  </div>
)

let errorFields = []

const FormBuilder = props => {
  const { handleSubmit } = props
    const formField = props.fields.map(field => {
      errorFields.push(field)
      return <Field label={field.label} name={field.name} type={field.type} component={RenderFields} />
    })

    return (
      <div className={classes.Container}>
        <h1>Form Title</h1>
  
        <Form onSubmit={handleSubmit} className={classes.Form}>
          {formField}

          <button type='submit'>{props.button}</button>
          {props.errors}
        </Form>
      </div>
    )
}

// TODO: Fully test this validation
const validate = values => {
  const errors = {}
  errorFields.map(errorField => {
    let thisField = errorField.name

    if(!values[thisField]) {
      errors[thisField] = errorField.errorMsg
    }
    if((thisField == 'confirmPassword') && (values.confirmPassword !== values.password)) {
      errors[thisField] = 'Passwords do not match'
    }
    return errors
  })

  return errors
}

export default reduxForm({
  form: 'this.props.formName',
  validate
})(FormBuilder)