import React, { Component } from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox,Card, Layout } from 'antd';
//import DefaultHeader from '../../container/Header/Header';
const FormItem = Form.Item;
const {Header,Content} = Layout;



class Login extends Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
   
        
  render() 
  {
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
          </Header>
          <Content className="login-container">
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
       <Card title="Login"  style={{ width: 300 }}>
       <Form onSubmit={this.handleSubmit} className="login-form form-style" >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
  </Card>
     </div>
      </Content>
      </Layout>  
    );
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm