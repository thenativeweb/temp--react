import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const $root = document.getElementById('root');

if (!$root) {
  throw new Error('Failed to find root element.');
}

const root = ReactDOM.createRoot($root);

const App = function () {
  return (
    <div>
      <h1>My todos</h1>
      <ul>
        <li>Buy milk</li>
        <li>Buy eggs</li>
        <li>Buy bread</li>
      </ul>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
