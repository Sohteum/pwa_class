import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompHour = () => {
  const { _hour, _minute } = useContext(AppContext)
  return (
    <div className='hour pin' style={{ transform: `rotate(${_hour * 30 + _minute * 0.5}deg)` }}>
    </div>
  );
};

export default CompHour;