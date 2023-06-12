import React from 'react';

const CompListLoader = () => {
  return (
    <div className='list-loader'>
      <img src={require('../../assets/img/icons/spinner-pencil.gif')} alt="" />
      loading...
    </div>
  );
};

export default CompListLoader;