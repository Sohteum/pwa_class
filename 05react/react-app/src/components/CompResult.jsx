import React, { useEffect } from 'react';

const CompResult = () => {

  // const {_pointArr, _setPointArr } = useContext(AppContext)
  useEffect(()=>{
    console.log('----result update');
  })
  return (
    <p>
      ? 점
    </p>
  );
};

export default CompResult;