import React, { FC, useEffect } from 'react';
import { UserActions } from 'src/hooks/useAction';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const TodoList: FC = () => {
  const { page, error, loading, limit, todos } = useTypedSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = UserActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const changePage = (p: number) => {
    setTodoPage(p);
  };
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>
            {todo.id}. {todo.title}
          </h3>
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p, index) => (
          <div
            key={index}
            onClick={() => changePage(p)}
            style={{ border: p === page ? '2px solid purple' : '1px solid gray', padding: '10px' }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
