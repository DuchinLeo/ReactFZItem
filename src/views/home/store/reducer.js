import * as Types from './actionTypes'
import types from 'merge-anything';

const initState = {
  bannerList: [],
  find: [],
  ticket: [],
  sift: [],
  travel: [],
  live: [],
  commodity: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.SET_BANNER_LIST) {
    newState.bannerList = action.data
  }
  if (action.type === Types.SET_FIND_DATA) {
    newState.find = action.data

  }
  if (action.type === Types.SET_TICKET_DATA) {
    newState.ticket = action.data;
  }
  if (action.type === Types.SET_SIFT_DATA) {
    newState.sift = action.data;
  }
  if (action.type === Types.SET_TRAVEL_DATA) {
    newState.travel = action.data;

  }
  if (action.type === Types.SET_LIVE_DATA) {
    newState.live = action.data
  }

  if (action.type === Types.SET_COMMODITY_DATA) {
    newState.commodity = action.data
    console.log(newState)
  }
  return newState;
}
