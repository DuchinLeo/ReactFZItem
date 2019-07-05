import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Whole from './whole';
import './style.scss'


class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3],
      data: {}
    };
  }
  render () {
    return (
      <div className="market-box">
        <div className="box-header">
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoa/id=${2}`}
              activeClassName="market-chin"
            >全部
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfob/id=${2}`}
              activeClassName="market-chin"
            >待付款
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfo`}
              activeClassName="market-chin"
            >处理中
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfo`}
              activeClassName="market-chin"
            >待出行
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfo`}
              activeClassName="market-chin"
            >待评价
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfo`}
              activeClassName="market-chin"
            >退款/售后
            </NavLink>
            <span></span>
          </div>
        </div>
        <Switch>
          <Route path={`/market/orderInfoa`} component={Whole} />
          <Route path={`/market/orderInfob`} component={Whole} />
          <Route path={`/market/orderInfoc`} component={Whole} />
          <Route path={`/market/orderInfod`} component={Whole} />
          <Route path={`/market/orderInfoe`} component={Whole} />
          <Route path={`/market/orderInfof`} component={Whole} />
          <Redirect to={`/market/orderInfoa`} />
        </Switch>
      </div>
    );
  }

  // static getDerivedStateFromProps (props, state) {
  //   console.log(props)
  //   console.log(state)
  // }

  componentDidMount () {
    // console.log(this.props.orderdata)

    if (this.props.orderdata) {
      window.localStorage.setItem('market', JSON.stringify(this.props.orderdata))
      this.setState({
        data: this.props.orderdata
      })
    } else {
      let data = JSON.parse(window.localStorage.getItem('market'));
      this.setState({
        data
      })
    }
  }

}

export default connect(
  ({ userinfo }) => {
    return {
      orderdata: userinfo.orderdata
    }
  },
  null
)(Market)

