import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
