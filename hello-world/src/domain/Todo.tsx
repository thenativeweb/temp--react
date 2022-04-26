import { FunctionComponent } from 'react';
import styles from './Todo.module.css';

interface TodoProps {
  id: string;
  description: string;
}

const Todo: FunctionComponent<TodoProps> = function ({ id, description }) {
  return (
    <div className={ styles.todo }>{ description }</div>
  );
}

export { Todo };
