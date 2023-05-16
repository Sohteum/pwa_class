import React from 'react';
import { useContext } from 'react';
import { DDayContext } from './CompDDay';

const CompList = () => {
  const {
    //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
    _showComp,
    _setShowComp,
  } = useContext(DDayContext);

  return (
    <article className='dday-list'>
      <ul>목록</ul>
      <button
        onClick={() => {
          _setShowComp('add');
        }}
        className='btn-add'
      >
        <img
          src={require('../../assets/img/timer-icon-bg.gif')}
          alt=''
        />
        D-Day 추가하기
      </button>{' '}
      {/* 콜백 안받으면 바로 실행 그럼 무한루프 */}
    </article>
  );
};

export default CompList;
