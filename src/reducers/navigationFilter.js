import * as type from '../actions/actionType'
const navigationFilter = (state = [] , action) => {
  switch (action.type) {
    case type.SET_NAVIGATION_FILTER :
      return action.filter
    default:
      return state
  }
}

export default navigationFilter
