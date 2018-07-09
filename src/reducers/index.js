import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import data from './data';
import userData from './userData';
import serverData from './serverData';


const rootReducer = combineReducers({
    visibilityFilter, data, userData, serverData
  })
  
  export default rootReducer
  