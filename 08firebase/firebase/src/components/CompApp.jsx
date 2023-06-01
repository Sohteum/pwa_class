import React, { useState } from 'react';

const CompApp = () => {

const [_date,_setDate] = useState('')
const [_title, _setTitle] = useState('')
const [_desc, _setDesc] = useState('')


  return (
    <section>
      <h3>일정등록하기</h3>
      <form>
        <p><input onInput={(e)=>{_setDate(e.target.value)}} value={_date} type="date" required/></p>
        <p><input onInput={(e)=>{_setTitle(e.target.value)}} value={_title} type="text" required/></p>
        <p><textarea onInput={(e)=>{_setDesc(e.target.value)}} value={_desc} required></textarea></p>
        <p><button>일정추가</button></p>
      </form>
    </section>
  );
};

export default CompApp;