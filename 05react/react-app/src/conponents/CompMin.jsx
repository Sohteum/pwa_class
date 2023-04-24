import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompMin = () => {

  const {_min} = useContext(AppContext) 

  return (
    <div className='min pin'style={{transform:`rotate(${_min*6}deg)`}}>
      
    </div>
  );
};

export default CompMin;