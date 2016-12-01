import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
