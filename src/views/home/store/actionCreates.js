import * as Types from './actionTypes';
import axios from 'axios'

export const onBannerList = data => ({
  type: Types.SET_BANNER_LIST,
  data
})

export const asyncBannerList = () => {
  return dispatch => {
    axios.get("http://localhost:3001/banner")
      .then(response => {
        console.log(response.data);
        // 派发一个普通的动作，将数据写入到仓库中
        dispatch(onBannerList(response.data));
        // this.setState({
        //   bannerList: response.data.img
        //})
        // console.log(this.state)
      })
  }
}
