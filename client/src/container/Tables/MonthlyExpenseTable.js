
import React from 'react'
import { Table,Layout } from 'antd';
import LinkHeader from '../Header/LinkHeader';

const {Content} = Layout;

const columns = [{
  title: 'Date',
  className: 'column-1',
  dataIndex: 'date',
},{
  title: 'Description',
  className: 'column-2',
  dataIndex: 'name',
},{
  title: 'Paid With',
  className: 'column-3',
  dataIndex: 'paidWith',
},{
  title: 'Amount',
  className: 'column-4',
  dataIndex: 'amount',
},{
  title: 'Category',
  className: 'column-5',
  dataIndex: 'category',
}
];


  class MonthlyExpenseTable extends React.Component{

    render(){
  
      const data = [{
        key: '1',
        date: 'from db',
        name: 'from db',
        paidWith: 'from db',
        amount: 'from db',
        category: 'from db'
      },{
        key: '2',
        date: 'from db',
        name: 'from db',
        paidWith: 'from db',
        amount: 'from db',
        category: 'from db'
      }
    ];
      

      return (
        <Layout>
        {/* <LinkHeader boardUser={this.props.user === undefined ? '': this.props.user.userName}/> */}
        <LinkHeader boardUser={this.props.user === undefined ? '': this.props.user.userName}/>
        <Content className="reg-container" >
        <div style={{ background: '#fff', padding: 24, minHeight: 380,marginTop:-100 }}>
        {/* <h4>Monthly Expense Accumulator</h4> */}
      
        <Table columns={columns} 
        dataSource={data} 
         />
      </div>
      </ Content>
      </ Layout>
      )
    }
  }

export default MonthlyExpenseTable;