import React, { useEffect } from 'react';
import react, { FC } from 'react';
import { UserActions } from 'src/hooks/useAction';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
export { fetchUsers } from '../store/action-creators/user';

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = UserActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <React.Fragment>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </React.Fragment>
  );
};

export default UserList;
