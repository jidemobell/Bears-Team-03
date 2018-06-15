import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import AddExpensesForm from '../Forms/AddExpensesForm';

  class AddExpense extends Component {
    onSubmit = values => {
      this.props.actions.addExpense(values)
    }

    render() {
      return (
        <AddExpensesForm onSubmit={this.onSubmit} onClick={this.props.onClick} />
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

export default connect(mapStatetToProps, mapDispatchToProps)(AddExpense)