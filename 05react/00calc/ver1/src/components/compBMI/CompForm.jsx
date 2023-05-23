import React, { useContext } from 'react';
import { BMIContext } from './CompBMI';
import { fnCheckBMI, fnSetObj } from '../../script/bmi';

const CompForm = () => {

  const {
    //액티브스테잇, _setActive('active')문자열로 설정할 경우 결과화면이 나옴
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
  } = useContext(BMIContext)

  //측정하기 버튼 클릭시 발생하는 이벤트
  const fnSubmitHandler = function (e) {
    e.preventDefault()
    const { bmi, deg ,err} = fnCheckBMI(_gender, _cm, _kg)  // 에러여부, _setBmiResultObj에 BMI수치, 각도를 객체로 리턴,  morph애니메이션을 리턴//여기서 이렇게 구조분해 안하면 셋디그리에서 오브젝트의.뭐뭐뭐이렇게 써줘야되는거지
    _setErr(err)
    _setActive('active') //결과화면이 튀어나옴
    _setdeg(deg)
    _setBmi(bmi)
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
        <input onInput={fnInputHandler} value={_cm || ''} step="0.1" id="tall" type="number" required min="30" max="500" placeholder='cm단위로 입력해주세요' />
      </div>
      <div>{/* 체중 */}
        <label htmlFor="weight"><i className="fa-solid fa-weight-scale"></i>체중을 입력해주세요</label>
        <input onInput={fnInputHandler} value={_kg || ''} step="0.1" id="weight" type="number" min="30" max="500" required placeholder='kg단위로 입력해주세요' />
      </div>{/* value={_kg||''}값이 없으면 빈값을 넣어줘. */}
      <button>측정하기</button>

    </form>
  );
};

export default CompForm;