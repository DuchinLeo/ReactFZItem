import * as Types from './actionTypes';
import axios from 'axios'

export const onBannerList = data => ({
  type: Types.SET_BANNER_LIST,
  data
})

export const onFindData = data => ({
  type: Types.SET_FIND_DATA,
  data
})

export const onTicketData = data => ({
  type: Types.SET_TICKET_DATA,
  data
})

export const onSiftData = data => ({
  type: Types.SET_SIFT_DATA,
  data
})

export const onTravelData = data => ({
  type: Types.SET_TRAVEL_DATA,
  data
})

export const asyncBannerList = () => {
  return dispatch => {
    axios.get("http://localhost:3001/banner")
      .then(response => {
        // console.log(response.data);
        // 派发一个普通的动作，将数据写入到仓库中
        dispatch(onBannerList(response.data));
      })
  }
}
export const asyncFindData = () => {
  return dispatch => {
    axios.get("http://localhost:3001/find")
      .then(response => {
        // 派发一个普通的动作，将数据写入到仓库中
        dispatch(onFindData(response.data));
      })
  }
}

export const asyncTicketData = () => {
  return dispatch => {
    axios.get("http://localhost:3001/ticket")
      .then(response => {
        // 派发一个普通的动作，将数据写入到仓库中
        dispatch(onTicketData(response.data));
      })
  }
}
export const asyncSiftData = () => {
  return dispatch => {
    axios.get("http://localhost:3001/sift")
      .then(response => {
        console.log(response.data);
        dispatch(onSiftData(response.data))
      })
  }
}
export const asyncTravelData = () => {
  return dispatch => {
    axios.get("http://localhost:3001/travel")
      .then(response => {
        console.log(response.data);
        dispatch(onTravelData(response.data))
      })
  }
}
