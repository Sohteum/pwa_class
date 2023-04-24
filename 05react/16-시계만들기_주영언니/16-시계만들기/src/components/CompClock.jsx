import React from 'react';
import CompHour from './CompHour';
import CompMinute from './CompMinute';
import CompSec from './CompSec';
import CompCurrentTime from './CompCurrentTime';
import CompCurrentDate from './CompCurrentDate';

const CompClock = () => {
  return (
    <div className='clock'>
      <CompCurrentTime/>
      <CompHour />
      <CompMinute />
      <CompSec />
      <CompCurrentDate/>
</div>
  );
};

export default CompClock;