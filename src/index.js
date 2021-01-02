import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SomeProvider from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <SomeProvider>
      <App />
    </SomeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
