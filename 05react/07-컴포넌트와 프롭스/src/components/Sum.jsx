import React, { useRef, useState } from 'react';

const fnGetNum = () => Math.floor(Math.random() * 10)




const Sum = ({ _setPoint, _point }) => {

  const [_num1, _setNum1] = useState(fnGetNum)
  const [_num2, _setNum2] = useState(fnGetNum)

  const refInput = useRef()


  let fnSubmitHandler = function (e) {
    e.preventDefault()
    // let userNum = parseInt(refInput.current.value)
    // if (_num1 + _num2 === userNum) _setPoint(prev=> prev+1)
  }

  let fnInputHandler = function (e) { //해당이벤트가 이루어지고있는애
    /*     let userNum = parseInt(e.target.value) */
  }

  return (
    <form onSubmit={fnSubmitHandler}>
      <span className='num1'>{_num1}</span>
      +
      <span className='num2'>{_num2}</span>
      =
      <input className='userNum' onInput={fnInputHandler} ref={refInput} type="number" min="0" max="20" required />
    </form>
  );
};

export default Sum;