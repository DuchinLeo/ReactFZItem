import React, { Component } from 'react';
import { Icon, Drawer, Button } from 'antd'
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
      ,
      visible: false
    }
  }

  showDrawer = () => {
    if (this.state.visible) {
      this.setState({
        visible: false
      });
    } else {
      this.setState({
        visible: true
      });
    }
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render () {
    return (
      <div style={{ position: "relative" }}>
        {
          this.state.data.map((item, index) => {
            return (
              <div className="order-Info-whole" key={item.id}>
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
                    <button onClick={this.locationreload}>删除订单</button>
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          this.state.data[0].id === '1' ?
            <div className="footer" onClick={this.showDrawer}>
              <div className="footer-img">
                <img src="//img.alicdn.com/tfs/TB1rKiKliqAXuNjy1XdXXaYcVXa-40-40.png" alt="" />
              </div>
              <span className="footer-text">全部订单</span>
            </div>

            : ''
        }
        {
          <Drawer
            // title="Basic Drawer"
            placement="bottom"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            maskClosable={true}
            className="aa"
            height={600}
          >
            <div className="drawer-box">
              <h2>筛选订单</h2>
              <div className="drawer-box-btu">
                <div><Button>全部订单</Button></div>
                <div><Button>机票</Button></div>
                <div><Button>酒店</Button></div>
                <div><Button>火车票</Button></div>
                <div><Button>度假</Button></div>
                <div><Button>门票</Button></div>
                <div><Button>汽车票</Button></div>
                <div><Button>用车</Button></div>
                <div><Button>欧铁</Button></div>
                <div><Button>飞猪购</Button></div>
              </div>
            </div>
          </Drawer>
        }
      </div>
    );

  }

  /*
  *组件不会重新渲染，待尝试，路由使用高阶组件，通过高阶组件内部进行判断url地址的id变化，再带不同的内容过去

  */
  locationreload = () => {
    if (this.state.data[0].id === 1) {
      window.localStorage.removeItem('orderAll')

    }
    if (this.state.data[0].id === 2) {
      window.localStorage.removeItem('orderObligation')
    }
  }

  static getDerivedStateFromProps (props, state) {
    console.log(props)
    if (props.data) {
      return {
        data: props.data
      };
    }
    if (!props.data) {
      let data = JSON.parse(window.localStorage.getItem('data'))
      return {
        data: data
      };
    }
    return null;
  }

  componentDidMount () {
    if (this.props.data) {
      window.localStorage.setItem('data', JSON.stringify(this.props.data))
    }
  }
}

export default connect(
  ({ userinfo }) => {
    return {
      orderderAll: userinfo.orderAll,
      orderObligation: userinfo.orderObligationl
    }
  },
  null
)(Whole);
