import React, { Component } from 'react';
import { HomeWrap } from './style';
import { connect } from 'react-redux';
import { Form } from 'antd'

class Home extends Component {
  state = {}
  render () {
    return (
      <HomeWrap>
        <div>
          主页页面
        </div>
      </HomeWrap>
    );
  }
}

// vant 的组件创建
const HomeUI = Form.create({})(Home);

export default connect(
  null,
  null
)(HomeUI)
