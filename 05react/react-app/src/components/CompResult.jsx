import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

const CompResult = () => {
const {_pointArr} = useContext(AppContext)
  // const {_pointArr, _setPointArr } = useContext(AppContext)
  useEffect(()=>{
    console.log('----result update');
  })
  return (
    <p>
      {_pointArr.filter(v=>v==='o').length} 점
    </p>
  );
};

export default CompResult;