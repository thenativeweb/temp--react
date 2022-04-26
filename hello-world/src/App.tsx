import { FunctionComponent } from 'react';
import { createTodoList } from './elements/createTodoList';
import { Header } from './layout/Header';
import { TodoList } from './domain/TodoList';

const App: FunctionComponent = function () {
  const todoList = createTodoList();

  todoList.note({ description: 'Show all these todos' });
  todoList.note({ description: 'Have lunch' });
  todoList.note({ description: 'Make todos editable' });

  return (
    <div>
      <Header title='TODOs' />
      <TodoList todos={todoList.getAllTodos()} />
    </div>
  );
};

export { App };
