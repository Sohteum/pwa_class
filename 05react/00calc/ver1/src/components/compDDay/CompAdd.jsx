import React from 'react';
import { useContext } from 'react';
import { DDayContext } from './CompDDay';

const CompAdd = () => {

const {
    //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
    _showComp, _setShowComp
}= useContext(DDayContext)

  const fnSubmitHandler = function(e){
    e.preventDefault() //아래 셋쇼를 지워보면 프리벤트디폴트 동작하는지 알수있음
    _setShowComp('list')
  }

  return (
    <form onSubmit={fnSubmitHandler} className='dday-add'>
      <p>
        <label htmlFor=""><i className="fa-solid fa-pencil"></i> DDay Title</label>
        <input type="text" placeholder='dday 일정명을 입력해 주세요' />
      </p>
      <p>
        <label htmlFor=""><i className="fa-regular fa-calendar"></i> DDay Date</label>
        <input type="date" />
      </p>
      <p>
        <label htmlFor=""><i className="fa-regular fa-clock"></i> DDay Time</label>
        <input type="time" value='00:00:00'/>
      </p>
      <p></p>
      <button >추가하기</button>
    </form>
  );
};

export default CompAdd;