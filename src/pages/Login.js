import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Icon, Input, Tooltip, Row, Col } from 'antd';
import { login } from '../store/actions';
import './Login.css';

const LoginForm = ({ form, login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        login(values);
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入手机号码或邮箱!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="手机号或者邮箱"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

const mapStateToAction = {
  login
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(connect(null, mapStateToAction)(LoginForm));


export default () => {
  return (
    <div className="layout-container">
      <div className="lark-form">
        <div className="lark-form-main">
          <div className="lark-form-content">
            <div className="account-slogon">
              <Link to="/">
                Hello, Ink.
              </Link>
            </div>
            <div className="account-login form-pro">
              <WrappedLoginForm />
            </div>
            <div className="third-login">
              <Row>
                <Col span={18} className="third-login-link">
                  <Tooltip title="钉钉登录">
                    <Icon type="dingding" style={{ fontSize: '18px', color: '#3795f9' }} />
                  </Tooltip>
                  <Tooltip title="支付宝登录">
                    <Icon type="alipay-circle" style={{ fontSize: '18px', color: '#17a0e5' }} />
                  </Tooltip>
                  <Tooltip title="微信登录">
                    <Icon type="wechat" style={{ fontSize: '18px', color: '#3cb034' }} />
                  </Tooltip>
                  <Tooltip title="GitHub登录">
                    <Icon type="github" style={{ fontSize: '18px' }} />
                  </Tooltip>
                </Col>
                <Col span={6} className="register-link">
                  <a href="https://github.com/login/oauth/authorize?client_id=472a527e9cf98c40b000&redirect_uri=http://localhost:3000/oauth/redirect">快速注册</a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}