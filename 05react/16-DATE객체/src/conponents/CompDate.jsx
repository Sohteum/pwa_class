import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompDate = () => {

  const {  _month, _setMonth,
    _date, _setDate,
    _day, _setDay} = useContext(AppContext)

  return (
    <span className='date'>
      
    </span>
  );
};

export default CompDate;