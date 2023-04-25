import React from 'react';
import CompHour from './CompHour';
import CompMin from './CompMin';
import CompSec from './CompSec';
import CompDigital from './CompDigital';
import CompDate from './CompDate';

const CompClock = () => {
  return (
    <div className='clock'>
      <CompHour/>
      <CompMin/>
      <CompSec/>
      <CompDigital/>
      <CompDate/>
      
    </div>
  );
};

export default CompClock;