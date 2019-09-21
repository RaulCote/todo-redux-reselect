import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import Reducers from './reducers/index';
import './index.css';

import App from './App';

const middlewares = [thunk, logger]

const store = createStore(Reducers
, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);



