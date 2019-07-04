import React, { Component } from 'react';
import { Icon } from 'antd'
import './style.scss'
import { connect } from 'react-redux';

class Whole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "id": "",
          "shop": "",
          "state": "",
          "title": "",
          "form": "",
          "formval": "",
          "forms": "",
          "formsval": "",
          "tripdate": "",
          "price": ""
        }
      ]
    };

  }
  render () {
    return (
      this.state.data.map((item, index) => {
        return (
          <div className="order-Info-whole">

            <div className="whole-box">
              <div className="whole-box-top">
                <div className="box-top-left">
                  {/* 深圳城隍旅游专营店 */}
                  {item && item.shop}
                  <Icon type="right" className="box-top-left-icon" />
                </div>
                <span className="box-top-right" >
                  {/* 交易关闭 */}
                  {item && item.state}
                </span>
              </div>
              <div className="whole-box-inner">
                <div className="whole-box-content">
                  <div className="whole-left">
                    <img src="https://gw.alicdn.com/tfs/TB1jKs.a9BYBeNjy0FeXXbnmFXa-48-48.png" alt="深圳城隍旅游专营店" />
                  </div>
                  <div className="whole-center">
                    <div className="whole-center-title">
                      {/* 【全体票】深圳世界之窗门票 全天包 含夜场 日场成人票 */}
                      {item && item.title}
                    </div>
                    <p>门票价格区间:<span>
                      {/* 区间4  */}
                      {item && item.formval}
                    </span>门票种类：<span>
                        {/* 成人票  */}
                        {item && item.formsval}
                      </span>
                    </p>
                    <p>出行日期
                  <span>
                        {/* 2019-07-12 */}
                        {item && item.tripdate}
                      </span>
                    </p>
                  </div>
                  <div className="whole-right">
                    <span>￥</span>
                    <span>
                      {/* 250.00 */}
                      {item && item.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="whole-box-price">
                <span>合计：</span>￥<span></span><span>210</span>
              </div>
              <div className="whole-box-del">
                <button>删除订单</button>
              </div>
            </div>
          </div>
        )
      })

    );

  }

  /*
  *组件不会重新渲染，待尝试，路由使用高阶组件，通过高阶组件内部进行判断url地址的id变化，再带不同的内容过去
  
  */


  static getDerivedStateFromProps (props, state) {
    // console.log(props)
    console.log(state.data)
    // console.log(state.data[0].id)
  }

  componentDidMount () {
    // 把字符串分隔成数组，再倒序，拿第一个
    let id = this.props.location.search.split('=').reverse()[0];
    // console.log(id)
    if (this.props.orderdata) {
      window.localStorage.setItem('market', JSON.stringify(this.props.orderdata))
      // console.log(id)
      switch (id) {
        case 1:
          this.setState({
            data: [this.props.orderdata[0]]
          })
          break;
        case 2:
          this.setState({
            data: [this.props.orderdata[1]]
          })
          break;
        default:
          this.setState({
            data: [this.props.orderdata[1]]
          })
      }
      console.log(this.state.data)
    } else {
      let orderdata = JSON.parse(window.localStorage.getItem('market'));
      // console.log(orderdata)
      switch (id) {
        case 1:
          this.setState({
            data: [orderdata[0]]
          })
          break;
        case 2:
          this.setState({
            data: [orderdata[1]]
          })
          break;
        default:
          this.setState({
            data: [orderdata[1]]
          })
      }
      console.log(this.state.data)
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
)(Whole);
