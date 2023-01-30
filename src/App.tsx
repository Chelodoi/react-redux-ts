import React, { FC, useEffect } from 'react';
import PostList from './components/PostList';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreator';
import { userSlice } from './store/reducers/UserSlice';

export const App: FC = () => {
  // const { users, isLoading, count, error } = useAppSelector((state) => state.userReducer);
  // const { increment } = userSlice.actions;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>increment</button> */}
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {JSON.stringify(users, null, 2)}*/}
      <PostList />
    </div>
  );
};
