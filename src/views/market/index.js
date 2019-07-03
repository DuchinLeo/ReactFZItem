import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';

import Whole from './whole';
import Obligation from './obligation';
import './style.scss'

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [1, 2, 3]
    };
  }
  render () {
    return (
      <div className="market-box">
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
              to={`/market/orderInfob/id=${1}&is=${2}`}
              activeClassName="market-chin"
            >待付款
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoc/id=${1}&is=${2}`}
              activeClassName="market-chin"
            >处理中
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfod/id=${1}&is=${2}`}
              activeClassName="market-chin"
            >待出行
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfoe/id=${1}&is=${2}`}
              activeClassName="market-chin"
            >待评价
            </NavLink>
            <span></span>
          </div>
          <div className="box-header-chin">
            <NavLink
              to={`/market/orderInfof/id=${1}&is=${2}`}
              activeClassName="market-chin"
            >退款/售后
            </NavLink>
            <span></span>
          </div>
        </div>
        <Switch>
          <Route path={`/market/orderInfoa`} component={Whole} />
          <Route path={`/market/orderInfob`} component={Obligation} />
          <Route path={`/market/orderInfoc`} component={Obligation} />
          <Route path={`/market/orderInfod`} component={Obligation} />
          <Route path={`/market/orderInfoe`} component={Obligation} />
          <Route path={`/market/orderInfof`} component={Obligation} />
          <Redirect to='/market/orderInfoa' />
        </Switch>
      </div>
    );
  }
}


export default Market;
