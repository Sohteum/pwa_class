import React from 'react';
import { NavLink } from 'react-router-dom';

const CompMenuNotice = () => {
  return (
    <li>
     <NavLink to='#'>about</NavLink>{/* 링크걸면 알아서 찾아주니까 */}
      <ul>
        <li><NavLink to='/notice/notice'>공지사항</NavLink></li>
        <li><NavLink to='/notice/online'>자유게시판</NavLink></li>

      </ul>
    </li>
  );
};

export default CompMenuNotice;