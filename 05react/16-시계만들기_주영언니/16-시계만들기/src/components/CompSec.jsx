import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const CompSec = () => {
  const { _sec } = useContext(AppContext)

  return (
    <div className='sec pin' style={{transform : `rotate(${_sec*6}deg)`}}>
    </div>
  );
};

export default CompSec;