import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import {activeTabReducer, tablistReducer} from './reducers/index'
import { Provider } from 'react-redux'

const store= configureStore({
    reducer:{
      activeTab: activeTabReducer,
      tabList : tablistReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

