import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../App';

const CompDetail = () => {
  const { _orgArr, _setOrgArr, _outputArr, _setOutputArr } = useContext(AppContext)
  const param = useParams() //콘솔찍어보면 객체로 나옴. 파람.아이디 로 사용해야함
  const id = parseInt(param.id)
  const { title, date, time, desc } = _orgArr.find(v => id === v.id)
  const nav = useNavigate()

  const fnEditHandler = function () {
    const arr = [..._orgArr]
    const idx = arr.findIndex(v => id === v.id)
    arr[idx].title = document.querySelector('input[type=text]').value
    arr[idx].date = document.querySelector('input[type=date]').value
    arr[idx].time = document.querySelector('input[type=time]').value
    arr[idx].desc = document.querySelector('textarea').value
    _setOrgArr(arr) //오리지널어레이랑 그냥 어레이모두 해주는 이유는 둘이 세트바리이기때문이지...
    _setOutputArr(arr)
    window.localStorage.setItem('todoStorage', JSON.stringify(arr))
    nav('/')
  }

  const fnDelHandler = function () {
    let arr = [..._orgArr]
    arr = arr.filter(v => id !== v.id) //맵으로 새 배열로 만드니까 let으로 사용해야함//리턴이랑 중괄호는 함께!
    console.log(arr);
    _setOrgArr(arr)
    _setOutputArr(arr)
    window.localStorage.setItem('todoStorage', JSON.stringify(arr))
    nav('/')
  }

  return (
    <form onSubmit={(e) => { e.preventDefault() }}>
      <p><input defaultValue={title} type="text" /></p>
      <p><input defaultValue={date} type="date" /></p>
      <p><input defaultValue={time} type="time" /></p>
      <p><textarea defaultValue={desc}></textarea></p>
      <p>
        <button onClick={fnEditHandler} >수정하기</button>
        <button onClick={fnDelHandler}>삭제하기</button>
      </p>
    </form>
  );
};

export default CompDetail;