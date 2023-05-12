import React, { createContext, useState } from 'react';
import CompForm from './CompForm';
import CompResult from './CompResult';
import { fnSetObj } from '../../script/bmi';

export const BMIContext = createContext()

const CompBMI = () => {

  const [_active, _setActive] = useState('')
  const [_gender, _setGender] = useState()
  const [_cm, _setCm] = useState()//여기서 0 을 넣어버리면 placeholder가 안나옴
  const [_kg, _setKg] = useState()
  const [_chkObj, _setChkObj] = useState(fnSetObj(0))
  const [_bmiResultObj, _setBmiResultObj] = useState({})


  return (
    <BMIContext.Provider value={{
      _active, _setActive, //모달 나올때 액티브로 만듦
      _gender, _setGender,
      _cm, _setCm,
      _kg, _setKg,
      _chkObj, _setChkObj,
      _bmiResultObj, _setBmiResultObj,
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

