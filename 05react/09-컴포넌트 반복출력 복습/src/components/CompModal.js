import React from 'react';

const CompModal = ({ _setShowModal, _setArrComp, _arrComp, _setArrPoint }) => {

  function fnResetHandler() {
    _setShowModal(false)
    const arrComp = _arrComp.map(v => v + 1)//키값을 지금 v로 해서 문제임. 키값이 변해야 갱신이 됨.  값을 하나라도 바꿔줘야함. 새로운 배열, 그리고 바뀐 내용물이어야함. 그래서 
    _setArrComp(arrComp)
    _setArrPoint(new Array(5).fill('x'))//함수가 아니고 배열을 리턴하는거라서 이렇게 써도 됨 변수 선언 따로 안해도 됨

  }

  return (
    <div className='modal'>
      종료되었습니다 <br />
      <button onClick={fnResetHandler} >다시하기</button>
    </div>
  );
};

export default CompModal;