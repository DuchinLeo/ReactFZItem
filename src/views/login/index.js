import React, { Component } from 'react';
import { LoginWrap } from './style';
import { connect } from 'react-redux';
import { Form } from 'antd'

class Login extends Component {
  state = {}
  render () {
    return (
      <LoginWrap>
        <div>
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
