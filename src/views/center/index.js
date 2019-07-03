import React, { Component } from 'react';
import { CenterWrap } from './style';
import { connect } from 'react-redux';
import { Form, Carousel, Icon,  Menu, Dropdown,BackTop, Drawer, Button} from 'antd'
import  './style.scss'

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
    }
  }



  componentDidMount() {
    this.axios
      .get("http://localhost:3001/data")
      .then((response) => {
          console.log(response.data);
        this.setState({
          users: response.data,
          banner: response.data.banner.data.pics,
          price:response.data.price.data.mainPrice,
          title:response.data.title.data.itemTitle,
          sold:response.data.sold.data

        });
      console.log(this.state.price)
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
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          placement="bottom"
          mask
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
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
const CenterUI = Form.create({})(Center);

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
  null,
  null
)(CenterUI)
