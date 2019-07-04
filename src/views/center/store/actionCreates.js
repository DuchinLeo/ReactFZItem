import Types from './actionTypes';
import axios from 'axios';


// 暴露请求的方法出去

export const getBannerList = () => {
  axios
    .get("http://localhost:3001/data")
    .then((response) => {
        console.log(response);

    })
}
