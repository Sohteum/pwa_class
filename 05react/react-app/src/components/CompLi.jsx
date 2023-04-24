import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

const fnGetRandom = () => Math.floor(Math.random() * 10)//만약에 임폴트 익스폴트를 하면 공유는 할 수 있음

const CompLi = ({i}) => {

  const { _pointArr, _setPointArr } = useContext(AppContext)
  const [_num1, _setNum1] = useState(fnGetRandom())
  const [_num2, _setNum2] = useState(fnGetRandom()) //부모걸 갖다쓰면 같은 문제가 나오니까 여기서 스테잇 하는거.
  const [_ox, _setOX] = useState('x') //스테이트!!!

  function fnInputHandler(e) {
    let userNum = parseInt(e.target.value)
    let pointArr = [..._pointArr]
    if (userNum === _num1 + _num2) {//해당 문제가 정답일경우
      _setOX('o')
      pointArr[i] = 'o'
    } else {//해당 문제가 오답일경우
      _setOX('x')
      pointArr[i] = 'x'
    }
    _setPointArr(pointArr)
  }

  useEffect(() => {
    console.log('---li update');
  })

  return (
    <li>
      <span>{_num1}</span>
      +
      <span>{_num2}</span>
      =
      <input onInput={fnInputHandler} type="number" min="0" max="18" />
      &nbsp;
      <b>{_ox}</b>
    </li>
  );
};

export default CompLi;