import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import data from './data';
import userData from './userData';


const rootReducer = combineReducers({
    visibilityFilter, data, userData
  })
  
  export default rootReducer
  