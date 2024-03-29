import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import Form from '../../../components/UI/Form/Form';

const formFields = [
  { label: '', name: 'date', type: 'date', errorMsg: 'Please select a date'},
  { label: 'Name', name: 'name', type: 'text', errorMsg: 'A name is required' },
  { label: 'Amount', name: 'amount', type: 'number', errorMsg: 'Amount is required' },
  { label: 'Frequency', name: 'frequency', type: 'text', errorMsg: 'Frequency is required' },
  { label: 'Color', name: 'color', type: 'text', errorMsg: 'Color is required' },
  { label: 'Payment Method', name: 'paymentMethod', type: 'text', errorMsg: 'Payment Method is required' },
  { label: 'Category', name: 'category', type: 'text', errorMsg: 'A category is required' }
]

  class AddExpense extends Component {
    onSubmit = values => {
      this.props.actions.addExpense(values)
    }

    render() {
      return (
        <Form fields={formFields} onSubmit={this.onSubmit} onClick={this.props.onClick} button='Add Expense' title='Add Expense' onClickClose={this.props.onClickClose} />
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