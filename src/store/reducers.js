// 拆分出去到组件私有store
import userLogin from '../views/login/store/reducer';
// import center from '../views/center/store/reducer';
import banner from '../views/home/store/reducer'


export const userinfo = userLogin;
// export const center  = center;

export const bannerImg = banner;

