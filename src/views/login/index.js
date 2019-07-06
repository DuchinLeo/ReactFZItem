import React, { Component } from 'react';
import { LoginWrap } from './style';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, message } from 'antd';
import './style.scss'
import * as actions from './store/actionCreates'

message.config({
  top: 500,
  duration: 1,
  maxCount: 3,

});

class Login extends Component {

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <LoginWrap className="login-box-a">
        <div className="box"></div>
        <div className="messge"></div>
        <div className="form-box">
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
          // labelCol={{ span: 2 }} wrapperCol={{ span: 21 }}
          >
            <Form.Item
              className="login-box"
            // label=" " colon={false}
            >
              {getFieldDecorator('username',
                {
                  rules:
                    [
                      {
                        required: true,
                        message: '请输入账号'
                      }
                    ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="手机号/邮箱/账户名"
                    className="input-box"
                  />,
                )}
            </Form.Item>
            <Form.Item
              className="login-box"
              // label=" " colon={false}
              style={{ marginTop: '10%' }}
            >
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true, message: '请输入密码'
                  },
                  {
                    max: 10,
                    min: 6,
                    message: '密码长度为6~10'
                  }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{
                    color: 'rgba(0,0,0,.25)',
                    outline: 'none'
                  }} />}
                  type="password"
                  placeholder="请输入密码"
                  className="input-box"
                />,
              )}
            </Form.Item>

            <Form.Item
              className="item-link login-box"
              style={{ margin: "5% 0" }}
            // label=" "
            // colon={false}
            >
              <a
                className="login-form-forgot"
                href="/"
                style={{ marginRight: "100px" }}
                alt="短信验证码登陆"
              >
                短信验证码登陆
            </a >
              <a className="login-form-forgot" href="/"
                style={{ float: "right" }}
                alt="免费注册"
              >
                免费注册
            </a>

            </Form.Item>
            <Form.Item
              className="login-box"
            // label=" " colon={false}
            >
              <Button type="primary" htmlType="submit" className="login-form-button"
              >
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LoginWrap>
    );
  }


  handleSubmit = e => {
    e.preventDefault();
    // 表单验证
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 验证成功
        // console.log('Received values of form: ', values);
        // console.log(values);
        this.props.handleUserinfo(values);
      }
    });
  };

  // componentDidMount () {
  //   this.props.handleSearch()
  // }
}

// const mapStateToProps = ({ login }) => (
//   {
//     username: login.username
//   }
// )

const mapDispathToProps = (dispatch, props) => ({
  handleUserinfo (values) {
    dispatch(actions.asyncUserinfo(values, props))
  }
  // handleSearch () {
  //   dispatch(actions.asyncSearch())
  // }
})

// vant 的组件创建
const LoginUI = Form.create({})(Login);

export default connect(
  ({ userinfo }) => ({
    user: userinfo.username
  }),
  mapDispathToProps
)(LoginUI)
