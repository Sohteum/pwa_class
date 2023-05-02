import React from 'react';
import CompMenu from './CompMenu';
import { Outlet, useLocation } from 'react-router-dom';
import CompMenuBiz from './CompMenuBiz';
import CompMenuAbout from './CompMenuAbout';
import CompMenuNotice from './CompMenuNotice';

const CompSideBar = () => {
  const location = useLocation()
  const menu = location.pathname.split('/')[1]  // location.path -> /about/greet location.path.split('/')-> [about, greet]
  return (
    <aside>
      <hr />
      <p>
        sidebar
      </p>
      <ul>
        {(menu==='about')&&<CompMenuAbout />}
        {(menu==='biz')&&<CompMenuBiz />}
        {(menu==='notice')&&<CompMenuNotice />}
      </ul>
    </aside>
  );
};

export default CompSideBar;