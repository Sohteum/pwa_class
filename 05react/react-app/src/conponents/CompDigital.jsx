import React, { useContext } from 'react';
import { AppContext } from '../App';



const CompDigital = () => {

  const {_time} = useContext(AppContext)

  return (
    <span className='digital'>
     {/* {_time} */}
    </span>
  );
};

export default CompDigital;