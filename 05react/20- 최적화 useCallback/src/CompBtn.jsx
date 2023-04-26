import React, { useEffect } from 'react';

const CompBtn = ({fnIncrease}) => {



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