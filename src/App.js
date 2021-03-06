import React, { Component } from 'react'
import Loadable from 'react-loadable';
import AuthRoute from './utils/Auth';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { SpinWrap } from './style';

const Home = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/home'),
  // 加载中的提示组件
  loading: () => <SpinWrap size="large" />
});

const Login = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/login'),
  // 加载中的提示组件
  loading: () => <div><SpinWrap size="large" />
  </div>
});

export default class App extends Component {
  state = {}
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router >
    );
  }
}
