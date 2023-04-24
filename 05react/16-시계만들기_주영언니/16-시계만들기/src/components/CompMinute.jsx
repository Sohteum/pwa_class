import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompMinute = () => {

  const { _minute } = useContext(AppContext)

  return (
    <div className='minute pin' style={{transform : `rotate(${_minute*6}deg)`}}>
    </div>
  );
};

export default CompMinute;