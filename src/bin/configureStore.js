import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './../reducers';
import { VisibilityFilters, NavigationFilters } from './../actions/actionType';

const initialState = {
    data: {
        user: "",
        emailPerson: "",
        panel: "",
        cell: "",
        password: ""
    },
    userData: {
        user: "",
        password: "",
        loginBusiness: false,
        loginPerson: false
    },
    visibilityFilter: {
        filter: VisibilityFilters.SHOW_HOME
    },
    navigationFilter: {
        filter: NavigationFilters.SHOW_HOME_CONTENT
    }
       
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

const configureStore = createStore(
    rootReducer,
    initialState,
    enhancer
)

export default configureStore