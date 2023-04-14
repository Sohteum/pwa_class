
import React, { useState } from 'react';

const fnSetRandom = () => Math.floor(Math.random() * 10)



const CompSum = ({ _setPointArr, _pointArr, idx }) => {

  const [_num1, _setNum1] = useState(fnSetRandom())
  const [_num2, _setnum2] = useState(fnSetRandom())

  const fnInputHandler = function (e) {
    let userNum = parseInt(e.target.value)
    let pointArr = [..._pointArr]

    if (_num1 + _num2 === userNum) {
      //정답을 기록할 배열>전개연산자를 활용해서 다른배열로 만들어야함 
      pointArr[idx] = '정답'
    } else {
      pointArr[idx] = '오답'
    }
    _setPointArr(pointArr)
    console.log(pointArr);
  }

  return (
    <div>

      <span> {_num1}</span>
      +
      <span >{_num2}</span>
      =
      <input onInput={fnInputHandler} type="number" min="0" max="20" />
      <hr />
    </div>
  );
};

export default CompSum;