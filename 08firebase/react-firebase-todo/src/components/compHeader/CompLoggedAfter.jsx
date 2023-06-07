import React from 'react';

const CompLoggedAfter = () => {
  return (
    <div className='logged-after'>
      <p className='user'>
        <img src={require('../../assets/img/photo/photo1.jpg')} alt="" />
        <em>닉네임</em>
      </p>
      <p className='btns'>
        <button><img src={require('../../assets/img/header/btn-sign-out.png')} alt="" /></button>
        <button><img src={require('../../assets/img/header/btn-deresgister.png')} alt="" /></button>
      </p>
    </div>
  );
};

export default CompLoggedAfter;