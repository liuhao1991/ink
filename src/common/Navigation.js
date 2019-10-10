import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'antd';
import logo from '../logo.svg';
import './Navigation.css';

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-svg" src={logo} alt="ink"/>
        <span>Ink</span>
      </Link>
    </div>
  )
}

function Nav() {
  return (
    <div className="header-nav">
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="data">
          <Link to="/data">数据安全</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

function LoginAction() {
  return (
    <div className="login-action">
      <Button>
        <Link to="/login">登录</Link>
      </Button>
      <Button type="primary">
        <Link to="/register">快速注册</Link>
      </Button>
    </div>
  )
}

export default () => {
  return (
    <div className="header">
      <div className="layout-container">
        <div className="header-nav-left">
          <Logo />
          <Nav />
        </div>
        <div className="header-nav-right">
          <LoginAction />
        </div>
      </div>
    </div>
  );
}