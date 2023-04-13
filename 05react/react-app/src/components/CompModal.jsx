import React, { useState } from 'react';

const CompModal = ({ _point }) => {
  return (
    <div className='modal'>
      <p>
        {_point}점입니다 <br />
        <button>다시시작</button>
      </p>
    </div>
  );
};

export default CompModal;
