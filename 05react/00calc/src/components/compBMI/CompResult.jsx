import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';



const CompResult = () => {

  const { _active, _setActive, _setChk, _setRadioKey1, _setRadioKey2 } = useContext(BMIContext)

  const fnResetHandler = function () {
    _setActive('')
    _setChk(false)
    _setRadioKey1(c => c + 2)
    _setRadioKey2(c => c + 2)
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