import React from 'react';
import { useContext } from 'react';
import { DDayContext } from './CompDDay';
import CompListItem from './CompListItem';

const CompList = () => {
  const {
    //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
    _showComp, _setShowComp,
    //dday일정(객체)를 담고있는 배열
    _ddayArr, _setDdayArr,
    //dday일정을 가공해서 출력할 배열
    _ddayOutputArr, _setDdayOutputArr
  } = useContext(DDayContext);

  return (
    <>
      <article className='dday-list'>
        {
          (_ddayOutputArr.length)
            ?
            <ul>{_ddayOutputArr.map(v => <CompListItem key={v.id} item={v} />)}</ul>//배열에 객체 있는 경우
            :
            <p className='no-msg'>"DDay 일정이 존재하지 않습니다"</p>//배열이 비었을경우
        }
      </article>
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
      </button>
    </>
  );
};

export default CompList;
