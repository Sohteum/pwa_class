import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const CompAddList = () => {

  const { _todoArr, _setTodoArr } = useContext(AppContext)
  const navi = useNavigate()

  const fnSubmitHandler = function (e) {
    let id = Date.now()
    e.preventDefault()
    let title = document.querySelector('.title').value
    let date = document.querySelector('.date').value
    let time = document.querySelector('.time').value
    let desc = document.querySelector('.desc').value
    let obj = { id, date, time, title, desc }
    // let todoArr =  [..._todoArr]
    //  todoArr.push(obj)
    //  _setTodoArr(todoArr)
    _setTodoArr([..._todoArr, obj])//이말인 즉슨 새로운 배열로 만들어서 오비제이에 푸시해서 바꿔준다
    alert('일정이 등록되었습니다.')
    navi('/')
  }


  return (
    <div>
      <h2>일정추가</h2>
      <form onSubmit={fnSubmitHandler}>
        <p><input className='date' type="date" required /></p>
        <p><input className='time' type="time" required /></p>
        <p><input className='title' type="title" required /></p>
        <p><textarea className='desc' required></textarea></p>
        <p><button>일정등록</button></p>
      </form>
    </div>
  );
};

export default CompAddList;