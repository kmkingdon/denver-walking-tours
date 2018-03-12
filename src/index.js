import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener, push } from 'redux-first-routing';
import reducer from './reducers/reducer';
import App from './containers/app';

import './index.css';
import './App.css';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  main: reducer,
  router: routerReducer
})

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, {}, applyMiddleware(middleware, thunk))

startListener(history, store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
