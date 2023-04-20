import React, { useEffect } from 'react';

console.log(`--Btn outside`);


const CompBtn = ({ _setN }) => {

  console.log(`--Btn inside  업데이트 시작`);

  useEffect(() => {
    console.log(`--Btn inside  업데이트 완료`);
  })
  
  return (
    <button onClick={e => {
      _setN(prev => prev + 1)
    }}>버튼</button>

  );
};

export default CompBtn;