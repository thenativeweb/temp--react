import { FunctionComponent } from 'react';

interface TodoListProps {
  children: React.ReactNode;
}

const TodoList: FunctionComponent<TodoListProps> = function ({ children }) {
  return (
    <div>
      { children }
    </div>
  );
};

export { TodoList };
