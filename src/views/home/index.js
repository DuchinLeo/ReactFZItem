import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { HomeWrap, HeaderWarp, Logo, ImgWarp, IconWarp, Search, HotSearch, Banner, Tickets, Subentry, Benefit } from './style';
import { connect } from 'react-redux';
import { Form, Dropdown, Menu, Input, Carousel } from 'antd'
import './style.scss'
import * as actions from './store/actionCreates'



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        "上海迪士尼乐园门票",
        "日本签证",
        "上海迪士尼",
        "北京故宫博物馆门票",
        "马来西亚签证"
      ],
      bannerList: []
    }
  }

  componentDidMount() {
    this.props.getBannerList();
  }

  render() {
    return (
      <HomeWrap>
        <HeaderWarp className="header">
          <Logo>
            <ImgWarp className="logo" />
            <Dropdown overlay={menu}>
              <IconWarp className="icon" />
            </Dropdown>
          </Logo>
        </HeaderWarp>
        <Search className="search">
          <Input className="search-txt" placeholder="香港迪士尼" />
        </Search>
        <HotSearch className="hot">
          <span>热搜</span>
          <span>{this.state.title[Math.random() * this.state.title.length]}</span>
          <span></span>
        </HotSearch>
        <Banner className="banner">
          <Carousel autoplay className="banner-list">
            {
              this.state.bannerList.map(item => {
                return (
                  <div key={item.id} >
                    <img src={item.img} className="banner-item" />
                  </div>
                )
              })
            }
            {/* <div><img src="https://gw.alicdn.com/tfs/TB108lWeL1G3KVjSZFkXXaK4XXa-1125-352.jpg_790x10000Q75.jpg" alt="" /></div>
            <div>2</div>
            <div>3</div>
            <div>4</div> */}
          </Carousel>
        </Banner>
        <Tickets className="tickets">
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_360x10000.jpg" alt="" />
            <span>机票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_360x10000.jpg" alt="" />
            <span>酒店</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_360x10000.jpg" alt="" />
            <span>火车票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_360x10000.jpg" alt="" />
            <span>汽车票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1aJ4MwHArBKNjSZFLXXc_dVXa-210-126.png_360x10000.jpg" alt="" />
            <span>门票</span>
          </NavLink>
        </Tickets>
        <Subentry className="subentry">
          <NavLink to="/" className="sub">
            <strong>出境游</strong>
            <span>走遍全球</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>境内游</strong>
            <span>精选路线</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>周边游</strong>
            <span>乐享周末</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>飞猪购</strong>
            <span>免税预购</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>签证/签注</strong>
            <span>在现办理</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>境外上网</strong>
            <span>信用免押</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>用车</strong>
            <span>接送9折</span>
          </NavLink>
          <NavLink to="/" className="sub">
            <strong>全部</strong>
            <span>更多推荐</span>
          </NavLink>
        </Subentry>
        <Benefit className="benefit">
          <NavLink to="/" className="benefit-first">
            <img src="https://gw.alicdn.com/tfs/TB1JMPzOsbpK1RjSZFyXXX_qFXa-239-76.png_360x10000.jpg" />
            <span>专属福利天天领</span>
          </NavLink>
          <NavLink to="/" className="benefit-two">
            <img src="https://gw.alicdn.com/tfs/TB17LZBCb9YBuNjy0FgXXcxcXXa-224-100.png_290x10000.jpg" alt="" />
            <span>马上签到</span>
          </NavLink>
        </Benefit>
      </HomeWrap>
    );
  }
}

const MapBannerList = dispatch => ({
  getBannerList() {
    dispatch(actions.asyncBannerList());
  }
})
// vant 的组件创建
const HomeUI = Form.create({})(Home);

const menu = (
  <Menu className="menu">
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1p03kjWagSKJjy0FhXXcrbFXa-48-48.png" />
        <NavLink to="/" className="menu-span">我的订单</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1TDyrdogQMeJjy0FgXXc5dXXa-48-48.png" />
        <NavLink to="/" className="menu-span">我的行程</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1p3umdgoQMeJjy1XaXXcSsFXa-48-48.png" />
        <NavLink to="/" className="menu-span">我的收藏</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1NWupdgMPMeJjy1XbXXcwxVXa-48-48.png" />
        <NavLink to="/" className="menu-span">我的红包</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1hdzlDSrqK1RjSZK9XXXyypXa-48-48.png" />
        <NavLink to="/" className="menu-span">会员中心</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1h4utdgoQMeJjy0FoXXcShVXa-48-48.png" />
        <NavLink to="/" className="menu-span">购物车</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1XAOHRpzqK1RjSZFvXXcB7VXa-48-48.png" />
        <NavLink to="/" className="menu-span">联系飞猪</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <img src="https://gw.alicdn.com/tfs/TB12O86bXYqK1RjSZLeXXbXppXa-44-20.png" className="menu-img" />
    </Menu.Item>
  </Menu>
);
export default connect(
  null,
  MapBannerList
)(HomeUI)
