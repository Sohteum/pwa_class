import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompHour = () => {

  const {_hour, _min} = useContext(AppContext)
  return (
    <div className='hour pin' style={{transform:`rotate(${_hour*30+_min*0.5}deg)`}}>
      
    </div>
  );
};

export default CompHour;