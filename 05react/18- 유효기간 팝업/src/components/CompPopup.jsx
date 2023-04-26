import React, { useState } from 'react';

const CompPopup = ({ _setShow }) => {
  const [_chk, _setChk] = useState(false)

  function fnCheckHandler(e) {
    _setChk(e.target.checked)
  }
  function fnClosePopupHandler() {
    if (_chk === true) { //오늘 하루 열지않기를 체크했을경우
      window.localStorage.setItem('expires', Date.now() + (60 * 60 * 24 * 1000))
     //앱이 실행된 시간으로부터 팝업유효기간이 지나지 않았다면
    }
    _setShow(false)
    }
  

  
  return (
    <div className='popup'>
      <h2>팝업창</h2>
      <p><input onChange={fnCheckHandler} type="checkbox" />
        오늘 하루 창 열지 않기</p>
      <button onClick={fnClosePopupHandler}>닫기</button>
    </div>
  );
};

export default CompPopup;