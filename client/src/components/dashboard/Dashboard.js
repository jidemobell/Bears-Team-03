import React  from 'react';
//import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions';
import './Dashboard.css';
import 'antd/dist/antd.css';
import { Layout,Breadcrumb, Divider, Row, Col,Card  } from 'antd';
import ProgessLine from '../../container/ProgressBar/Progress';
import TimeLiner from '../../container/Timeline/TimeLiner';
import AuxComp from './../../hoc/AuxComp/AuxComp';
import UserBoardHeader from './../../container/Header/BoardHeader';
import GraphDisplay from './../Graph/GraphDisplay';

const { Content, Footer } = Layout;


class Dashboard extends React.Component {
   constructor(props){
    super(props) 
    this.state = {
       menu: 'pie',
      barOneValue: {
        name:'CASH',   //hardcoded entries for test
        value: 80,
        color: '#1890FF'
      },
      barTwoValue: {
        name:'CARD',              
        value: 59,
        color: '#001529'
      }
     }
   }

 getMenu(val){
   this.setState({
     menu: val
   })
 }


  render(){
    return (
         <div>
          <UserBoardHeader getMenu = {(val) => this.getMenu(val)} />
          <Layout>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <br />
            <br />
            <div style={{ background: '#fff', padding: 24, minHeight: 380, overflow:'hidden' }}>

             <Row>
               <Col span={12}> 
               <GraphDisplay menu={this.state.menu} />
               </Col>
               <Col span={12}  style={{ marginTop: '-20px' }}>
               <Divider orientation="left" > Date Here
               </Divider>  
                <Card style={{ padding: '3px' }}>
                <ProgessLine 
                value={this.state.barOneValue.value} 
                color={this.state.barOneValue.color}
                name ={this.state.barOneValue.name}/>
                <ProgessLine 
                value={this.state.barTwoValue.value} 
                color={this.state.barTwoValue.color}
                name ={this.state.barTwoValue.name}/>
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
    )
  }
}

export default Dashboard

