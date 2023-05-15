import React, { useContext, useEffect, useState } from 'react';
import { BMIContext } from './CompBMI';
import { fnSetObj } from '../../script/bmi';
import { fnSetDegree } from '../../script/bmi';
import CompMorph from './CompMorph';

const CompResult = () => {
  const {  //액티브스테잇, _setActive('active')문자열로 설정할 경우 결과화면이 나옴
    _active, _setActive,
    //성별스테잇, 레디오버튼 클릭할때마다(change)할때마다 스테이트가 변경됨, _setGender(e.target.value)사용
    _gender, _setGender,
    //신장 스테잇, input에 값이 입력될때마다 input의 value값으로 변경
    _cm, _setCm,
    //체중 스테잇, input에 값이 입력될때마다 input의 value값으로 변경
    _kg, _setKg,
    //남, 녀 애디오버튼 체크상태를 관리하는 객체 스테잇, (트루, 폴스이용) 
    //fnSetChkoObj(n)함수를 이용해서 n번째 버튼의 check값만 true로 전달. 측정하기 하고 다시측정했을때 초기값을 리젯하려고 만듦
    _chkObj, _setChkObj,
    //bmi결과에 따른 출력화면 관리 스테잇, 
    _err, _setErr,
    //저울 각도 설정 관리 스테잇,
    _deg, _setdeg,
    _bmi, _setBmi,
  } = useContext(BMIContext);




  useEffect(() => {

  });

  const fnResetHandler = function () {//폼 양식 초기화하고 다시 검사 즉, bmi수치 재검사할 수 있도록 초기화
    _setActive(''); //css구현을 위함  여백들어가면 true, 없으면 false//결과화면 바깥쪽으로 이동한다
    _setChkObj(fnSetObj(0));//폼양식의 남녀체크 모두 해제
    _setCm('');//폼양식의 CM input초기화
    _setKg('');//폼양식의 kg input초기화
    _setdeg(90)
    window.TweenMax.to('.manorg', 1, { morphSVG: `.man3`, fill: '#000', ease: window.Linear.easeNone })
    window.TweenMax.to('.womanorg', 1, { morphSVG: `.woman3`, fill: '#000', ease: window.Linear.easeNone })

  };

  return (
    <div className={`bmi-result ${_active}`}>
      <h2> bmi result</h2>
      {
        (_err) ? //bmi수치가 에러라면
          <div className='output err'>{/* bmi수치가 비정상적인 결과화면 */}
            <p>
              <i className="fa-solid fa-weight-scale"></i>
              <i className="fa-solid fa-xmark"></i>
            </p>
            <p>측정할 수 없는 BMI수치결과입니다</p>
          </div>
          :
          <div className='output result'>{/* 정상적인 결과화면 */}
            <CompMorph />
            <figure className='board'>
              <img
                className='pin'
                style={{ transform: `translate(7%,50%) rotate(${_deg}deg)` }}
                src={require('../../assets/img/bmiPin.svg').default}
                alt=''
              />
              <img
                src={require('../../assets/img/bmiBoard.svg').default}
                alt=''
              />
            </figure>
            <p>
              {_bmi}
            </p>
          </div>
      }

      <button onClick={fnResetHandler}>
        <i className='fa-solid fa-rotate-right'></i>다시측정하기
      </button>
    </div>
  );
};

export default CompResult;
