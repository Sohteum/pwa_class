import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css'
import './css/style.css'
import './css/header.css'
import './css/section-signin.css'
import './css/section-home.css'
import './css/section-signup.css'
import './css/section-add.css'
import './css/section-detail.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <img className='deco-top' src={require('./assets/img/common/top.png')} alt="" />
    <App />
    <footer>
      <img className='gif' src={require('./assets/img/footer/pencil-animated.gif')} alt="" />
      <p>madeBy https://github.com/Sohteum</p>
      <img className='pencil' src={require('./assets/img/footer/pencil-footer.png')} alt="" />
    </footer>
  </BrowserRouter>
);


