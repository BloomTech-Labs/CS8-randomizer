import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducers'
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';

// const store = createStore(noteReducer, applyMiddleware(logger, thunk));
const store = createStore(Reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);