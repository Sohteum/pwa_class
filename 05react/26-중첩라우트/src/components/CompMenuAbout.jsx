import React from 'react';
import { NavLink } from 'react-router-dom';

const CompMenuAbout = () => {
  return (
    <li>
      <NavLink to='#'>about</NavLink>{/* 링크걸면 알아서 찾아주니까 */}
      <ul>
        <li><NavLink to='/about/greet'>인사말</NavLink></li>
        <li><NavLink to='/about/location'>오시는길</NavLink></li>

      </ul>
    </li>

  );
};

export default CompMenuAbout;