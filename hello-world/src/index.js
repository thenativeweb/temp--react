import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const $root = document.getElementById('root');
const root = ReactDOM.createRoot($root);

const App = function () {
  return (
    <h1>Hello world!</h1>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
