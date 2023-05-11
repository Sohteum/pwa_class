import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';
import { fnSetObj } from '../../script/bmi';


const CompResult = () => {

  const { _active, _setActive, _setChkObj} = useContext(BMIContext)

  const fnResetHandler = function () {
    _setActive('') //css구현을 위함  
    _setChkObj(fnSetObj(1))
  }

  return (

    <div className={`bmi-result ${_active}`}>
      <h2> bmi result</h2>
      <div className="output">
        결과화면
      </div>

      <button onClick={fnResetHandler}>
        <i className="fa-solid fa-rotate-right"></i>다시측정하기
      </button>
    </div>

  );
};

export default CompResult;