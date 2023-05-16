import React from 'react';
import CompList from './CompList';
import { useState } from 'react';
import { createContext } from 'react';
import CompAdd from './CompAdd';
import CompTime from './CompTime';

export const DDayContext = createContext()

const CompDDay = () => {
  const [_showComp, _setShowComp] = useState('list')
  return (
    <DDayContext.Provider value={{
      //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
      _showComp, _setShowComp //트룸면 목록이 폴스면 에드폼이 나옴
    }}>
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