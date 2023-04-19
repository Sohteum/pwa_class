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
    _setShowUl((arr.filter(v=> v==='o').length!==3)|| false ) // 참이면 트루, 거짓이면 폴스.
    // _setShowUl((arr.filter(v=> v==='o').length!==3)&& true ) 
    //여기서 &&연산자랑 ||연산자를 살펴보면,컴퓨터는 &&둘중에 앞에 있는게 틀리면 패싱(둘다 맞아야하니까), ||연산자는 앞에있는게 true면 패싱(하나만 맞으면 되니까)
    //그러니까 여기서는 앞에 값이 false가 나와야 뒤에 있는게 실행되는거. 그니까 3이면(3이 아닌게 아니라면) 실행이되는거지
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