import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompResult = () => {
  const {_pointArr, fnChangePoint} = useContext(AppContext)

  return (
    <div>
      <p>현재점수 : {fnChangePoint(_pointArr)}점</p>
    </div>
  );
};

export default CompResult;