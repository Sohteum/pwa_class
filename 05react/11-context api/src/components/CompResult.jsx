import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompResult = () => {


  const { _pointArr, fnChangePoint } = useContext(AppContext)//사용할때는 유즈컨텍스트. 아까 선언한 이름도 괄호안에 ㅆㅓ야해

  return (
    <div>
      <p> 현재 점수: {fnChangePoint(_pointArr)}점 </p>
    </div>
  );
};

export default CompResult;