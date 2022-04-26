import { App } from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { v4 as uuid } from 'uuid';

const $root = document.getElementById('root');

if (!$root) {
  throw new Error('Failed to find root element.');
}

const root = ReactDOM.createRoot($root);

const todos = [
  { id: uuid(), description: 'Have lunch', isDone: false },
  { id: uuid(), description: 'Allow todos to be edited', isDone: false },
  { id: uuid(), description: 'Allow todos to be ticked off', isDone: false },
];

root.render(
  <React.StrictMode>
    <App initialTodos={ todos } />
  </React.StrictMode>
);
