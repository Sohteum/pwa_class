import React from 'react';
import { Link } from 'react-router-dom';
import CompMenuAbout from './CompMenuAbout';
import CompMenuBiz from './CompMenuBiz';
import CompMenuNotice from './CompMenuNotice';

const CompMenu = () => {
  return (
    <ul>
      <CompMenuAbout />
      <CompMenuBiz/>
      <CompMenuNotice/>
    </ul>
  );
};

export default CompMenu;