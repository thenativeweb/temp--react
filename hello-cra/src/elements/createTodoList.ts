import { createTodo } from './createTodo';
import { Todo } from './Todo';
import { TodoList } from './TodoList';
import { v4 as uuid } from 'uuid';

const createTodoList = function (): TodoList {
  const todos: Todo[] = [];

  const note = function ({ description }: {
    description: string;
  }): void {
    const id = uuid();
    const todo = createTodo({ id, description });

    todos.push(todo);
  };

  const edit = function ({ id, description }: {
    id: string;
    description: string;
  }): void {
    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
      throw new Error('todo not found');
    }
    if (todo.isDone) {
      throw new Error('todo must not be done');
    }

    todo.description = description;
  }

  const tickOff = function ({ id }: {
    id: string;
  }): void {
    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
      throw new Error('todo not found');
    }
    if (todo.isDone) {
      throw new Error('todo must not be done');
    }

    todo.isDone = true;
  };

  const getAllTodos = function (): Todo[] {
    return todos;
  };

  const getRemainingTodos = function (): Todo[] {
    return todos.filter(todo => !todo.isDone);
  };

  const getTickedOffTodos = function (): Todo[] {
    return todos.filter(todo => todo.isDone);
  };

  const todoList: TodoList = {
    note,
    edit,
    tickOff,

    getAllTodos,
    getRemainingTodos,
    getTickedOffTodos
  };

  return todoList;
};

export { createTodoList };
