import React from 'react';

const CompLoader = () => {
  return (
    <div className='loader'>
     <img src={require('../../assets/img/icons/spinner.png')} alt="" />
    </div>
  );
};

export default CompLoader;