import React from 'react'
import ReactDom from 'react-dom'
import configureStore from './bin/configureStore';
import { Provider } from 'react-redux';
import Home from './containers/home';


//configuracion store redux
const store = configureStore
//elemento de html
const reactRoot = document.getElementById('react-root')

ReactDom.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
reactRoot
)
