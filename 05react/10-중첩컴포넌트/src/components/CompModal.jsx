import React from 'react';

const CompModal = ({_setShowUl , _setPoint, _setShowModal} ) => {

  function fnResetHandler( ){
    _setShowUl(true)
    _setShowModal(false)
    _setPoint(new Array(3).fill('x'))

  }

  return (
    <div className="modal">
      <p>
        끄읕 <br />
        <button onClick={fnResetHandler}>다시시작하기</button>
      </p>
    </div>
  );
};

export default CompModal;