import React, { Component } from 'react';
import { NavLink, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Whole from './whole';
import MarktChin from '../../utils/MarketChin'
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
      <div className="market-box" style={{ background: "rgb(247, 247, 247)" }}>
        <div className="box-header">
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoa`}
              activeClassName="market-chin"
            >全部
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfob`}
              activeClassName="market-chin"
            >待付款
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoc`}
              activeClassName="market-chin"
            >处理中
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfod`}
              activeClassName="market-chin"
            >待出行
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoe`}
              activeClassName="market-chin"
            >待评价
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfof`}
              activeClassName="market-chin"
            >退款/售后
            </NavLink>
            <span></span>
          </div>
        </div>
        <Switch>
          <MarktChin path={`/market/orderInfoa`} component={Whole} id={1} />
          <MarktChin path={`/market/orderInfob`} component={Whole} id={2} />
          <MarktChin path={`/market/orderInfoc`} component={Whole} />
          <MarktChin path={`/market/orderInfod`} component={Whole} />
          <MarktChin path={`/market/orderInfoe`} component={Whole} />
          <MarktChin path={`/market/orderInfof`} component={Whole} />
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

