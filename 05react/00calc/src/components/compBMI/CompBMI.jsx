import React, { createContext, useState } from 'react';
import CompForm from './CompForm';
import CompResult from './CompResult';
import { fnSetObj } from '../../script/bmi';

export const BMIContext = createContext()

const CompBMI = () => {

  const [_active, _setActive] = useState('')
  const [_gender, _setGender] = useState()
  const [_cm, _setCm] = useState()
  const [_kg, _setKg] = useState()
  const [_chkObj, _setChkObj] = useState(fnSetObj(1))


  return (
    <BMIContext.Provider value={{
      _active, _setActive, //모달 나올때 액티브로 만듦
      _gender, _setGender,
      _cm, _setCm,
      _kg, _setKg,
      _chkObj, _setChkObj,
       }}>
      <section className='bmi'>
        <h2>bmi</h2>
        <CompForm />
        <CompResult />
      </section>
    </BMIContext.Provider>
  );
};

export default CompBMI;

/* 
1. 처음에는 디폴트체크드로 Male체크
2. 체크가 변경이 가능하도록 변경
3. 입력하면 뜨는 모달창에서 다시측정하기 누르면(결과화면에서) 원래대로 돌아가기(male체크되어있기) 
*/