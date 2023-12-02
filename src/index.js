import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextFilter } from './FContext/ContextFilter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ContextFilter>
    <App />
    </ContextFilter>
  </React.StrictMode>
);
