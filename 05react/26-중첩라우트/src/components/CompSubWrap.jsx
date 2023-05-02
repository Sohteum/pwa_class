import React from 'react';
import CompSideBar from './CompSideBar';
import { Outlet } from 'react-router-dom';

const CompSubWrap = () => {
  return (
    <>
      <div>서브비주얼</div>
      <hr />
      <CompSideBar />
      <main>
        {/* 서브페이지 본문-(주소에 따라)본문마다 다른 내용이 들어간다. 이게 아웃렛 5.0은 다른방법임(1년됐음 6.0) */}
        <Outlet />
        <div>서브페이지 공통광고</div>
      </main>
    </>
  );
};

export default CompSubWrap;