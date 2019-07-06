import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { HomeWrap, HeaderWarp, Logo, ImgWarp, IconWarp, Search, HotSearch, Banner, Tickets, Subentry, Benefit, Find, Travel, TravelList, TitleWarp, Live } from './style';
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
      ],
      bannerList: [],
      find: [],
      ticket: [],
      sift: [],
      travel: [],
      live: []
    }
  }

  componentDidMount() {
    this.props.getBannerList();
    this.props.findData();
    this.props.ticketData();
    this.props.siftData();
    this.props.travelData();
    this.props.liveData();
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
          <span className="title">{this.state.title}</span>
        </HotSearch>
        <Banner className="banner">
          <Carousel autoplay className="banner-list">
            {
              this.props.bannerList.map(item => {
                return (
                  <div key={item.id} >
                    <img src={item.img} ait="" title="" className="banner-item" />
                  </div>
                )
              })
            }
          </Carousel>
        </Banner>
        <Tickets className="tickets">
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1JCcHCqmWBuNjy1XaXXXCbXXa-210-126.png_360x10000.jpg" alt="" />
            <span>机票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1s51ECuOSBuNjy0FdXXbDnVXa-210-126.png_360x10000.jpg" alt="" title="" />
            <span>酒店</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1BNE_wrZnBKNjSZFrXXaRLFXa-210-126.png_360x10000.jpg" alt="" title="" />
            <span>火车票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1pN01wsUrBKNjSZPxXXX00pXa-210-126.png_360x10000.jpg" alt="" title="" />
            <span>汽车票</span>
          </NavLink>
          <NavLink to="/" className="tickets-item">
            <img src="https://gw.alicdn.com/tfs/TB1aJ4MwHArBKNjSZFLXXc_dVXa-210-126.png_360x10000.jpg" alt="" title="" />
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
            <img src="https://gw.alicdn.com/tfs/TB1JMPzOsbpK1RjSZFyXXX_qFXa-239-76.png_360x10000.jpg" alt="" title="" />
            <span>专属福利天天领</span>
          </NavLink>
          <NavLink to="/" className="benefit-two">
            <img src="https://gw.alicdn.com/tfs/TB17LZBCb9YBuNjy0FgXXcxcXXa-224-100.png_290x10000.jpg" alt="" title="" />
            <span>马上签到</span>
          </NavLink>
        </Benefit>
        <Find className="find">
          <div className="find-contrion">
            <NavLink to="/" className="find-left">
              <div className="find-left-top">
                <img src={this.props.find.titleImage} alt="" title="" />
                <div className="time">
                  <span className="data">{this.props.find.day}</span>
                  <span className="month">{this.props.find.month}</span>
                </div>
              </div>
              <p>{this.props.find.subTitle}</p>
              <div className="find-left-bottom">
                <div>
                  <span>{this.props.find.commentCount}</span>
                  <span>{this.props.find.titleLabel}</span>
                </div>
              </div>
              <img src={this.props.find.image} alt="" title="" />
            </NavLink>
            <NavLink to="/" className="find-right-top">
              <div>
                <img className="cztm" src={this.props.ticket.titleImage} alt="" title="" />
              </div>
              <p>
                <strong>{this.props.ticket.depCityName}</strong>
                <img src={this.props.ticket.lineImage} alt="" title="" />
                <strong>{this.props.ticket.arrCityName}</strong>
                <span>{this.props.ticket.flightType}</span>
              </p>
              <div className="price">
                <div>
                  <span>￥</span>
                  <span>{this.props.ticket.minItemPrice}</span>
                  <span>{this.props.ticket.titleLabel}</span>
                </div>
              </div>
              <img src={this.props.ticket.coverImage} alt="" title="" className="find-right-bg" />
            </NavLink>
            <NavLink to="/" className="find-right-bottom">
              <img src={this.props.sift.coverImage} alt="" title="" />
              <p>{this.props.sift.subTitle}</p>
              <div>
                <span>￥</span>
                <span>{this.props.sift.minItemPrice}</span>
                <span>{this.props.sift.titleLabel}</span>
              </div>
            </NavLink>
          </div>
        </Find>
        <Travel className="travel">
          <h2>当季旅行地</h2>
          <span>探索更多目的地 ></span>
        </Travel>
        <TravelList className="travellist" >
          <div className="travellist-container">
            {
              this.props.travel.map(item => {
                return <div className="travellist-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <strong>{item.title}</strong>
                </div>
              })
            }
          </div>
        </TravelList>
        <TitleWarp className="titlewarp">
          <h2>旅行直播</h2>
          <span>达人带你看世界</span>
        </TitleWarp>
        <Live className="live">
          {
            this.props.live.map(item => {
              return <NavLink to="/" className="live-item" key={item.liveId}>
                <img src={item.image} alt="" title="" />
                <div>
                  <span>{item.title}</span>
                  <span>{item.statusText}</span>
                  <span>{item.viewCount}</span>
                </div>
              </NavLink>
            })
          }
        </Live>
      </HomeWrap>
    );
  }
}

const MapBannerList = dispatch => ({
  getBannerList() {
    dispatch(actions.asyncBannerList());
  },
  findData() {
    dispatch(actions.asyncFindData());
  },
  ticketData() {
    dispatch(actions.asyncTicketData());
  },
  siftData() {
    dispatch(actions.asyncSiftData());
  },
  travelData() {
    dispatch(actions.asyncTravelData());
  },
  liveData() {
    dispatch(actions.asyncLiveData());
  }
})


// vant 的组件创建
const HomeUI = Form.create({})(Home);

const menu = (
  <Menu className="menu">
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1p03kjWagSKJjy0FhXXcrbFXa-48-48.png" alt="" title="" />
        <NavLink to="/market" className="menu-span">我的订单</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1TDyrdogQMeJjy0FgXXc5dXXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">我的行程</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1p3umdgoQMeJjy1XaXXcSsFXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">我的收藏</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1NWupdgMPMeJjy1XbXXcwxVXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">我的红包</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1hdzlDSrqK1RjSZK9XXXyypXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">会员中心</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1h4utdgoQMeJjy0FoXXcShVXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">购物车</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1XAOHRpzqK1RjSZFvXXcB7VXa-48-48.png" alt="" title="" />
        <NavLink to="/" className="menu-span">联系飞猪</NavLink>
      </div>
    </Menu.Item>
    <Menu.Item>
      <img src="https://gw.alicdn.com/tfs/TB12O86bXYqK1RjSZLeXXbXppXa-44-20.png" className="menu-img" alt="" title="" />
    </Menu.Item>
  </Menu>
);
export default connect(
  ({ bannerImg }) => ({
    bannerList: bannerImg.bannerList,
    find: bannerImg.find,
    ticket: bannerImg.ticket,
    sift: bannerImg.sift,
    travel: bannerImg.travel,
    live: bannerImg.live
  }),
  MapBannerList
)(HomeUI)
