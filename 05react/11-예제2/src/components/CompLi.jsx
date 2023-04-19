import React, { useContext, useState } from 'react';
import { AppContext } from '../App';
const fnGetNumber = () => Math.floor(Math.random()*10)

const CompLi = ({i}) => {
  const {
    _pointArr, _setPointArr, fnChangePoint, _setReadOnly, _readOnly, _setShowBtn,_listCnt
  } = useContext(AppContext)
  const [_num1, _setNum1] = useState(fnGetNumber())
  const [_num2, _setNum2] = useState(fnGetNumber())

  
  function fnInputHandler(e){
    
    const pointArr = [..._pointArr] ;
    pointArr[i] = (_num1 + _num2 === parseInt(e.target.value) )?'o':'x'
    _setPointArr(pointArr)
    _setReadOnly((fnChangePoint(pointArr) === _listCnt)?true:false)
    _setShowBtn((fnChangePoint(pointArr) === _listCnt)?true:false)
    if(fnChangePoint(pointArr) === _listCnt) e.target.blur()
  }//fn

  return (
    <li>
      <span>{_num1}</span>
      +
      <span>{_num2}</span>
      =
      <input 
      onInput={fnInputHandler} 
      type="number" 
      min="0" max="9"  
      readOnly={_readOnly}
      style={{background:'#FFF'}}
      />
    </li>
  );
};

export default CompLi;