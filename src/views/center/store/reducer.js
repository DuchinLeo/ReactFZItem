// 处理派发动作，然后保存数据的
import * as Types from './actionTypes'

const initState = {
  username: {},
  banner: [],
  price:{},
  title:'',
  sold:{},
  brand:{},
  brand1:[],
  coupon:[],
  shopCoupons:[],
  mileage:{},
  serviceTimeInfo:[],
  mn:[]
}

// 把这个仓库的数据暴露出去,在总仓库里面拿到他
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  // 监听到GET_BANNER类型把传过了的值保存到仓库里面
  if (action.type === Types.GET_BANNER) {
    console.log(action.value)
    newState.username = action.value

    newState.banner=action.value.banner.data.pics
    newState.price=action.value.price.data.mainPrice
    newState.title=action.value.title.data.itemTitle
    newState.sold=action.value.sold.data
    newState.brand=action.value.brand.data
    newState.brand1=action.value.brand.data.cells
    newState.coupon=action.value.coupon.data.cells
    newState.shopCoupons=action.value.shopCoupons.data.couponList
    newState.mileage=action.value.mileage.data
    newState.serviceTimeInfo=action.value.serviceTimeInfo.data.infos
    newState.mn=action.value.mn.data

    
  }

  // 返回保存的数据
  return newState;
}
