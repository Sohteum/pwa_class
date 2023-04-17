import React, { useState } from 'react';

const fnGetRandom = () => Math.floor(Math.random() * 10)

const CompSum = ({_setShowModal, _arrPoint, _setArrPoint, idx }) => {

  const [_num1, _setNum1] = useState(fnGetRandom())
  const [_num2, _setNum2] = useState(fnGetRandom())

  const fnInputHandler = function (e) {
    let arrPoint = [..._arrPoint]//idx는 몇번째 문제인지
    arrPoint[idx] = (_num1 + _num2 === parseInt(e.target.value)) ? "o" : "x";
    _setShowModal((arrPoint.filter(v => v === 'o').length === 5) ? true : false)
    _setArrPoint(arrPoint)
  }




  return (
    <>
      <span>{_num1}</span> +
      &nbsp;
      <span>{_num2}</span> =
      &nbsp;
      <input onInput={fnInputHandler} type="number" min="0" max="20" />

      <hr />
    </>
  );
};

export default CompSum;