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
    }
    if (orderObligation) {
      window.localStorage.setItem('orderObligation', JSON.stringify({ orderObligation }))
    }
    return (
      <Route
        {...rest}
        render={routeProps => {
          if (id) {
            if (id === 1) {
              if (orderAll) {
                return (
                  <Component {...routeProps} data={orderAll} />
                )
              } else {
                var orderAlls = JSON.parse(window.localStorage.getItem('orderAll'))
                return (
                  <Component {...routeProps} data={orderAlls.orderAll} />
                )
              }

            }
            if (id === 2) {
              if (orderObligation) {
                return (
                  <Component {...routeProps} data={orderObligation} />
                )
              } else {
                var orderObligations = JSON.parse(window.localStorage.getItem('orderObligation'))
                return (
                  <Component {...routeProps} data={orderObligations.orderObligation} />
                )
              }
            }
          } else {
            return (
              <div className="order-null-box">
                <div className="order-null">
                  <img src="//gw.alicdn.com/tfs/TB1QXlEQXXXXXcNXFXXXXXXXXXX-320-320.png"
                    alt="网络异常"
                    title="没有订单哦"
                    className="order-null-img"
                  />
                  <span className="order-null-text">亲，暂无相关订单
                  </span>
                  <div className="order-null-refresh"
                    onClick={
                      // 刷新页面
                      this.locationreload
                    }>
                    再试一次
                  </div>
                </div>
              </div>
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

