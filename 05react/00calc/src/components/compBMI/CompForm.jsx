import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';

const CompForm = () => {

  const { _setActive, _setGender , _chk, _radioKey1, _radioKey2} = useContext(BMIContext)

  const fnSubmitHandler = function (e) {
    e.preventDefault()
    _setActive('active')
  }

  const fnChangeHandler = function (e) {
    console.log(e.target.value);
  }

  return (
    <form onSubmit={fnSubmitHandler}>

      <div className='radios'>
        <label ><i className="fa-solid fa-venus-mars"></i>성별을 입력해주세요</label>
        <p>
          <input key={_radioKey1} onChange={fnChangeHandler} defaultChecked={_chk} defaultValue="male" id="male" name="gender" type="radio" required />
          <label htmlFor="male"><i className="fa-solid fa-person"></i>male</label>
          <input key={_radioKey2} onChange={fnChangeHandler} defaultChecked={_chk} defaultValue="female" id="female" name="gender" type="radio" required />
          <label htmlFor="female"><i className="fa-solid fa-person-dress"></i>female</label>
        </p>
      </div>
      <div>
        <label htmlFor="tall"><i className="fa-solid fa-ruler-vertical"></i>신장을 입력해주세요</label>
        <input id="tall" type="number" required placeholder='cm단위로 입력해주세요' />
      </div>
      <div>
        <label htmlFor="weight"><i className="fa-solid fa-weight-scale"></i>체중을 입력해주세요</label>
        <input id="weight" type="number" required placeholder='kg단위로 입력해주세요' />
      </div>
      <button>측정하기</button>

    </form>
  );
};

export default CompForm;