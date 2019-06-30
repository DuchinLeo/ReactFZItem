import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

class AuthRoute extends Component {
  render () {
    let { component: Component, user, ...rest } = this.props;
    return (
      <React

        render={routerProps => {
          return <Component {...routerProps} />;
        }}
      />
    )
  }
}

export default connect(
  ({ user }) => {
    return {
      user
    }
  },
  null
)(AuthRoute);
