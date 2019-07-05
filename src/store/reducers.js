// 拆分出去到组件私有store
import userLogin from '../views/login/store/reducer';
import centers from '../views/center/store/reducer';


export const userinfo = userLogin;
export const center  = centers;
