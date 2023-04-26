import React, { useEffect } from 'react';

const CompBtn = ({_setN}) => {

  function fnIncrease (){
    _setN(prev=>prev+1)
  }

  useEffect(() => {
    console.log('--Btn update');
  })

  return (
    <button onClick={fnIncrease}>
      1씩증가
    </button>
  );
};

export default React.memo(CompBtn);