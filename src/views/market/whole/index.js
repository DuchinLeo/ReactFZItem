import React, { Component } from 'react';
import { Icon } from 'antd'
import './style.scss'

class Whole extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.history.length)
  }
  render () {
    return (
      <div className="order-Info-whole">
        <div className="whole-box">
          <div className="whole-box-top">
            <div className="box-top-left">深圳城隍旅游专营店
              <Icon type="right" className="box-top-left-icon" />
            </div>
            <span className="box-top-right">交易关闭</span>
          </div>
          <div className="whole-box-inner">
            <div className="whole-box-content">
              <div className="whole-left"><img src="https://gw.alicdn.com/tfs/TB1jKs.a9BYBeNjy0FeXXbnmFXa-48-48.png" alt="深圳城隍旅游专营店" /></div>
              <div className="whole-center">
                <div className="whole-center-title">【全体票】深圳世界之窗门票 全天包 含夜场 日场成人票</div>
                <p>门票价格去见:<span>区间4 </span>门票种类：<span>成人票 </span></p>
                <p>出行日期<span>2019-07-12</span></p>
              </div>
              <div className="whole-right">
                <spn>￥</spn>
                <spn>250.00</spn>
              </div>
            </div>
          </div>
          <div className="whole-box-price">合计</div>
          <div className="whole-box-del">删除订单</div>
        </div>
      </div>
    );
  }
}

export default Whole;
