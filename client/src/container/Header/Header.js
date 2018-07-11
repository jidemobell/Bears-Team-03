import React  from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, DatePicker} from 'antd';
import ExpenseModal from '../Expense/ExpenseModal';
import moment from 'moment';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const { Content, Footer } = Layout;
const dateFormat = 'YYYY/MM/DD';



class DefaultHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu: null
    }
    

  }
  
  lineClick(e){
    this.setState({
      menu: "line"
    })
    this.props.getMenu(this.state.menu)
  }

  pieClick(e){
    this.setState({
      menu: "pie"
    })
    this.props.getMenu(this.state.menu)
  }

  // areaClick(e){
  //   this.setState({
  //     menu: "area"
  //   })
  //   this.props.getMenu(this.state.menu)
  // }

  barClick(e){
    this.setState({
      menu: "bar"
    })
    this.props.getMenu(this.state.menu)
  }

  render(){
    return (
      <Layout>
         <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><span>Home</span></Menu.Item>
              
              <SubMenu
              key="sub1"
              title={<span><Icon type="pie-chart" /><span>Charts</span></span>}
            >
              <Menu.Item key="1"  onClick={e=>this.lineClick(e)}><Icon type="line-chart" />line-chart</Menu.Item>
              <Menu.Item key="2"  onClick={e=>this.pieClick(e)}><Icon type="pie-chart" />pie-chart</Menu.Item>
              <Menu.Item key="3" onClick={e=>this.barClick(e)}><Icon type="bar-chart" />bar-chart</Menu.Item>
              {/* <Menu.Item key="4" onClick={e => this.areaClick(e)}><Icon type="area-chart" />area-chart</Menu.Item> */}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="down-square-o" /><span>Category</span></span>}
            >
              <Menu.Item key="5">Transportation</Menu.Item>
              <Menu.Item key="6">Food</Menu.Item>
              <Menu.Item key="7">Health</Menu.Item>
              <Menu.Item key="8">Other</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="down-square-o" /><span>Expense</span></span>}
            >
              <Menu.Item key="9"><Link to={`/expense`}>Add Expense</Link></Menu.Item>
              <Menu.Item key="10">Monthly Budget Overview</Menu.Item>
              <Menu.Item key="11">Budget Allocator</Menu.Item>
              <Menu.Item key="12">Earnings</Menu.Item>
            </SubMenu>
            {/* <Menu.Item key="2" style={{ float: 'right' }}><Icon type="poweroff" />Logout</Menu.Item> */}
            <SubMenu key="4" style={{ float: 'right' }} title={<span><Icon type="poweroff" /><span>Logout</span></span>}></SubMenu>
            <SubMenu key="5" style={{ float: 'right' }} title={<span><Icon type="user" /><span>Username</span></span>}></SubMenu>
            <SubMenu key="6"  title={<span><span>Timeline</span></span>}></SubMenu>
            <SubMenu key="7" 
            style={{ float: 'right' }} 
            title={<span>
              <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /></span>}>
            </SubMenu>
            
            <SubMenu key="8" style={{ float: 'right' }} title={<span><ExpenseModal /></span>}></SubMenu>
            </Menu>

          </Header>
        </Layout>
    )
  }
}

export default DefaultHeader;