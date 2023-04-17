import React, { useState } from 'react';

const ComModal = ({ _pointArr, _setShowModal }) => {


  const fnReStart = () => {

    _setShowModal(false)
  }

  return (
    <>
      <div className='modal'>
        점수 :
        {
          _pointArr.filter(v => v === "정답").length //중괄호 안에서는 하나만 리턴
        }
        <button onClick={fnReStart}  _pointArr={_pointArr}  _setShowModal={_setShowModal}>다시시작</button>

      </div>
    </>
  );
};

export default ComModal;