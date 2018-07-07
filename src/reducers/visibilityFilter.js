import * as type from '../actions/actionType'
const visibilityFilter = (state = [] , action) => {
  switch (action.type) {
    case type.SET_VISIBILITY_FILTER :
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
