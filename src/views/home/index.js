import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { HomeWrap, HeaderWarp, Logo, ImgWarp, IconWarp, Search, HotSearch, Banner } from './style';
import { connect } from 'react-redux';
import { Form, Dropdown, Menu, Input, Carousel } from 'antd'
import './style.scss'

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
      ]
    };
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
            <div>
              <h1>1</h1>
            </div>
            <div>
              <h1>2</h1>
            </div>
            <div>
              <h1>3</h1>
            </div>
            <div>
              <h1>4</h1>
            </div>
            <div>
              <h1>5</h1>
            </div>
            <div>
              <h1>6</h1>
            </div>
            <div>
              <h1>7</h1>
            </div>
          </Carousel>
        </Banner>
      </HomeWrap>
    );
  }
}
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
  null
)(HomeUI)
