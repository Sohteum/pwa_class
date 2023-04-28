import React from 'react';
import { NavLink } from 'react-router-dom';// 이건 왜 자동으로 안생김?

const CompLi = ({ id, title }) => { //프롭스로 타이틀을 받는다


  return (
    <li>
      <NavLink to={`/detail/${id}`}> {title}</NavLink> {/* a태그랑 같은게 링크//디테일페이지에서 어떤걸출력할까?절대다른값:id 그걸 미리 설정을 해줘야함 */}
    </li>
  );
};

export default CompLi;