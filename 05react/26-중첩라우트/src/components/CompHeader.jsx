import React from 'react';
import { Link } from 'react-router-dom';
import CompMenuAbout from './CompMenuAbout';
import CompMenuBiz from './CompMenuBiz';
import CompMenuNotice from './CompMenuNotice';

const CompHeader = () => {
  return (
    <header>
      <h1><Link to='/'>Nested Router</Link></h1>
      <nav>
        <p>gnb</p>
        <ul>
          <CompMenuAbout />
          <CompMenuBiz />
          <CompMenuNotice/>
        </ul>
      </nav>
      <hr />

    </header>
  );
};

export default CompHeader;