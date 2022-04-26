import { Todo } from './Todo';

interface TodoList {
  note: ({ description }: { description: string }) => void;
  edit: ({ id, description }: { id: string, description: string }) => void;
  tickOff: ({ id }: { id: string }) => void;

  getAllTodos: () => Todo[];
  getRemainingTodos: () => Todo[];
  getTickedOffTodos: () => Todo[];
}

export type { TodoList };
