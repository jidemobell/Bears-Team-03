import React  from 'react'
import { Layout,Breadcrumb } from 'antd';
import './Dashboard.css'

import 'antd/dist/antd.css';
import './Dashboard.css';
import DefaultHeader from '../../container/Header/Header';
import LineGraph from './../../container/Charts/Line';
import BarGraph from '../../container/Charts/Bar';
import GraphDisplay from './../../container/Graph/GraphDisplay';
const { Content, Footer } = Layout;

class Dashboard extends React.Component {
   constructor(props){
    super(props) 
    this.state = {
       menu: "pie"
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
            <div className="left-div" >
             <GraphDisplay menu={this.state.menu} />
              </div>
            <div className="right-div" >
              <GraphDisplay menu={this.state.menu} />
              </div>
             
              
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
