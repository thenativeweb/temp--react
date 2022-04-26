import { FunctionComponent } from 'react';
import { Todo } from '../elements/Todo';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FunctionComponent<TodoListProps> = function ({ todos }) {
  return (
    <ul>
      { todos.map(todo => (
        <li key={ todo.id }>{ todo.description }</li>
      )) }
    </ul>
  );
};

export { TodoList };
