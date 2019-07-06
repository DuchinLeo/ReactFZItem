import React, { Component } from 'react';
import { CenterWrap } from './style';
import { connect } from 'react-redux';
import { Form, Carousel, Icon, Menu, Dropdown, BackTop, Drawer, Button, message, Skeleton,Collapse } from 'antd'
import './style.scss'
import * as actions from './store/actionCreates'
import { black } from 'ansi-colors';

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      drawType: [0, 1, 2, 3],
      pr: '￥499',
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
            {
              this.state.drawType === 1 ?
                <Drawer
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  placement="bottom"
                  mask
                >
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
                </Drawer>
                :
                this.state.drawType === 2 ?
                  <Drawer
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    placement="bottom"
                    mask
                  >
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
                  </Drawer>
                  :
                  this.state.drawType === 3 ?
                    <Drawer
                      closable={false}
                      onClose={this.onClose}
                      visible={this.state.visible}
                      placement="bottom"
                      mask
                    >
                      <div className="lc">
                        <p>{this.props.mileage.flayerTitle}</p>
                        <span>{this.props.mileage.desc}</span>
                        <Button onClick={this.onClose} type="primary" id="btn_okk">
                          完成
            </Button>
                      </div>
                    </Drawer>
                    :
                    <Drawer
                      closable={false}
                      onClose={this.onClose}
                      visible={this.state.visible}
                      placement="right"
                      width="100%"
                    >
                      <div onClick={this.onClose} type="primary" className="gwc_fh">
                        <Icon type="arrow-left" />
                      </div>
                      <div>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                      </div>
                      <div className="dididi2">
                        <div className="di_letf">
                          <i className="price_gwc">{this.state.pr}</i>
                          <span>
                            <Icon className="di_icon" />
                            <p></p>
                          </span>
                          <span>
                            <Icon className="di_icon" />
                            <p></p>
                          </span>
                          <div className="di_btn1"><p>加入购物车</p></div>
                          <div className="di_btn2"><p>立即购买</p></div>
                        </div>
                      </div>
                    </Drawer>
            }


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
              this.props.serviceTimeInfo.map((item, index) => {
                return (
                  <div className="fw" key={index}>
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
          <div className="mod-selectsku">
            <div className="selectsku_gwc">
              <p> <Icon type="environment" className="selectsku_icon" />
                <span>请选择出发地</span>
                <a>已选 成人</a>
              </p>
              <p>
                <i type="primary" onClick={this.showDrawer.bind(this, 4)}>全部团期 ></i>
              </p>
            </div>
            <div>
              {
                this.props.mn.map((item, index) => {
                  return (
                    <Button key={index} className="gwc_price" onClick={this.onpr.bind(null, item.price,4)}>
                      <p>{item.date}</p>
                      <span>{item.price}</span>
                    </Button>
                  )

                })
              }
            </div>
          </div>
          <div className="mod-rate">
            <i>图文介绍</i>
            <p>此行程为纯自由行，无工作人员陪同，行程给您配备24小时在线客服管家，管家客服提供全天*24小时保姆式服务，为客户出行过程中提供专业、贴心的建议和服务，免除客户出行过程中的后顾之忧。建议客户结伴出行，自由活动期间注意自身以及小孩儿老人安全。</p>
            <p>【畅游北戴河 自营票务】我们拥有更具实力的票务，保证您出行得往返火车票，把控细节，早去下午回让您游玩时间更充分！</p>
              <p>【火车票保障，即使网站显示无票也可顺利出票】但如因政策性原因无法出票，我们会提前和您协商更改为其他车次。</p>
              <p>【取票方式】北京站进站口正前方广场中央旗杆下集合。（北京站三个大字正前方） 送票人会提前一天联系您，请保持手机畅通，注意查收短信。</p>
              <p>【如出的是电子票，会提前通知您并请您携带本人身份证提前一小时到达北京站，在自助取票机处自行取票】&nbsp;</p>
              <p>【一路好心情】乘车赴心驰神往的美丽北戴河海滨！！！</p>
              <p>【温馨提示】行程内所含得火车票车次与网站显示有无余票无关，请您无需担心出票问题，特殊票务需求，烦请您订单备注。</p>
              <p>【温馨提示】行程内所含得火车票车次与网站显示有无余票无关，请您无需担心出票问题，特殊票务需求，烦请您订单备注。</p>
              <p>如遇节假日、暑期周末一票难求的情况下，我们会给下单客户订T/Y字头软席车票。往返车次我们无法保证是您指定车次，节假日或是出行人数较多时，不能保证座位为连号或是同一车厢。</p>

              <Collapse >
            <Panel header="点击查看图片">
            <p><img src="https://img.alicdn.com/imgextra/i4/2200539097548/O1CN01bsskFk25d21WbixQR_!!2200539097548.jpg_q60.jpg_.webp" /></p>
              </Panel>
              </Collapse>

          </div>
          <div className="dididi">
            <div className="di_letf">
              <span><Icon type="aliwangwang" className="di_icon" />
                <p>客服</p></span>
              <span>
                <Icon type="shop" className="di_icon" />
                <p>店铺</p>
              </span>
              <span>
                <Icon type="star" className="di_icon" />
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

  onpr = (price) => {
    this.setState({
      drawType:price,
      pr: price,
      visible: true,
    });

  }

}

// vant 的组件创建
// const CenterUI = Form.create({})(Center);

const { Panel } = Collapse;

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
      serviceTimeInfo: center.serviceTimeInfo,
      mn: center.mn,

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
