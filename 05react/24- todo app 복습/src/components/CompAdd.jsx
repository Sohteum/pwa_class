import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const CompAdd = () => {

const {_todoArr, _setTodoArr} = useContext(AppContext)
const nav = useNavigate()

const fnAddHandler = function(){
  const id = Date.now()
  const title = document.querySelector(`input[type=text]`).value
  const date = document.querySelector(`input[type=date]`).value
  const time = document.querySelector(`input[type=time]`).value
  const desc = document.querySelector(`textarea`).value
  //객체안에 다시 넣는데 객체로 다시 싸서 넣어야함
  const obj ={id, title, date, time, desc}
  _setTodoArr([..._todoArr, obj]) //obj를 
  /* 
  let arrCopy = [..._todoArr]
  arrCopy.push(obj) 
  _setTodoArr(arrCopy)
  */

  nav('/')
}
  return (
    <main>
      <h2>일정추가</h2>
      <p>일정명 : <input type="text" /></p>{/* 디폴트벨류가 없어야지. 추가할거니까 */}
      <p>날짜: <input type="date" /></p>
      <p>시간: <input type="time" /></p>
      <p>내용: <textarea  ></textarea></p>
      <hr />
      <button onClick={fnAddHandler}>추가하기</button>
    </main>
  );
};

export default CompAdd;