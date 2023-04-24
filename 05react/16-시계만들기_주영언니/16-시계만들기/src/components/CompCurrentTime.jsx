import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompCurrentTime = () => {
  const { time } = useContext(AppContext)
  const hours = String(time.getHours()).padStart(2,'0')
  const min = String(time.getMinutes()).padStart(2,'0')
  return (
    <div className='current_time'>
      <p>{hours}:{min}</p>
    </div>
  );
};

export default CompCurrentTime;