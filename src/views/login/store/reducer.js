import * as Types from './actionTypes'

const initState = {
  username: ''
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === Types.SET_USERINFO) {
    newState.username = action.user
  }
  return newState;
}
