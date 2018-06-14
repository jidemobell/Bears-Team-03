import React, { Component } from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { connect } from 'react-redux';
import * as userActions from '../../../actions/User/UserActions'
import RenderFields from '../../../hoc/RenderFields/RenderFields'
import { bindActionCreators } from 'redux'

import classes from './UpdateUserForm.css'

class UpdateUserForm extends Component {
  componentWillMount() {
    this.props.actions.userDashboard()
  }

  render() {
    const { handleSubmit } = this.props
    // TODO: Add new password / confirm new password changing ability

    if(this.props.user && this.props.user.user) {
      return (
        <Form onSubmit={handleSubmit} className={classes.Form}>
          <div> 
              <Field type='text' label='First Name' name='firstName' component={RenderFields} />
            </div>
  
            <div>
              <Field type='text' label='Last Name' name='lastName' component={RenderFields} />
            </div>
  
            <div>
              <Field type='text' label='Username' name='userName' component={RenderFields} />
            </div>
  
            <div>
              <Field type='text' label='Email' name='email' component={RenderFields} />
            </div>
  
            <div>
              <Field type='text' label='Current Password' name='password' component={RenderFields} />
            </div>
  
            {this.props.errors}
  
            <div>
              <button type='submit'>Update</button>
            </div>
        </Form>
      )
    } else {
        return <div>Loading...</div>
    }
  }
}

const validate = values => {
  const errors = {}

  return errors
}

const mapStatetToProps = (state) => {
  return { 
    user: state.user, 
    initialValues: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

const UserForm = reduxForm({
  form: 'updateuser',
  validate
})(UpdateUserForm)

export default connect(mapStatetToProps, mapDispatchToProps)(UserForm)