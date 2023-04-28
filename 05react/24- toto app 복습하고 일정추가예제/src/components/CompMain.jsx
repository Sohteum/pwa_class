import React, { useContext } from 'react';
import { AppContext } from '../App';
import CompLi from './CompLi';
import { Link, useNavigate } from 'react-router-dom';



const CompMain = () => {

  const { _todoArr, _setTodoArr, _orgArr} = useContext(AppContext) //검색하는건 내용물을 바꾸는게 아니니까 셋말고 그냥 오리지널어레이를 가져옴
  const nav = useNavigate()

  const fnSearchHandler = function (e) {
    e.preventDefault()
    const keyword = document.querySelector('input').value;
    const filterArr = [..._orgArr].filter(v=>{ //전개연산자는 새미콜론이 없으면 앞이랑 붙어있다고 생각함
      return v.title.match(keyword)//특정 단어가 들어있는지 확인
    })
    _setTodoArr(filterArr)
  }


  return (
    <main>
      <h2>일정목록</h2>
      <ul>{/* 투두어레이만큼 li가 배열로 출력이 되는걸 만들거란 소리 */}
        {
          _todoArr.map(v => <CompLi
            key={v.id}
            title={v.title}
            id={v.id} />) //키값이 재랜더링을 막는다//key는 프롭스로 내려줄수없는단어//컴포넌트를 2개를 만들어서 배열로 리턴하라는 소리 //i는 절대안됨. 리드로잉하는거랑 같아. 그럴거면 키를 안주는거랑 똑같아

        }
      </ul>
      <hr />
      <Link to='/add'>일정추가</Link>
      <hr />
      <form onSubmit={fnSearchHandler}>
        <input type="text" />
        <button style={{ display: 'none' }}></button>{/* 버튼이 없으면 제출이 안일어남 */}
      </form>
      <button onClick={()=>{_setTodoArr(_orgArr)}}>전체목록</button>
    </main>
  );
};

export default CompMain;