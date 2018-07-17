import React  from 'react';
import './Dashboard.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions';
import { Layout,Breadcrumb, Divider, Row, Col,Card  } from 'antd';
import ProgessLine from '../../container/ProgressBar/Progress';
import TimeLiner from '../../container/Timeline/TimeLiner';
import AuxComp from './../../hoc/AuxComp/AuxComp';
import UserBoardHeader from './../../container/Header/BoardHeader';
import GraphDisplay from './../Graph/GraphDisplay';
import Day from './../Moment/Day';
import MonthlyExpenseAccumulator from '../../container/Tables/BoardExpenseTable';

const { Content, Footer } = Layout;


class Dashboard extends React.Component {
   constructor(props){
    super(props) 
    // this.state = {
    //    menu: 'pie',
    //   barOneValue: {
    //     name:'CASH',   //hardcoded entries for test
    //     value: 80,
    //     color: '#1890FF'
    //   },
    //   barTwoValue: {
    //     name:'CARD',              
    //     value: 59,
    //     color: '#001529'
    //   }
    //  }
   }

  componentWillMount() {
    this.props.actions.userDashboard()

  }


//  getMenu(val){
//    this.setState({
//      menu: val
//    })
//  }

getUserName(){
  if(!this.state.user.user === undefined){
    console.log('not rendered yet')
  }
  console.log('rendered', this.state.user.user.userName)
}


  render(){
    return (
         <AuxComp>
         <div>
          {/* <UserBoardHeader getMenu = {(val) => this.getMenu(val)} /> */}
          <UserBoardHeader   boardUser={this.props.user === undefined ? '': this.props.user.userName}/>
          <Layout>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <br />
            <br />
            <div style={{ background: '#fff', padding: 24, minHeight: 380, overflow:'hidden' }}>

             <Row>
               <Col span={12}> 
               <GraphDisplay menu={this.props.graph} />
               </Col>
               <Col span={12}  style={{ marginTop: '-20px' }}>
               <Divider orientation="left" > <Day />
               </Divider>  
                <Card style={{ padding: '3px' }}>
                 <MonthlyExpenseAccumulator />
                
                {/* <ProgessLine 
                value={this.state.barOneValue.value} 
                color={this.state.barOneValue.color}
                name ={this.state.barOneValue.name}/> */}
                {/* <ProgessLine 
                value={this.props.expenses.amount}    //configure as select option
                color={this.props.expenses.color}       //configure as select option
                name ={this.props.expenses.category}/>
                <ProgessLine 
                value={this.state.barTwoValue.value} 
                color={this.state.barTwoValue.color}
                name ={this.state.barTwoValue.name}/> */}
                </Card>
                <Card>
                  <TimeLiner />
                </Card>
                </Col>
             </ Row>
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ChinguVoyage Bears3 Design ©2016 Created with by Ant UED
          </Footer>
        </Layout>
        </div>
        </AuxComp>
    )
  }
}



const mapStatetToProps = (state) => {
  console.log('users at board: ', state.user.user)
  return { 
    user: state.user.user,
    expenses: state.expenses,
    incomes: state.incomes,
    graph: state.user.graph
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(Dashboard)

