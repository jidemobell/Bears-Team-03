import React  from 'react';
import './Dashboard.css';
import 'antd/dist/antd.css';
import { Layout,Breadcrumb, Divider, Row, Col,Card  } from 'antd';
import DefaultHeader from '../../container/Header/Header';
import LineGraph from './../../container/Charts/Line';
import BarGraph from '../../container/Charts/Bar';
import GraphDisplay from './../../container/Graph/GraphDisplay';
import ProgessLine from '../../container/ProgressBar/Progress';

const { Content, Footer } = Layout;


class Dashboard extends React.Component {
   constructor(props){
    super(props) 
    this.state = {
       menu: "pie",
       barOneValue:{
         name:'Transportation',
         value: 10,
         color: '#001529'
       },
       barTwoValue:{
         name:'Food',
        value: 45,
        color: '#001529'
      },
      barThreeValue: {
        name:'Health',
        value: 80,
        color: '#1890FF'
      },
      barFourValue: {
        name:'Miscellaneous',              
        value: 80,
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
            {/* <div className="left-div" >
             <GraphDisplay menu={this.state.menu} />
              </div>
            <div className="right-div" >
              <Divider orientation="right">Date Here</Divider>
              <GraphDisplay menu={this.state.menu} />
              </div> */}
             <Row>
               <Col span={12}> 
               <GraphDisplay menu={this.state.menu} />
               </Col>
               <Col span={12}  style={{ marginTop: '-20px' }}>
               <Divider orientation="left" > Date Here
               </Divider>
                  {/* <Progress percent={50} status="active" />
                  <Progress percent={50} status="active" />
                  <Progress percent={50} status="active" />
                  <Progress percent={50} status="active" /> */}
                <Card style={{ padding: '3px' }}>
                <ProgessLine 
                value={this.state.barOneValue.value} 
                color={this.state.barOneValue.color}
                name ={this.state.barOneValue.name}  />
                <ProgessLine 
                value={this.state.barTwoValue.value}  
                color={this.state.barTwoValue.color}
                name ={this.state.barTwoValue.name}/>
                <ProgessLine 
                value={this.state.barThreeValue.value} 
                color={this.state.barThreeValue.color}
                name ={this.state.barThreeValue.name}/>
                <ProgessLine 
                value={this.state.barFourValue.value} 
                color={this.state.barFourValue.color}
                name ={this.state.barFourValue.name}/>
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
