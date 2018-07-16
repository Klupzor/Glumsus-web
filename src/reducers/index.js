import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import data from './data';
import userData from './userData';
import serverData from './serverData';
import navigationFilter from './navigationFilter'
import menuData from './menuData';


const rootReducer = combineReducers({
    visibilityFilter, data, userData, serverData, navigationFilter, menuData
  })
  
  export default rootReducer
  