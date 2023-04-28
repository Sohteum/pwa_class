import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);


//app에서 싸줄수도 있지만 앱 전체를 인덱스가 싸고있으니까 여기서 라우팅 구현함. 아니면 컨텍스트를 사용할 수 없음
