import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css';
import './css/style.css';
import './css/comp-menu.css';
import './css/comp-calc.css';
import './css/comp-bmi.css';
import './css/comp-dday.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter >
);


