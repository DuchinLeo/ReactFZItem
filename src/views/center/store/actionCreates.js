import * as Types from './actionTypes';
import axios from 'axios';


// 暴露请求的方法出去

export const getBannerList = () => {
  return dispatch => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => {
        console.log(response);
        //dispatch 派发的动作类型type在reducer.js里面监听
        dispatch(
          {
            type: Types.GET_BANNER,
            value: response.data
          }
        )
      })
  }
}
