import { FunctionComponent, useState } from 'react';
import { Header } from './layout/Header';
import { Todo } from './elements/Todo';
import { Todo as TodoComponent } from './domain/Todo';
import { VerticalStack } from './layout/VerticalStack';

interface AppProps {
  initialTodos: Todo[];
}

const App: FunctionComponent<AppProps> = function ({ initialTodos }) {
  const title = 'TODOs';
  const [ todos, setTodos ] = useState<Todo[]>(initialTodos);

  const handleTodoEdit = function ({ id, description }: {
    id: string;
    description: string;
  }) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, description };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <Header title={ title } />
      <VerticalStack>
        {
          todos.map(todo => (
            <TodoComponent
              key={ todo.id }
              id={ todo.id }
              initialDescription={ todo.description }
              onEdit={ handleTodoEdit } />
          ))
        }
      </VerticalStack>
    </div>
  );
};

export { App };
