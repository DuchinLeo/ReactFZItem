import axios from 'axios';
import { message } from 'antd';

const http = axios.create();

http.defaults.baseURL = '';

http.interceptors.response.use(response => {
  // console.log(response);
  let res = response.data;
  if (res.code === 0) {
    // console.log(res);
    return res;
  } else {
    // console.log(res);
    message.error(res.msg);

  }
});

export default http;
