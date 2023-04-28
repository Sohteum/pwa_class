import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CompDetail = () => {
  const { _todoArr, _setTodoArr } = useContext(AppContext)
  const id = parseInt(useParams().id) //id를꺼내오기.이게 객체를 리턴하는 방법//꺼내올때는 글자//유즈파람은 주소/뒤에있는 아이디 가져오는거
  const { title, date, time, desc } = _todoArr.find(v => id === v.id)//여기서 객체를 받은거니까 바로 구조분해해서 받아버리자
  const navi = useNavigate()

  const fnDelHandler = function () {
    _setTodoArr(_todoArr.filter(v => v.id !== id))//새 배열이 나오니까 전개연산자 안써도됨
    navi('/')
    alert('삭제되었습니다')
  }

  const fnEditHandler = function () {
    // const arrCopy = [..._todoArr] //얕은복사
    const arrCopy = _todoArr.map(v => { return { ...v } }) //깊은복사
    const idx = _todoArr.findIndex(v => id === v.id) //배열을 수정하는게 목적이고, 몇번째인지 찾아야함. id가 동일한애가 몇번째니 그게 파인드인데스
    arrCopy[idx].title = document.querySelector(`input[type=text]`).value
    arrCopy[idx].date = document.querySelector(`input[type=date]`).value
    arrCopy[idx].time = document.querySelector(`input[type=time]`).value
    arrCopy[idx].desc = document.querySelector(`textarea`).value
    _setTodoArr(arrCopy)
    navi('/')
  }

  return (
    <main>
      <h2>일정 세부 사항</h2>
      <p>일정명 : <input type="text" defaultValue={title} /></p>
      <p>날짜: <input type="date" defaultValue={date} /></p>
      <p>시간: <input type="time" defaultValue={time} /></p>
      <p>내용: <textarea defaultValue={desc} ></textarea></p>
      <hr />
      <Link to="/">목록으로</Link> {/* a태그 대신 엏는거임 */}
      <button onClick={fnEditHandler}>수정</button>
      <button onClick={fnDelHandler}>삭제</button>

    </main>
  );
};

export default CompDetail;