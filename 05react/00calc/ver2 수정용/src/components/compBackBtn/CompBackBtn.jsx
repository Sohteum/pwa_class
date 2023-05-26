import React from 'react';
import { Link } from 'react-router-dom';

const CompBackBtn = () => {
  return (
    <Link
      to='/'
      className='back-btn'
    >
      <i className='fa-solid fa-arrow-left'></i>
    </Link>
  );
};

export default CompBackBtn;
