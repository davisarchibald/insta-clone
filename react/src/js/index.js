import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import Reducer from './components/reducers';
import App from './components/app';

const initialState = {};
const reduxRouterMiddleware = routerMiddleware(browserHistory);
const newCreateStore = compose(
    applyMiddleware(thunk, reduxRouterMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = newCreateStore(Reducer, initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App} path="/" />
        </Router>
    </Provider>,
  document.getElementById('app')
);
