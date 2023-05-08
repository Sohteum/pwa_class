import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';

const CompAdd = () => {
  const { _orgArr, _setOrgArr, _outputArr, _setOutputArr } = useContext(AppContext);
  const nav = useNavigate();

  const fnSubmithandler = function (e) {
    e.preventDefault();
    const id = Date.now();
    const title = document.querySelector('input[type=text]').value;
    const date = document.querySelector('input[type=date]').value;
    const time = document.querySelector('input[type=time]').value;
    const desc = document.querySelector('textarea').value;
    const obj = { id, title, date, time, desc };
    const arr = [..._orgArr, obj]; //
    _setOrgArr(arr);
    _setOutputArr(arr);
    window.localStorage.setItem('todoStorage', JSON.stringify(arr)); //모두가 쓰는 파일형태인 제이슨 형태로만 써야함.
    //location.href//이건 새로고침이 일어남
    nav('/');
  };

  return (
    <form onSubmit={fnSubmithandler}>
      <p>
        일정명 :{' '}
        <input
          type='text'
          required
        />
      </p>
      <p>
        날짜 :{' '}
        <input
          type='date'
          required
        />
      </p>
      <p>
        시간 :{' '}
        <input
          type='time'
          required
        />
      </p>
      <p>
        세부내용 : <textarea required></textarea>
      </p>
      <button>일정추가하기</button>
    </form>
  );
};

export default CompAdd;
