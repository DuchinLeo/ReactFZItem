import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


class AuthRoute extends Component {
  render () {
    let { component: Component, userinfo, ...rest } = this.props;
    let user = JSON.parse(window.localStorage.getItem('user'))
    return (
      <Route
        {...rest}
        render={routerProps => {
          // 如果存在登陆的信息，就返回原来的组件,登陆的信息分别存在仓库跟本地了，为了不一刷新就刷掉，所以就 || 本地
          if (userinfo.username || user.username) {
            return <Component {...routerProps} />
          } else {
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: { redirect: routerProps.match.url } // 带跳转的地址过去
                }}
              />
            )
          }
        }}
      />
    )
  }
}

export default connect(
  ({ userinfo }) => {
    return {
      userinfo
    }
  },
  null
)(AuthRoute);
