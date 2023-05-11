import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';
import { fnSetObj } from '../../script/bmi';

const CompForm = () => {

  

  const { _setActive, _setGender , _chkObj, _setChkObj} = useContext(BMIContext)

  const fnSubmitHandler = function (e) {
    e.preventDefault()
    _setActive('active')
  }

  const fnChangeHandler = function (e) {
    _setChkObj(fnSetObj(e.target.getAttribute('data-n')))
  }

  const fnInputHandler = function(){

  }

  return (
    <form onSubmit={fnSubmitHandler}>

      <div className='radios'>
        <label ><i className="fa-solid fa-venus-mars"></i>성별을 입력해주세요</label>
        <p>
          <input onChange={fnChangeHandler} checked={_chkObj[1]} data-n="1" id="male" name="gender" type="radio" required />
          <label htmlFor="male"><i className="fa-solid fa-person"></i>male</label>
          <input onChange={fnChangeHandler} checked={_chkObj[2]} data-n="2" id="female" name="gender" type="radio" required />
          <label htmlFor="female"><i className="fa-solid fa-person-dress"></i>female</label>
        </p>
      </div>
      <div>
        <label htmlFor="tall"><i className="fa-solid fa-ruler-vertical"></i>신장을 입력해주세요</label>
        <input onInput={fnInputHandler} id="tall" type="number" required placeholder='cm단위로 입력해주세요' />
      </div>
      <div>
        <label htmlFor="weight"><i className="fa-solid fa-weight-scale"></i>체중을 입력해주세요</label>
        <input onInput={fnInputHandler} id="weight" type="number" required placeholder='kg단위로 입력해주세요' />
      </div>
      <button>측정하기</button>

    </form>
  );
};

export default CompForm;