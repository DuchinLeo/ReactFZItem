import React, { Component } from 'react'
import Loadable from 'react-loadable';
import AuthRoute from './utils/Auth';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SpinWrap } from './style';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;

const Home = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/home'),
  // 加载中的提示组件
  // loading: () => <SpinWrap className="test1" size="large" style={{ width: '10%', height: '10%' }} />
  loading: () => <SpinWrap indicator={antIcon} />
});

const Login = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/login'),
  // 加载中的提示组件
  loading: () => <SpinWrap indicator={antIcon} />
});

const Market = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/market'),
  // 加载中的提示组件
  loading: () => <SpinWrap indicator={antIcon} />
})

export default class App extends Component {
  state = {}
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <AuthRoute path="/market" component={Market} />
          <Route path="/" component={Home} />
        </Switch>
      </Router >
    );
  }
}
