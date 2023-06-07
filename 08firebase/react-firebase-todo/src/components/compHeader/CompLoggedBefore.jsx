import React from 'react';

const CompLoggedBefore = () => {
  return (
    <div className='logged-before'>
      <button>
        <img src={require('../../assets/img/header/btn-sign-in.png')} alt="" />
      </button>
      <button>
        <img src={require('../../assets/img/header/btn-register.png')} alt="" />
      </button>
      
    </div>
  );
};

export default CompLoggedBefore;