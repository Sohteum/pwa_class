import React, { useState } from 'react';

const fnGetRandom = () => Math.floor(Math.random() * 10)

const CompSumLi = ({ _point, idx, _setPoint, _setShowModal, _setShowUl }) => {

  const [_num1, _setNum1] = useState(fnGetRandom())
  const [_num2, _setNum2] = useState(fnGetRandom())

  function fnInputHandler(e) {
    let arr = [..._point]
    arr[idx] = (parseInt(e.target.value) === _num1 + _num2) ? 'o' : 'x'
    _setPoint(arr)//이건 다음에 화면을 이렇게 바꾸겠다는거. 
   //console.log(_point);//_point는 못쓰고, setpoint는 한박자가 느려서 arr로 해야됨.

    _setShowModal((arr.filter(v=> v==='o').length===3)&&true ) //state는 복제, 출력, 바인딩할때만 씀 왜냐면 한단계 느리게 갱신되니까
    _setShowUl((arr.filter(v=> v==='o').length!==3)|| false ) // 참이면 트루, 거짓이면 폴스. 1이랑 2일대 보여주고 3이되면 숨긴다는 뜻. 그러니까 3이 아ㅇ니라면 트루를 내뱉는다. 
    // _setShowUl((arr.filter(v=> v==='o').length!==3)&& true ) 
  }

  return (
    <div>
      <b>{idx}) </b>
      <span>{_num1}</span>
      +
      <span>{_num2}</span>
      =
      <input onInput={fnInputHandler} type="number" min="0" max="20" />
    </div>
  );
};

export default CompSumLi;