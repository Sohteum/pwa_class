import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css'
import './css/style.css'
import './css/header.css'
import './css/signin.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <img className='deco-top' src={require('./assets/img/common/top.png')} alt="" />
    <App />
    <footer>
      <img className='gif' src={require('./assets/img/footer/pencil-animated.gif')} alt="" />
      <p>madeBy https://github.com/Sohteum</p>
      <img className='pencil' src={require('./assets/img/footer/pencil-footer.png')} alt="" />
    </footer>
  </>
);


