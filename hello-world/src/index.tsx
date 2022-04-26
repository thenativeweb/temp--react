import { App } from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const $root = document.getElementById('root');

if (!$root) {
  throw new Error('Failed to find root element.');
}

const root = ReactDOM.createRoot($root);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
