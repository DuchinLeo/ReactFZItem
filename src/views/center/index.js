import React, { Component } from 'react';
import { CenterWrap } from './style';
import { connect } from 'react-redux';
import { Form, Carousel, Icon, Menu, Dropdown, BackTop, Drawer, Button, message } from 'antd'
import './style.scss'
import * as actions from './store/actionCreates'

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      drawType: [1, 2, 3]
    }

  }

  componentDidMount() {
    //获取数据
    this.props.hanldBannerlist()

    console.log(this.props.bannerlist)

    this.setState({
      aaa: '11'
    }, () => {
      console.log(this.props.bannerlist)
    })


  }

  render() {
    return (
      <CenterWrap>
        <div>
          <Carousel>
            {this.props.banner.map((item) => {
              return (
                <img src={item} key="item" className="item_img" />
              )
            })}
          </Carousel>
          <div className="zy">自由行</div>
          <Dropdown overlay={menu} placement="bottomLeft">
            <a className="ant-dropdown-link">
            <Icon type="shopping-cart" />
            </a>
          </Dropdown>
          <div className="mod-price">
            <p>￥<span>{this.props.price.priceText}</span></p>
          </div>
          <BackTop />
          <div className="mod-title">
            <span className="title">{this.props.title}</span>
          </div>
          <div className="mod-sold">
            <ul>
              <li>{this.props.sold.score}</li>
              <li>{this.props.sold.comment}</li>
              <li>{this.props.sold.sold}</li>
            </ul>
          </div>
          <div id="brand">
            <div type="primary" onClick={this.showDrawer.bind(this, 1)} >
              <div className="mod-brand">
                <img src={this.props.brand.titleIcon} className="brand_fz" />
                <div className="brand_neet">
                  {this.props.brand1.map((item, index) => {
                    return (
                      <div className="icon_get" key={index}  >
                        <img src={item.icon} key="item" />
                        <span>{item.title}</span>
                      </div>
                    )
                  })}
                </div>
                <span className="brand_jt">></span>
              </div>
            </div>
            <Drawer
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
              placement="bottom"
              mask
            >
              {
                this.state.drawType === 1 ?
                  <div>
                    <div className="brand_top"> <img src={this.props.brand.titleIcon} className="brand_fw" />|
      <span>服务说明</span></div>
                    <div className="brand_title">
                      <p>更改则赔付</p>
                      <p>订单生效后,商家原因更改订单,商家需向买家支付违约金。</p>
                      <p>承诺不加价</p>
                      <p>订单付款后,商家不得因自身及第三方原因要求加价,如商家违规,按《飞猪规则》每次扣4分处理。</p>
                      <p>取消则赔付</p>
                      <p>订单生效后,因商家原因取消订单的,商家应按商品详情页面“退改规则"/取消政策模块的规定向买家支付违约金。</p>
                      <p>注意事项</p>
                      <p>以上保障内容如与《飞猪规则》或《度假商品服务保障标准》有冲突的,以《飞猪规则》或《度假商品服务保障标》</p>
                    </div>
                    <Button onClick={this.onClose} type="primary" id="btn_ok">
                      完成
            </Button>
                  </div>
                  :
                  this.state.drawType === 2 ?
                    <div>
                      {this.props.shopCoupons.map((item, index) => {
                        return (
                          <div className="mod-coupons" key={index}>
                            <div className="mod-coupons_left">
                              <i>￥</i><span>{item.couponPrice}</span>
                              <p>{item.conditions}</p>
                              <p>{item.validDate}</p>
                            </div>
                            <button type="primary" className="action-wrap" onClick={success} >
                              {item.buttonDesc}
                            </button>
                          </div>
                        )
                      }
                      )}
                      <Button onClick={this.onClose} type="primary" id="btn_ok">
                        完成
            </Button>
                    </div>
                    : <div className="lc">
                      <p>{this.props.mileage.flayerTitle}</p>
                      <span>{this.props.mileage.desc}</span>
                      <Button onClick={this.onClose} type="primary" id="btn_okk">
                        完成
            </Button>
                    </div>
              }


            </Drawer>
          </div>

          <div className="mod-itemextra">
            <div type="primary" onClick={this.showDrawer.bind(this, 2)}>
              <div className="cell-arrow">
                <span>领劵</span>
                {this.props.coupon.map((item, index) => {
                  return (
                    <div className="arrow_lj" key={index}>
                      <img src={item.icon} key="item" className="itemextra_icon" />
                      <p>{item.title}</p>
                      <span className="brand_jt1">></span>
                    </div>
                  )
                })}
              </div>
            </div>
            <div type="primary" onClick={this.showDrawer.bind(this, 3)} className="itemextra-cx">
              <div className="cell-arrow">
                <span>促销</span>
                <div className="arrow_lj">
                  <img src={this.props.mileage.icon} className="itemextra_icon_lc" />
                  <p>{this.props.mileage.title}</p>
                  <span className="brand_jt2">></span>
                </div>
              </div>
            </div>
          </div>
          <div className="mod-infocell-container">
            <span>服务</span>
            {
              this.props.serviceTimeInfo.map((item, idnex) => {
                return (
                  <div className="fw" key={idnex}>
                    <img src={item.contents.map((item) => {
                      return (
                        item.src
                      )
                    })} className="fw_img" title=" " />
                    <p className="fw_p">{
                      item.contents.map((item) => {
                        return (
                          item.value
                        )
                      })

                    }</p>
                  </div>

                )
              })
            }
          </div>
          <div className="dididi">
          <div className="di_letf">
            <span><Icon type="aliwangwang" className="di_icon" />
            <p>客服</p></span>
              <span>
              <Icon type="shop"  className="di_icon" />
              <p>店铺</p>
              </span>
              <span>
              <Icon type="star"  className="di_icon" />
              <p>收藏</p>
              </span>
              <div className="di_btn1"><p>加入购物车</p></div>
              <div className="di_btn2"><p>立即购买</p></div>
            </div>
          </div>
        </div>
      </CenterWrap>
    )

  }
  showDrawer = type => {
    this.setState({
      drawType: type,
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };



}

// vant 的组件创建
// const CenterUI = Form.create({})(Center);


const success = () => {
  message.success('领取成功');
}


const menu = (
  <Menu>
    <Menu.Item>
      <a>耶 复活了</a>
    </Menu.Item>
    <Menu.Item>
      <a>失败了</a>
    </Menu.Item>
    <Menu.Item>
      <a>失败了</a>
    </Menu.Item>
    <Menu.Item>
      <a>失败了</a>
    </Menu.Item>
  </Menu>
)



export default connect(
  //取出仓库的数据
  ({ center }) => (
    {
      bannerlist: center,
      banner: center.banner,
      price: center.price,
      title: center.title,
      sold: center.sold,
      brand: center.brand,
      brand1: center.brand1,
      coupon: center.coupon,
      shopCoupons: center.shopCoupons,
      mileage: center.mileage,
      serviceTimeInfo: center.serviceTimeInfo

    }
  ),
  //取出仓库的方法
  (dispatch, props) => ({

    hanldBannerlist() {
      dispatch(actions.getBannerList())
    }
  })
  // 放到这个组件里面 这个Center组件里面拿方法跟数据,用this.props.数据或者方法
)(Center)
