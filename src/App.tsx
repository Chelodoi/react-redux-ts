import React, { FC } from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import { store } from './store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <UserList />
      <TodoList />
    </Provider>
  );
};
