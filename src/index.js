import React from 'react'
import ReactDom from 'react-dom'
import configureStore from './bin/configureStore';
import { Provider } from 'react-redux';
import App from './containers/app';
import Business from './containers/business';


//configuracion store redux
const store = configureStore
//elemento de html
const reactRoot = document.getElementById('root')

ReactDom.render(
    <Provider store={store}>
        {/* <App/> */}
        <Business/>
    </Provider>,
reactRoot
)
