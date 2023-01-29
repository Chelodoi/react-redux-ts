import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <div>qwe</div>
    </Provider>
  );
};
