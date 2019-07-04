import * as Types from './actionTypes'

const initState = {
  bannerList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.SET_BANNER_LIST) {
    newState.bannerList = action.data
  }
  return newState;
}
