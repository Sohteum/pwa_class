import React, { useContext, useEffect, useState } from 'react';
import { BMIContext } from './CompBMI';
import { fnSetObj } from '../../script/bmi';
import { fnSetDegree } from '../../script/bmi';
import CompMorph from './CompMorph';

const CompResult = () => {
  const { _active, _gender, _setActive, _setChkObj, _cm, _setCm, _kg, _setKg, _bmiResultObj, _setBmiResultObj } = useContext(BMIContext);

  const [_deg, _setDeg] = useState(0);

  let { bmi, bmiNum, bmiResult, fill } = _bmiResultObj;

  useEffect(() => {
    if (_active) {
      let timeoutID;
      clearTimeout(timeoutID); //연타해서 그거 클리어하는것과같은거
      timeoutID = setTimeout(() => {
        _setDeg(fnSetDegree(_gender, bmi));
        window.TweenMax.to('.morph .org', 1, { morphSVG: `.morph .${bmiNum}`, fill: fill, ease: window.Linear.easeNone }); //외부함수는 윈도우쩜으로 찾는다
      }, 500);
    }
  });

  const fnResetHandler = function () {
    _setActive(''); //css구현을 위함  여백들어가면 true, 없으면 false
    _setChkObj(fnSetObj(0));
    _setCm('');
    _setKg('');
    _setDeg(0);
    window.TweenMax.to('.morph .org', 1, { morphSVG: `.morph .man1`, fill: '#8FACCA', ease: window.Linear.easeNone }); //외부함수는 윈도우쩜으로 찾는다
  };

  return (
    <div className={`bmi-result ${_active}`}>
      <h2> bmi result</h2>
      <div className='output'>
        <CompMorph />
        <figure className='board'>
          <img
            className='pin'
            style={{ transform: `translate(7%,50%) rotate(${_deg}deg)` }}
            src={require('../../assets/img/bmiPin.svg').default}
            alt=''
          />
          <img
            src={require('../../assets/img/bmiBoarrd.svg').default}
            alt=''
          />
        </figure>
        {/* {bmi}
        <br />
        {bmiNum}
        <br />
        {bmiResult} */}
      </div>

      <button onClick={fnResetHandler}>
        <i className='fa-solid fa-rotate-right'></i>다시측정하기
      </button>
    </div>
  );
};

export default CompResult;
