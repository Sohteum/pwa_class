import React, { useState } from 'react';
import { useContext } from 'react';
import { DDayContext } from './CompDDay';
import CompListItem from './CompListItem';
import CompFilterForm from './CompFilterForm';

const CompList = () => {

  const [_filterActive, _setFilterActive] = useState('')
  const [_searchText,_setSearchText] = useState('')

  const {
    //dday목록화면과 dday추가화면 중에 하나를 보여주는 스테이트 . 값이 list이면 complist를 보여주고 add면 compadd가 나옴
    _showComp, _setShowComp,
    //dday일정(객체)를 담고있는 배열
    _ddayArr, _setDdayArr,
    //dday일정을 가공해서 출력할 배열
    _ddayOutputArr, _setDdayOutputArr,
   

  } = useContext(DDayContext);

  const fnFilterHandelr = function (e) {
    e.currentTarget.classList.toggle('active') //버튼이 자식이 둘이나 있어서 커런트로 써야됨 
    _setFilterActive(c => (c!=='active')? 'active':'') //현재값이 액티브가 아니라면 액티브를 달아주겠당
    _setSearchText('')
  }

  return (
    <>
      <article className='dday-list'>

        <button onClick={fnFilterHandelr} className='filter-btn'>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
          <i className="fa-solid fa-magnifying-glass-minus"></i>
        </button>
        {
          (_ddayOutputArr.length)
            ?
            <ul>{_ddayOutputArr.map(v => <CompListItem key={v.id} item={v} />)}</ul>//배열에 객체 있는 경우
            :
            <p className='no-msg'>"DDay 일정이 존재하지 않습니다"</p>//배열이 비었을경우
        }

        <CompFilterForm _filterActive={_filterActive} _setFilterActive={_setFilterActive}  _searchText={_searchText} _setSearchText={_setSearchText}/>

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
