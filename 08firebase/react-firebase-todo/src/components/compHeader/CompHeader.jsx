import React from 'react';
import CompLoggedBefore from './CompLoggedBefore';
import CompLoggedAfter from './CompLoggedAfter';

const CompHeader = () => {
  return (
    <header>
      <img className="pin" src={require('../../assets/img/common/pin.png')} alt="" />
      <CompLoggedBefore/>
      <CompLoggedAfter/>
    </header>
  );
};

export default CompHeader;