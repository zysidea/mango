import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import './login.css';


const FormItem = Form.Item;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const username = values.username;
        const password = values.password;
        if (username === '123' && password === '123') {
          Router.push('/index');
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="root">
        <p className="welcome">Welcome to this website!</p>
        <div className="login">
          <Form onSubmit={this.login} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [
                  {
                    require: true,
                    message: 'Please input your username!'
                  }
                ]
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="username" />
              )}
            </FormItem>

            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  {
                    require: true,
                    message: 'Please input your password!'
                  }
                ]
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="password" />
              )}
            </FormItem>


            <Button type="primary" htmlType="submit" className="login-form-button">
          登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

LoginPage.PropTypes = {
  form: PropTypes.object.isRequired
};

const Login = Form.create()(LoginPage);
export default Login;
