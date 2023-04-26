import React, { useContext, useEffect } from 'react';
import { AppContext } from './App';

const CompOutput = () => {
  const {_n} = useContext(AppContext)

  
  useEffect(()=>{
    console.log(`--Output update`);
  })
  return (
    <div>
      _n : {_n}
    </div>
  );
};

export default CompOutput;