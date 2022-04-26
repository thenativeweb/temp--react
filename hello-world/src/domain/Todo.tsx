import { FunctionComponent } from 'react';

interface TodoProps {
  id: string;
  description: string;
}

const Todo: FunctionComponent<TodoProps> = function ({ id, description }) {
  return (
    <div key={ id }>{ description }</div>
  );
}

export { Todo };
