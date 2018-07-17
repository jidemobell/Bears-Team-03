import React from 'react'
import { Table } from 'antd';
import './BoardExpenseTable.css';

const columns = [{
  title: 'Food',
  className: 'column-money',
  dataIndex: 'food',
},{
  title: 'Transport',
  className: 'column-money',
  dataIndex: 'transport',
},{
  title: 'Health',
  className: 'column-money',
  dataIndex: 'health',
},{
  title: 'Other',
  className: 'column-money',
  dataIndex: 'other',
}];


  class MonthlyExpenseAccumulator extends React.Component{


    
    render(){
  
      
      
      const data = [{
        key: '1',
        food: ' ￥ 25.00',
        transport: '￥ 25.00',
        health: '￥ 25.00',
        other: '￥ 25.00'
      }];
      

      return (
        <div>
        <h4>Monthly Expense Accumulator</h4>
        <Table columns={columns} 
        dataSource={data} 
        size="middle" />
        </div>
      )
    }
  }


  export default MonthlyExpenseAccumulator;