import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class MarktChin extends Component {
  render () {
    let { component: Component, id, orderAll, orderObligation, ...rest } = this.props;
    console.log(id)
    // 深拷贝一份仓库的数据

    if (orderAll) {
      window.localStorage.setItem('orderAll', JSON.stringify({ orderAll }))
    } else {
      var orderAlls = JSON.parse(window.localStorage.getItem('orderAll'))
    }
    if (orderObligation) {
      window.localStorage.setItem('orderObligation', JSON.stringify({ orderObligation }))
    } else {
      var orderObligations = JSON.parse(window.localStorage.getItem('orderObligation'))
    }
    return (
      <Route
        {...rest}
        render={routeProps => {
          if (id === 1) {
            return (
              <Component {...routeProps} data={orderAll} />
            )
          }
          if (id === 2) {
            return (
              <Component {...routeProps} data={orderObligation} />
            )
          }
        }}
      />
    );
  }
}

export default connect(
  ({ userinfo }) => {
    return {
      orderAll: userinfo.orderAll,
      orderObligation: userinfo.orderObligation
    }
  },
  null
)(MarktChin);

