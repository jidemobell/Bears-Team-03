import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../actions/User/UserActions'
import Modal from 'react-modal'
import AuxComp from '../../../hoc/AuxComp/AuxComp'

import DashboardComponent from '../../../components/UI/Dashboard/Dashboard'
import AddExpense from '../Expenses/AddExpense';

import classes from './Dashboard.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

  class Dashboard extends Component {
    constructor() {
      super();
  
      this.state = {
        modalOpen: false
      };
  
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
      this.props.actions.userDashboard()
    }

    openModal() {
      this.setState({ modalOpen: true })
    }

    afterOpenModal() {
    }

    closeModal() {
      this.setState({ modalOpen: false })
    }

    render() {
      if(this.props.user && this.props.user.user) {
        return (
          <AuxComp>
            <Modal
              isOpen={this.state.modalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={{customStyles}}
              contentLabel="Modal"
            >

              <AddExpense onClick={this.closeModal} onClickClose={this.closeModal} />
              
            </Modal>

            <DashboardComponent user={this.props.user.user} expenses={this.props.user.expenses} incomes={this.props.user.incomes} onClick={this.openModal} />
          </AuxComp>
        )
      } else {
          return <div>No User</div>
      } 
    } 
  }

  const mapStatetToProps = (state) => {
    return { 
      user: state.user,
      expenses: state.expenses,
      incomes: state.incomes
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(Object.assign(userActions), dispatch)
    }
  }

export default connect(mapStatetToProps, mapDispatchToProps)(Dashboard)