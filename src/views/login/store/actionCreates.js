import * as Types from './actionTypes';
import axios from 'axios';
import { message } from 'antd';
import http from '@/utils/http.js';

// 保存用户登陆的动作
export const setUsername = user => ({
  type: Types.SET_USERINFO,
  user
})

export const asyncSearch = (props) => {
  return (dispatch) => {
    http.get("/shopdata")
      .then(response => {
        // console.log(response)
        let orderData = response
        dispatch({
          type: Types.GET_ORDER,
          data: [orderData, props]
        })

      })
  }
}

// 登陆验证的动作
export const asyncUserinfo = (values, props) => {
  return (dispatch) => {
    axios.get('http://localhost:3001/user')
      .then(response => {
        let data = response.data;
        // console.log(props)
        if (data.username === values.username && data.password === values.password) {
          // 账号密码Ok
          window.localStorage.setItem('user', JSON.stringify(data))

          // 派发一个动作保存状态到仓库
          dispatch(setUsername(data.username))
          // 派发一个订单页面的数据获取
          dispatch(asyncSearch(props))

        } else {
          message.error('账号或密码错误')
        }
      })
  }
}
