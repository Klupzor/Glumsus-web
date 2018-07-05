import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter';
import data from './data';


const rootReducer = combineReducers({
    visibilityFilter, data
  })
  
  export default rootReducer
  