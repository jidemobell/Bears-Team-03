import React  from 'react';
import './Dashboard.css';
import 'antd/dist/antd.css';
import { Layout,Breadcrumb, Divider, Row, Col,Card  } from 'antd';
import DefaultHeader from '../../container/Header/Header';
import LineGraph from './../../container/Charts/Line';
import BarGraph from '../../container/Charts/Bar';
import GraphDisplay from './../../container/Graph/GraphDisplay';
import ProgessLine from '../../container/ProgressBar/Progress';
import TimeLiner from '../../container/Timeline/TimeLiner';

const { Content, Footer } = Layout;


class Dashboard extends React.Component {
   constructor(props){
    super(props) 
    this.state = {
       menu: 'pie',
      barThreeValue: {
        name:'CASH',
        value: 80,
        color: '#1890FF'
      },
      barFourValue: {
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
        <Layout>
          <DefaultHeader getMenu = {(val) => this.getMenu(val)} />
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
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
                value={this.state.barThreeValue.value} 
                color={this.state.barThreeValue.color}
                name ={this.state.barThreeValue.name}/>
                <ProgessLine 
                value={this.state.barFourValue.value} 
                color={this.state.barFourValue.color}
                name ={this.state.barFourValue.name}/>
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
    )
  }
}

export default Dashboard
