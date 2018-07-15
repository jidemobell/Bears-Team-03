import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

const FormItem = Form.Item;

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
          <Form layout="vertical">
            <FormItem label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the expense name!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Paid With">
              {getFieldDecorator('paidWith', {
                rules: [{ required: true, message: 'Please input mode of payment(Cash or Card)!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Amount">
              {getFieldDecorator('amount',{
                rules: [{ required: true, message: 'Please enter the expense amount!' }],
              })(<Input  />)}
            </FormItem>
            <FormItem label="Category">
              {getFieldDecorator('category',{
                rules: [{ required: true, message: 'Select a category' }],
              })(<Input  />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);


export default ExpenseModalForm