import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompLi from './CompLi';
import { Link } from 'react-router-dom';

const CompMian = () => {
  const { _orgArr, _setOrgArr, _outputArr, _setOutputArr } = useContext(AppContext);

  const fnSearchHandler = function (e) {
    e.preventDefault();
    let arr = [..._orgArr]; //필터할거야 let 써야됨 여기 컨스트랑 렛이랑 잘 이해가 안갔음?????????????????
    const keyword = document.querySelector('input').value;
    arr = keyword ? arr.filter((v) => v.title.match(keyword)) : _orgArr; //원래 목적은 _outputArr를 바꾸는건데 아얘 다른애인 오리지널로 덮어씌운거라서 이렇게 써도된다. 이해가 안가몀 [..._orgArr]하는걸로...
    //매치가 되어있다면
    _setOutputArr(arr);
  };

  const fnSortHandler = function (e) {
    const sortKey = e.target.value;
    let arr = [..._orgArr];
    if (sortKey === 'new') {
      arr = arr.reverse();
    } else if (sortKey === 'date') {
      arr.sort((a, b) => {
        if (a.date + a.time > b.date + b.time) return 1;
        if (a.date + a.time < b.date + b.time) return -1;
        if (a.date + a.time === b.date + b.time) return 0;
      });
    } else if (sortKey === 'title') {
      arr.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        if (a.title === b.title) return 0;
      });
    }

    _setOutputArr(arr);
  };

  return (
    <>
      {
        //이 중괄호는 위에 리턴때문에 하는거
        _outputArr.length !== 0 ? (
          <ul>
            {_outputArr.map((v) => (
              <CompLi
                key={v.id}
                id={v.id}
                title={v.title}
              />
            ))}
          </ul>
        ) : (
          <p>등록된 일정이 없습니다</p>
        )
      }
      <hr />
      <Link to='/add'>일정추가하기</Link>
      <hr />
      <form onSubmit={fnSearchHandler}>
        <input type='text' />
        <button style={{ display: 'none' }}></button>
      </form>
      <hr />
      <select onChange={fnSortHandler}>
        <option value='old'>등록순</option> {/* 이게디폴트 */}
        <option value='new'>최신순</option>
        <option value='date'>일자순</option>
        <option value='title'>제목순</option>
      </select>
    </>
  );
};

export default CompMian;

//복습하기 어디에다가 맵을 해줘야하는지.화면 출력용을 하는거임. 그리고 리턴을 무엇을 리턴하는지모름
//키값을 넣어줘야함//리턴문 안에서는 jsx만 사용하는거임. 원래 리턴이 있는데 생략된것
