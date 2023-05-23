import React, { useState } from 'react';
import { useContext } from 'react';
import { DDayContext } from './CompDDay';

const CompAdd = () => {

  const [_title, _setTitle] = useState('')
  const [_date, _setDate] = useState('')
  const [_time, _setTime] = useState('00:00')// 사용자가 안넣었을때를 위해서

  const {
    //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
    _showComp, _setShowComp,
    _ddayArr, _setDdayArr,
    //dday일정을 가공해서 출력할 배열
    _ddayOutputArr, _setDdayOutputArr
  } = useContext(DDayContext)

  const fnSubmitHandler = function (e) {
    e.preventDefault() //아래 셋쇼를 지워보면 프리벤트디폴트 동작하는지 알수있음
    let dday = new Date(`${_date}T${_time}`) 
    let ddayStamp = parseInt(dday.getTime() / 1000)
    let nowStamp = parseInt(Date.now() / 1000)
    let ddayObj = {
      id: Date.now(),
      title: _title,
      dday:`${_date}T${_time}`
    }

    if (ddayStamp < nowStamp) {
      alert('과거 시점은 dday로 설정하실 수 없습니다')
      return false
    } else if ((ddayStamp - nowStamp) / (24 * 60 * 60) > 300) {
      alert('300일 이후 시점은 dday로 설정하실 수 없습니다')
    }
    if ((ddayStamp < nowStamp) || (ddayStamp - nowStamp) / (24 * 60 * 60) > 300) {//과거이거나 미래인경우 
      _setDate('')
      _setTime('00:00')
      return false
    }
    const ddayArr = [ddayObj, ..._ddayArr]
    localStorage.setItem('ddayArrStorage', JSON.stringify(ddayArr))
    _setDdayArr(ddayArr) //원본배열
    _setDdayOutputArr(ddayArr) //출력배열
    _setShowComp('list')
  }

  const fnChangeHandler = function (e) {
    if (e.target.type === 'text') {
      _setTitle(e.target.value)
    } else if (e.target.type === 'date') {
      _setDate(e.target.value)
    } else {
      _setTime(e.target.value)
    }
  }

  return (
    <form onSubmit={fnSubmitHandler} className='dday-add'>
      <p>
        <label htmlFor="input-id1"><i className="fa-solid fa-pencil"></i> DDay Title</label>
        <input id='input-id1' required onChange={fnChangeHandler} type="text" placeholder='dday 일정명을 입력해 주세요' value={_title} />
      </p>
      <p>
        <label htmlFor="input-id2"><i className="fa-regular fa-calendar"></i> DDay Date</label>
        <input id='input-id2' required onChange={fnChangeHandler} type="date" value={_date} />
      </p>
      <p>
        <label htmlFor="input-id3"><i className="fa-regular fa-clock"></i> DDay Time</label>
        <input id='input-id3' required onChange={fnChangeHandler} type="time" value={_time} />
      </p>
      <p></p>
      <button >추가하기</button>
      <i onClick={()=>{_setShowComp('list')}} className="fa-regular fa-circle-left"></i>
    </form>
  );
};

export default CompAdd;