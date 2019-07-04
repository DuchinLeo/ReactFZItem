import React, { Component } from 'react';
import { CenterWrap } from './style';
import { connect } from 'react-redux';
import { Form, Carousel, Icon,  Menu, Dropdown,BackTop, Drawer, Button} from 'antd'
import  './style.scss'
import * as actions from './store/actionCreates'

class Center extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible: false,
      users:[],
      banner:[],
      price:[],
      title:[],
      sold:[],
      brand:[],
      brand1:[],
      coupon:[]
    }
  }



  componentDidMount() {
    // this.props.hanldBannerlist()

    this.axios
    .get("http://localhost:3001/data")
    .then((response) => {
        console.log(response.data);
      this.setState({
        users: response.data,
        banner: response.data.banner.data.pics,
        price:response.data.price.data.mainPrice,
        title:response.data.title.data.itemTitle,
        sold:response.data.sold.data,
        brand:response.data.brand.data,
        brand1:response.data.brand.data.cells,
        coupon:response.data.coupon.data.cells

      });
    console.log(this.state.coupon)
    })
  }

  render () {
    return (
      <CenterWrap>
      <div>
      <Carousel>
      {this.state.banner.map((item)=>{
        return (
          <img src={item} key="item" className="item_img" />
        )
      })}
  </Carousel>
  <div className="zy">自由行</div>
  <Dropdown overlay={menu}  placement="bottomLeft">
    <a className="ant-dropdown-link">
    <Icon type="appstore"  />
    </a>
  </Dropdown>
  <div className="mod-price">
      <p>￥<span>{this.state.price.priceText}</span></p>
  </div>
  <BackTop />
      <div className="mod-title">
      <span className="title">{this.state.title}</span>
      </div>
      <div className="mod-sold">
        <ul>
          <li>{this.state.sold.score}</li>
          <li>{this.state.sold.comment}</li>
          <li>{this.state.sold.sold}</li>
        </ul>
      </div>
      <div id="brand">
        <div type="primary" onClick={this.showDrawer} >
            <div className="mod-brand">
          <img src={this.state.brand.titleIcon} className="brand_fz"/>
            <div className="brand_neet">
            {this.state.brand1.map((item)=>{
        return (
          <div className="icon_get" >
          <img src={item.icon} key="item"/>
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
      <div className="brand_top"> <img src={this.state.brand.titleIcon} className="brand_fw"/>|
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
        </Drawer>
      </div>

      <div className="mod-itemextra">
        <div type="primary" onClick={this.showDrawer}>
        <div className="cell-arrow">
          <span>领劵</span>
          {this.state.coupon.map((item)=>{
        return (
          <div className="arrow_lj">
          <img src={item.icon} key="item"  className="itemextra_icon"/>
          <p>{item.title}</p>
          <span className="brand_jt1">></span>
          </div>
        )
      })}
        </div>
        </div>

      </div>

      </div>
      </CenterWrap>
    )

  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

}

// vant 的组件创建
// const CenterUI = Form.create({})(Center);

const menu = (
  <Menu>
  <Menu.Item>
    <a>
      购物车
    </a>
  </Menu.Item>
  <Menu.Item>
    <a>
      购物车
    </a>
  </Menu.Item>
  <Menu.Item>
    <a>
      购物车
    </a>
  </Menu.Item>
  </Menu>
  )



export default connect(
  ({center}) => (

    //   bannerlist: center.bannerlist
    // } {
      null
  ),
  // (dispatch, props) => ({
  //   hanldBannerlist() {
  //     dispatch(actions.getBannerList())
  //   }
  // })
)(Center)
