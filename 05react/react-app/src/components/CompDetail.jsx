import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';

const CompDetail = () => {
  const { _todoArr } = useContext(AppContext)
  const params = useParams()
  const { id } = params

  const obj = _todoArr.find(v => v.id === parseInt(id))
  const { title, date, time, desc } = obj


  return (
    <div>
      <h2>세부일정내용</h2>
      <p>{title}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{desc}</p>
    </div>
  );
};

export default CompDetail;