import React, { useContext, useState } from 'react';
import { auth } from '../fb/auth';
import { fnAddDoc } from '../fb/db';
import { Appcontext } from '../App';

const CompApp = () => {
  const { navi } = useContext(Appcontext)

  const [_date, _setDate] = useState('')
  const [_title, _setTitle] = useState('')
  const [_desc, _setDesc] = useState('')

  const fnAddDocHandler = async (e) => {
    e.preventDefault()
    let data = {
      date: _date,
      title: _title,
      desc: _desc,
    }
    await fnAddDoc(auth.currentUser.uid, data)
    alert('일정이 추가되었습니다')
    navi('/')
  }
  return (
    <section>
      <h3>일정등록하기</h3>
      <form onSubmit={fnAddDocHandler}>
        <p><input onInput={(e) => { _setDate(e.target.value) }} value={_date} type="date" required /></p>
        <p><input onInput={(e) => { _setTitle(e.target.value) }} value={_title} type="text" required /></p>
        <p><textarea onInput={(e) => { _setDesc(e.target.value) }} value={_desc} required></textarea></p>
        <p><button>일정추가</button></p>
      </form>
    </section>
  );
};

export default CompApp;