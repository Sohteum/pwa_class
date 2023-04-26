import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompBtn = ( { _setN }) => {
  // const { _setN } = useContext(AppContext)

  
  useEffect(()=>{
    console.log(`--Btn update`);
  })

  return (
    <button onClick={()=>{_setN(prev=>prev+1)}}>
      증가
    </button>
  );
};


export default React.memo(CompBtn);


//여기서는 메모 해도 안됨. 왜냐면 사용하고있음. 지금 셋엔을 받아서 사용하고있기때문에?
//프롭으로 내려주고 메모 하면됨. 여기서는 useContext때문에 그런거래