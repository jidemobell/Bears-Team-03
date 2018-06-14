import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'

import DashboardComponent from '../../../components/UI/Dashboard/Dashboard'

  class Dashboard extends Component {
    componentWillMount() {
      this.props.actions.userDashboard()
    }

    render() {
      if(this.props.user && this.props.user.user) {
        return <DashboardComponent user={this.props.user.user} expenses={this.props.user.expenses} />
      } else {
          return <div>No User</div>
      } 
    } 
  }

  const mapStatetToProps = (state) => {
    return { 
      user: state.user,
      expenses: state.expenses
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(mapStatetToProps, mapDispatchToProps)(Dashboard)