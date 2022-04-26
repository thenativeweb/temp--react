import { Todo } from './Todo';

const createTodo = function ({ id, description }: {
  id: string;
  description: string;
}): Todo {
  const todo: Todo = {
    id,
    description,
    isDone: false,
  };

  return todo;
};

export { createTodo };
