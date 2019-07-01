import React, { Component } from 'react';
import { LoginWrap } from './style';
import { connect } from 'react-redux';
import { Form } from 'antd'
import './style.scss'

class Login extends Component {
  state = {}
  render () {
    return (
      <LoginWrap>
        <div className="box">
          登陆页面
        </div>
      </LoginWrap>
    );
  }
}

// vant 的组件创建
const LoginUI = Form.create({})(Login);

export default connect(
  null,
  null
)(LoginUI)
