import React from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import {Menu,Icon, Layout} from 'antd';
const {Header} = Layout
const SubMenu = Menu.SubMenu;




class LinkHeader extends React.Component{
  render(){
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            {/* <div className="logo" /> */}
            <Menu
             theme="dark"
             mode="horizontal"
             defaultSelectedKeys={['2']}
             style={{ lineHeight: '64px' }}
            >
            <Menu.Item key="1" ><Link to={`/`}>Home</Link></Menu.Item>
            <SubMenu key="1" style={{ float: 'right' }} title={<span><Icon type="poweroff" /><span>Logout</span></span>}></SubMenu>
            </Menu  >
          </Header>
    )
  }
}

export default LinkHeader;