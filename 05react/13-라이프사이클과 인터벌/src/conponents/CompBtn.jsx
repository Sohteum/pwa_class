import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompBtn = () => {

  const { _setSec, _disabled, _setDisabled, intervalID, _setReadOnly, refInput } = useContext(AppContext)

  function fnTimeStartHandler() {
    refInput.current.value=''
    _setDisabled(true)
    _setReadOnly(true)
    intervalID.current = setInterval(function () { //타이머는 클리어인터벌 못씀 그럼 시간이 멈추니까 그래서 버튼을 못누르게 디스에이블로 멈추기
      _setSec(prev => prev - 1)//특정이벤트 안에서 바꾸는것.안그러면 무한루프에 빠짐
      // console.log(_sec) //setInterval시작시점의 초기값만 확인할 수 잇음 그래서 이거 못갖다써
    }, 1000)
  }

  return (
    <button onClick={fnTimeStartHandler} disabled={_disabled}>
      타이머시작
    </button>
  );
};

export default CompBtn;