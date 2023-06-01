import React, { useEffect } from 'react';
import CompList from './CompList';
import { useState } from 'react';
import { createContext } from 'react';
import CompAdd from './CompAdd';
import CompTime from './CompTime';
import { fnDdayArrInit, fnTimer } from '../../script/dday';

export const DDayContext = createContext();

const CompDDay = () => {
  const [_showComp, _setShowComp] = useState('list');
  const [_ddayArr, _setDdayArr] = useState(fnDdayArrInit()); //원본
  const [_ddayOutputArr, _setDdayOutputArr] = useState(_ddayArr); //출력용

  return (
    <DDayContext.Provider
      value={{
        //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
        _showComp,
        _setShowComp, //트루면 목록이 폴스면 에드폼이 나옴
        //dday일정(객체)를 담고있는 배열
        _ddayArr,
        _setDdayArr,
        //dday일정을 가공해서 출력할 배열
        _ddayOutputArr,
        _setDdayOutputArr,
      }}
    >
      <section className='dday'>
   
        <h2>D-Day</h2>

        <CompTime />
        {_showComp === 'list' && <CompList />}
        {_showComp === 'add' && <CompAdd />}
      </section>
    </DDayContext.Provider>
  );
};

export default CompDDay;
