import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

import './res/style.css'

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

render (
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)

//store.dispatch(fetchProList());
