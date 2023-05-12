import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';
import { fnCheckBMI, fnSetObj } from '../../script/bmi';

const CompForm = () => {

  const {
    _setActive,
    _gender, _setGender,
    _chkObj, _setChkObj,
    _cm, _setCm,
    _kg, _setKg,
    _bmiResultObj, _setBmiResultObj
  } = useContext(BMIContext)

  const fnSubmitHandler = function (e) {
    e.preventDefault()
    _setBmiResultObj(fnCheckBMI(_gender, _cm, _kg))
    _setActive('active') //결과화면이 튀어나옴
  }

  const fnChangeHandler = function (e) {
    _setChkObj(fnSetObj(e.target.getAttribute('data-n')))
    _setGender(e.target.value)
  }/* 성별 */

  const fnInputHandler = function (e) {
    if (e.target.id === "tall") {
      _setCm(parseFloat(e.target.value))
    } else {
      _setKg(parseFloat(e.target.value))
    }
  }/* 신장, 체중 */

  return (
    <form onSubmit={fnSubmitHandler}>

      <div className='radios'>
        <label ><i className="fa-solid fa-venus-mars"></i>성별을 입력해주세요</label>
        <p>{/* 성별 */}
          <input onChange={fnChangeHandler} value="male" checked={_chkObj[1]} data-n="1" id="male" name="gender" type="radio" required />
          <label htmlFor="male"><i className="fa-solid fa-person"></i>male</label>
          <input onChange={fnChangeHandler} value="female" checked={_chkObj[2]} data-n="2" id="female" name="gender" type="radio" required />
          <label htmlFor="female"><i className="fa-solid fa-person-dress"></i>female</label>
        </p>
      </div>
      <div>{/* 신장 */}
        <label htmlFor="tall"><i className="fa-solid fa-ruler-vertical"></i>신장을 입력해주세요</label>
        <input onInput={fnInputHandler} value={_cm||''} step="0.1" id="tall" type="number" required min="30" max="500" placeholder='cm단위로 입력해주세요' />
      </div>
      <div>{/* 체중 */}
        <label htmlFor="weight"><i className="fa-solid fa-weight-scale"></i>체중을 입력해주세요</label>
        <input onInput={fnInputHandler} value={_kg||''} step="0.1" id="weight" type="number" min="30" max="500" required placeholder='kg단위로 입력해주세요' />
      </div>{/* value={_kg||''}값이 없으면 빈값을 넣어줘. */}
      <button>측정하기</button>

    </form>
  );
};

export default CompForm;