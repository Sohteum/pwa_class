import React, { useContext } from 'react';
import CompLi from './CompLi';
import { AppContext } from '../App';


// const listArr = ['가', '나', '다']//키값으로 사용하기 위해 부여할 뿐 의미가 없다

const CompUl = () => {
  const { _reset } = useContext(AppContext)

  let listArr = []
  for (let i = 1; i <= listCnt; i++) {
    listArr.push(i)
  }

  return (
    <ul key={_reset}>   {/* 키값이 바뀌면 리렌더링됨. */}

      {
        listArr.map((v, i) => <CompLi key={v} i={i} />)
        //중괄호는 스크립트문법. 근데 키는 다시 jsx문법. 중괄호 안에서 v를 그냥 쓰면 안된다. 보간법으로 받아야 함 가상돔 태그적을때 변수 호출할때는 무조건 중괄호

      }
    </ul>
  );
};

export default CompUl;