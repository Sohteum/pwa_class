import React, { useContext, useEffect } from 'react';
import CompLi from './CompLi';
import { AppContext } from '../App';


const CompUl = () => {
  const { _liCnt } = useContext(AppContext)
  
  const arr = []
  for (let i = 1; i <= _liCnt; i++) { //리스트마다 전부 다른값이 들어가면됨
    arr.push(i)
  }

  useEffect(() => {
    console.log('-ul update');
  })
  
  return (
    <ul>
      {//스크립트문법은 jsx안에서는 무조건 중괄호 안에쓴다.보간법.
        arr.map(v=><CompLi key={v} />) //여기서 키값을 주면 전체가 변하지않고 엘아이의 ox리턴하는부분만 업뎃됨 키값이 변하면 
      }
      {}
    </ul>
  );
};

export default CompUl;