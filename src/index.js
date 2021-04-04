import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {allReducers} from './Reducers/combineReducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(allReducers)


ReactDOM.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);


