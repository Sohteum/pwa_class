import React, { useContext } from 'react';
import { CalcContext } from './CompCalc';

const CompModal = () => {
  const {_errMsg, _setShowModal} = useContext(CalcContext)
  return (
    <div onClick={()=>_setShowModal(false)} className='calc-modal'>
      <p>{_errMsg}</p>
    </div>
  );
};

export default CompModal;