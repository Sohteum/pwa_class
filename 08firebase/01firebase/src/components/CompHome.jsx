import React, { useContext, useState } from 'react';
import { Appcontext } from '../App';
import { Link } from 'react-router-dom';
import CompLi from './CompLi';

const CompHome = () => {
  const { _todoArr, _setTodoArr,
    _todoOutputArr, _setTodoOutputArr, } = useContext(Appcontext)

  const [_keyword, _setKeyword] = useState('')

  const fnSearchHadler = (e) => {
    _setKeyword(e.target.value)
    _setTodoOutputArr(_todoArr.filter(v => v.data().title.includes(e.target.value)))
  }

  const fnSortHandler = (e) => {
    _setKeyword('')
    if (e.target.value === 'latest') {
      _setTodoOutputArr([..._todoArr])
    } else if (e.target.value === 'title') {
      let arr = [..._todoArr]
      arr.sort((a, b) => {
        if (a.data().title > b.data().title) {
          return 1
        } else if (a.data().title < b.data().title) {
          return -1
        } else {
          return 0
        }
      })
      _setTodoOutputArr(arr)
    } else if (e.target.value === 'date') {
      let arr = [..._todoArr]
      arr.sort((a, b) => {
        if (a.data().date > b.data().date) {
          return 1
        } else if (a.data().date < b.data().date) {
          return -1
        } else {
          return 0
        }
      })
      _setTodoOutputArr(arr)
    }
  }

  return (
    <section>
      {
        (!_todoOutputArr)
          ?
          '데이터를 불러오는중'
          : (_todoOutputArr.length === 0)

            ?
            '일정목록이 없습니다'
            :
            <ul>
              {_todoOutputArr.map(v => <CompLi key={v.id} docid={v.id} data={v.data()} />)}
            </ul>
      }
      <hr />
      <p>검색<input value={_keyword} onChange={fnSearchHadler} type="text" /></p>
      <p>정렬
        <select onChange={fnSortHandler}>
          <option >정렬</option>
          <option value="latest">등록순</option>
          <option value="title">제목순</option>
          <option value="date">일자순</option>
        </select>
      </p>
      <hr />
      <Link to="/add">일정등록하기</Link>
    </section>
  );
};

export default CompHome;