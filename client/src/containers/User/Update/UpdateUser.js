import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as userActions from '../../../actions/User/UserActions'

import UpdateUserForm from '../Forms/UpdateUserForm'

  class UpdateUser extends Component {
    onSubmit = values => {
      this.props.actions.updateUser(values)
    }

    renderErrors() {
      if(this.props.error) {
        // TODO: Imprve error handling from server
        return (
          <div>
            {this.props.error.errors.userName.message}  
          </div>
        )
      }
    }
    
    render() {
      return (
        <div>
          <h1>Update Details</h1>
          {this.renderErrors()}
          <UpdateUserForm onSubmit={this.onSubmit} />
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

export default connect(mapStatetToProps, mapDispatchToProps)(UpdateUser)