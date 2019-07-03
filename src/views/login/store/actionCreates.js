import * as Types from './actionTypes';
import axios from 'axios';
import { message } from 'antd';


// 保存用户登陆的动作
export const setUsername = user => ({
  type: Types.SET_USERINFO,
  user
})


// 登陆验证的动作
export const asyncUserinfo = (values, props) => {
  return (dispatch) => {
    axios.get('http://localhost:3001/user')
      .then(response => {
        let data = response.data;
        console.log(props)
        if (data.username === values.username && data.password === values.password) {
          // 账号密码Ok
          window.localStorage.setItem('user', JSON.stringify(data))

          // 判断是否是某个页面跳转过来的，跳回去,props.location.state.redirect是路由跳转过来的时候带的数据
          let redirect = props.location.state ? props.location.state.redirect : '/';

          // 派发一个动作保存状态到仓库
          dispatch(setUsername(data.username))

          // 跳转页面
          message.success('登陆成功', [1], () => {
            props.history.replace(redirect);
          })
        } else {
          message.error('账号或密码错误')
        }
      })
  }
}
