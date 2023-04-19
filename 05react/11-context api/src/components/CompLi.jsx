import React, { useContext, useState } from 'react';
import { AppContext } from '../App';

const fnGetRandom = () => Math.floor(Math.random() * 10)


const CompLi = ({ i }) => {

  const { _pointArr, _setPointArr, fnChangePoint,_readOnly, _setReadOnly, _setShowBtn} = useContext(AppContext)
  const [_num1, _setNum1] = useState(fnGetRandom())
  const [_num2, _setNum2] = useState(fnGetRandom())

  function fnOnInputHandler(e) {

    const pointArr = [..._pointArr];
    pointArr[i] = (_num1 + _num2 === parseInt(e.target.value)) ? 'o' : 'x' //이 값을 해당배열의 해당번째 애가 받는것    //여기서 1은 배열의 번호를 말하는거자나 그러니까 해당번째를 바꿀려면 해당번째를 넣어야하는데 그게 i 라는거지
    _setPointArr(pointArr)
    _setReadOnly((fnChangePoint(pointArr) ===3)? true : false)
    _setShowBtn((fnChangePoint(pointArr) ===3)? true : false)
    if(fnChangePoint(pointArr) ===3) e.target.blur()
  }


  return (
    <li>
      <span>{_num1}</span>
      +
      <span>{_num2}</span>
      =
      <input onInput={fnOnInputHandler} type="number" min="0" max="9" readOnly={_readOnly} style={{background:'#CCC'}}/>
    </li>
  );
};

export default CompLi;

//문제개수가 랜덤으로 나오기
//스테이트로 색을 변경하기, 3점이 나오면 회색이 됨