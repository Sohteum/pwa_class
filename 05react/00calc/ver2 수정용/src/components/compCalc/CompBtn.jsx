import React, { useContext } from 'react';
import { CalcContext } from './CompCalc';
import { fnSetOutput } from '../../script/btnsArr';


const CompBtn = ({ data }) => {
  const { type, char } = data
  const { _output, _setOutput, _setShowModal, _setErrMsg } = useContext(CalcContext)

  const fnClickHandler = function () { //스테이트로 보내던지 자식에게 프롭스로 함수로 보내던지.(이 두가지가 대표적, 아니면 밖에서 하는게 더 좋을수 있음) 컴포넌트 안에서만 돌아가는 함수 state 그리고 자식이 쓸수있도록 해야하는경우가 있고, 
    const { output, showModal, errMsg } = fnSetOutput(_output, type, char)
    _setOutput(output)// 아웃풋은 빈 문자열이니까 글자얌. 글자가 이어붙음. 증감연간으로 이어붙일 수 있다. 그래서 그 방식으로 이어 붙이는것.//빈글자를 넣는다면 output에 계속 한글자만 나오겠지. 그러니까 지금현재 화면에 찍히고 있는애를 넣어줘야 이어서 쓸수있음 그게 _output//근데 무조건 한글자만 찍히는건 아니니까 다른 파라미터도 받아야함
    _setShowModal(showModal)
    _setErrMsg(errMsg)
  }

  return (
    <li>
      <button onClick={fnClickHandler}>{char}</button> {/* 버튼이 아웃풋을 바꿔줘야함 그러니까 context를 사용해야함 */}
    </li>
  );
};

export default CompBtn;