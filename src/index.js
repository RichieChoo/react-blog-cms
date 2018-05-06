import React from 'react';
import ReactDOM from 'react-dom';

import {createStore ,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducersOfAll';
import App from './route';

import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';

import {history} from "./history";
import registerServiceWorker from './registerServiceWorker';


//disable logger and hide console in prod
let devLogger = logger;
if (process.env.NODE_ENV === 'production') {
    devLogger = undefined;
    //hide console
    console.warn = () => {};
    console.log = () => {};
}

const middleware = [
    routerMiddleware(history),thunk,
    devLogger,
].filter(Boolean);

const store = createStore(
    combineReducers({
        ...reducers,
        routing:routerReducer,
    }),
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
