import React from 'react';
import { Button, Modal, Form, Input,Select, DatePicker } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const dateFormat = 'DD/MM/YYYY';

const ExpenseModalForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add a new expense"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" >   
          <FormItem label="Title">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input the expense name!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Amount">
          {getFieldDecorator('amount',{
            rules: [{ required: true, message: 'Please enter the expense amount!' }],
          })(<Input  />)}
        </FormItem>
        <FormItem label="Paid With">
          {getFieldDecorator('paidWith', {
            rules: [{ required: true, message: 'Please input mode of payment(Cash or Card)!' }],
          })(
            // <Input />
            <Select
            
            showSearch
            style={{ width: 200 }}
            placeholder="Select a payment mode"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value="CARD" >Card</Option>
          <Option value="CASH">Cash</Option>
         </Select>

          )}
        </FormItem>
        <FormItem label="Category">
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please input mode of payment(Cash or Card)!' }],
          })(
            // <Input />
            <Select
            
            showSearch
            style={{ width: 200 }}
            placeholder="Select a payment mode"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
          <Option value="FOOD" >Food</Option>
          <Option value="TRANSPORTATION" >Transportation</Option>
          <Option value="HEALTH" >Health</Option>
          <Option value="OTHER" >Other</Option>
         </Select>

          )}
        </FormItem>  
          <FormItem label="Date">
          {getFieldDecorator('date',
          //  {
          //   rules: [{ required: true, message: 'Please input the expense name!' }],
          // }
        )(
          <DatePicker defaultValue={moment('01/01/2015', dateFormat)} format={dateFormat} />
          
          )}
        </FormItem>
       </Form>
        </Modal>
      );
    }
  }
);


export default ExpenseModalForm