import * as Types from './actionTypes'
import { message } from 'antd';

const initState = {
  username: ''
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.SET_USERINFO) {
    newState.username = action.user
  }
  if (action.type === Types.GET_ORDER) {
    let props = action.data[1];
    let orderData = action.data[0]
    newState.orderAll = [orderData[0]]
    newState.orderObligation = [orderData[1]]
    // 判断是否是某个页面跳转过来的，跳回去,props.location.state.redirect是路由跳转过来的时候带的数据
    let redirect = props.location.state ? props.location.state.redirect : '/';

    // 跳转页面
    message.success('登陆成功', [1], () => {
      props.history.replace(redirect);
    })
  }
  return newState;
}
