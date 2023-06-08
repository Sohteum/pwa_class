import React from 'react';
import { Link } from 'react-router-dom';

const CompLoggedBefore = () => {
  return (
    <div className='logged-before'>
      <Link  to='signin'>
        <img src={require('../../assets/img/header/btn-sign-in.png')} alt="" />
      </Link>
      <Link to='signup'>
        <img src={require('../../assets/img/header/btn-register.png')} alt="" />
      </Link>
      
    </div>
  );
};

export default CompLoggedBefore;