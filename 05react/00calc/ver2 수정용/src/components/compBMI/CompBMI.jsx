import React, { createContext, useState } from 'react';
import CompForm from './CompForm';
import CompResult from './CompResult';
import { fnSetObj } from '../../script/bmi';

export const BMIContext = createContext();

const CompBMI = () => {
  const [_active, _setActive] = useState('');
  const [_gender, _setGender] = useState();
  const [_cm, _setCm] = useState(); //여기서 0 을 넣어버리면 placeholder가 안나옴
  const [_kg, _setKg] = useState();
  const [_chkObj, _setChkObj] = useState(fnSetObj(0));
  const [_err, _setErr] = useState(false);
  const [_deg, _setdeg] = useState(90);
  const [_bmi, _setBmi] = useState(0);

  return (
    <BMIContext.Provider
      value={{
        //액티브스테잇, _setActive('active')문자열로 설정할 경우 결과화면이 나옴
        _active,
        _setActive,
        //성별스테잇, 레디오버튼 클릭할때마다(change)할때마다 스테이트가 변경됨, _setGender(e.target.value)사용
        _gender,
        _setGender,
        //신장 스테잇, input에 값이 입력될때마다 input의 value값으로 변경
        _cm,
        _setCm,
        //체중 스테잇, input에 값이 입력될때마다 input의 value값으로 변경
        _kg,
        _setKg,
        //남, 녀 애디오버튼 체크상태를 관리하는 객체 스테잇, (트루, 폴스이용)
        //fnSetChkoObj(n)함수를 이용해서 n번째 버튼의 check값만 true로 전달. 측정하기 하고 다시측정했을때 초기값을 리젯하려고 만듦
        _chkObj,
        _setChkObj,
        //bmi결과에 따른 출력화면 관리 스테잇,
        _err,
        _setErr,
        //저울 각도 설정 관리 스테잇,
        _deg,
        _setdeg,
        _bmi,
        _setBmi,
      }}
    >
      <section className='bmi'>
        <h2>BMI</h2>
        <CompForm />
        <CompResult />
      </section>
    </BMIContext.Provider>
  );
};

export default CompBMI;
