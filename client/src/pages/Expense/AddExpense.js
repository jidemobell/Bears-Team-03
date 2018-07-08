import React from 'react';
import 'antd/dist/antd.css';
import { Layout,Card ,Form, Button, Input, Menu, Icon } from 'antd';
import LinkHeader from '../../container/Header/LinkHeader';
const {Header,Content} = Layout
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;


class Expense extends React.Component {
  
  
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
   
  render() {
    const { getFieldDecorator } = this.props.form;
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Layout>
        <LinkHeader />
        <Content className="reg-container" >
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
        <Card title="Create Expense"  style={{ width: 450 }}  >
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
            <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Create</Button>
        </FormItem>
          </Form>
      </Card>
       </div>
      </ Content>
      </ Layout>
    );
  }
}

const AddExpense = Form.create()(Expense)

export default AddExpense