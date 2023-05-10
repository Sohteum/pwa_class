import React, { createContext, useState } from 'react';
import CompForm from './CompForm';
import CompResult from './CompResult';

export const BMIContext = createContext()

const CompBMI = () => {

  const [_active, _setActive] = useState('')
  const [_gender, _setGender] = useState()
  const [_cm, _setCm] = useState()
  const [_kg, _setKg] = useState()
  const [_chk, _setChk] = useState(false)
  const [_radioKey1, _setRadioKey1] = useState(1)
  const [_radioKey2, _setRadioKey2] = useState(2)

  return (
    <BMIContext.Provider value={{
      _active, _setActive,
      _gender, _setGender,
      _cm, _setCm,
      _kg, _setKg,
      _chk, _setChk,
      _radioKey1, _setRadioKey1,
      _radioKey2, _setRadioKey2,
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