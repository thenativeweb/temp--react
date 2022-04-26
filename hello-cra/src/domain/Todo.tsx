import { FunctionComponent, useState } from 'react';
import styles from './Todo.module.css';

interface TodoProps {
  id: string;
  initialDescription: string;
  onEdit: ({ id, description }: {
    id: string;
    description: string;
  }) => void;
}

const Todo: FunctionComponent<TodoProps> = function ({ id, initialDescription, onEdit }) {
  const [ isEditMode, setIsEditMode ] = useState(false);
  const [ description, setDescription ] = useState(initialDescription);

  const handleEditClick = function () {
    setIsEditMode(true);
  };

  const handleInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  };

  const handleEditTodo = function () {
    setIsEditMode(false);
    onEdit({ id, description });
  };

  const editableTodo = (
    <form onSubmit={ handleEditTodo }>
      <input
        value={ description }
        onChange={ handleInputChange } />
    </form>
  );

  const readonlyTodo = (
    <div>
      <span>{ description }</span>
      <button className={ styles.edit } onClick={ handleEditClick }>(edit)</button>
    </div>
  );

  return (
    <div className={ styles.todo }>
      { isEditMode ? editableTodo : readonlyTodo }
    </div>
  );
}

export { Todo };
