import React, { useContext, useState } from 'react';
import { DDayContext } from './CompDDay';

const CompFilterForm = ({ _filterActive, _setFilterActive, _searchText, _setSearchText }) => {


  const {
    //dday일정(객체)를 담고있는 배열
    _ddayArr, _setDdayArr,
    //dday일정을 가공해서 출력할 배열
    _ddayOutputArr, _setDdayOutputArr
  } = useContext(DDayContext)

  const fnSortHandler = function (e) {
    const sortType = e.currentTarget.value //타입에 따라 세가지가 달라짐 
    let sortedArr //변수를 하나 만듦
    if (sortType === "latest") { sortedArr = [..._ddayArr] }//원본배열이 최신순이니까 그대로 가져오면됨

    else if (sortType === "time") { //시간순정렬
      sortedArr = [..._ddayArr].sort((a, b) => {
        if (a.dday > b.dday) {
          return 1
        } else if (a.dday < b.dday) {
          return -1
        } else {
          return 0
        }
      })
    }//sort end
    else if (sortType === "title") {
      sortedArr = [..._ddayArr].sort((a, b) => {//제목순
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })
    }//sort end
    _setDdayOutputArr(sortedArr)
    _setFilterActive('')
    document.querySelector(`.filter-btn`).classList.remove('active') //이렇게 해줘야 active가 잘 사라짐 안그러면 계속 남아있음

  }//fn
  
  const fnSearchHandler = function (e) {
    let searchText = e.target.value
    _setSearchText(searchText)    // 검색결과를 내려면, outputArr가 바뀌어야함. 원본을 복제해서 검사한다음에 그걸 변경해주는거지
    
    let searchArr = (searchText) ? _ddayArr.filter(v=> v.title.includes(searchText)): [..._ddayArr]  //인클루드는 처음에 한번 검사하면 끝남 간단하게 여기는 그거 쓰자
    _setDdayOutputArr(searchArr)
  }
  
  const fnSubmitHandler = function(e){
    e.preventDefault()
    _setSearchText('')
    _setFilterActive('')
    document.querySelector(`.filter-btn`).classList.remove('active') //이렇게 해줘야 active가 잘 사라짐 안그러면 계속 남아있음
  }

  return (
    <form onSubmit={fnSubmitHandler} className={`filter-form ${_filterActive}`}> {/* 자바스트립트 쓸려면 무조건 백틱 쓰고, 변수니까 달러중괄호 해서 가져오기 */}
      <fieldset>
        <legend><i className="fa-solid fa-arrow-up-short-wide"></i> 정렬</legend>
        <button type='button' onClick={fnSortHandler} value='latest'>최신등록순</button>
        <button type='button' onClick={fnSortHandler} value='time'>DDay시간</button>
        <button type='button' onClick={fnSortHandler} value='title'>DDay제목</button>
      </fieldset>

      <fieldset>
        <legend><i className="fa-solid fa-magnifying-glass"></i> 검색</legend>
        <input value={_searchText} onInput={fnSearchHandler} type="text" />
      </fieldset>
    </form>
  );
};

export default CompFilterForm;

//서브밋이벤트가 클릭이벤트를 발생시키는게 짱나는 상황
//엔터를 쳐도 그대로 있어야함.근데 문제는 
//온키다운으로 몇번째 엔터를 눌렀는지 알수는 잇지만 모바일에서는 적용잉불가능함 그래서 빈버튼을 만들어서 서브밋이벤트가 발생은 하는데 