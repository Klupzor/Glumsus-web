import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './../reducers';

const initialState = {
    data: {
        user: "",
        emailPerson: "",
        panel: "",
        password: ""
    }
    // paneles: {
    //     loading: true
    // }    
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