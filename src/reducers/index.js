import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import data from './data';
import userData from './userData';
import serverData from './serverData';
import navigationFilter from './navigationFilter'


const rootReducer = combineReducers({
    visibilityFilter, data, userData, serverData, navigationFilter
  })
  
  export default rootReducer
  