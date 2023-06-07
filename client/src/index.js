import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import reducers from "./reducers"
import thunk from 'redux-thunk';

import App from './App'

const store = createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));
