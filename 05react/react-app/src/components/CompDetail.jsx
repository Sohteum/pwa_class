import React, { useContext } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

const CompDetail = () => {
  const { _todoArr, _setTodoArr } = useContext(AppContext)
  const params = useParams() //링크걸때 아이디를 실어서 보냈는데, 주소에 보냈어도 받아먹어야하잖아. 주소뒤에찍어보내는게 파라미터. 확인하려면 리액트에서는 유즈파람을 이용해서 객체로 그 정보를 받아올수있다.
  const nav = useNavigate()
  const { id } = params
  const obj = _todoArr.find(v => v.id === parseInt(id))
  const { title, date, time, desc } = obj


  const fnDeleteHandler = function () {
    _setTodoArr([..._todoArr].filter(v => parseInt(id) !== (v.id))) //스프레드 전개연산자
    //얘가 받은아이디가 56인데 많은 아이디가 있잖아. 그러니까 그걸빼고 다시 배열을 만든거임
    //삭제햐면 다시 원래페이지로 돌아가게해야하니까 유즈넹\비게잇을 호출해서 사용한다.
    nav("/")
  }

  const fnEditHandler = function () {
    //내가 수정하고싶은애가 몇번째인지 알아내면 됨. v.?????인덱스오브:객체가 안에들어있으면 못찾아. 객체있을때는 파인드인덱스 
    const todoArr = [..._todoArr]
    const idx = todoArr.findIndex(v => parseInt(id) === (v.id))//내가 수정해야할 번호를 뽑은거임
    todoArr[idx].title = document.querySelector('.title').value
    todoArr[idx].date = document.querySelector('.date').value
    todoArr[idx].time = document.querySelector('.time').value
    todoArr[idx].desc = document.querySelector('.desc').value
    nav("/")
  }

  return (
    <div>
      <h2>세부일정내용</h2>
      {/* <p>{title}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{desc}</p> */}
      <p><input className='title' type="text" defaultValue={title} /></p> {/* 여기서 디폴트벨류로 바꿔버리면 스테잇값을 받았을때 수정이 ㄷ안됨. 지금은 아니니까사용가능 */}
      <p><input className='date' type="date" defaultValue={date} /></p> {/* 리액트는 화면에서 안보이면 클래스네임이 안겹친다 css는 겹치니 주의 */}
      <p><input className='time' type="time" defaultValue={time} /></p>
      <p><textarea className='desc' defaultValue={desc}></textarea></p>
      <button onClick={fnEditHandler} >수정하기</button>
      <button onClick={fnDeleteHandler}>삭제하기</button>
      <NavLink to="/">목록</NavLink> {/* 네비링크랑 그냥 링크가 있는데 네비링크는 현재주소들어가면 알아서 액티브가 추가가됨.(액티브구현자동가능)  */}

    </div>
  );
};

export default CompDetail;