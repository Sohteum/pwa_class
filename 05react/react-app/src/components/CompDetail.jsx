import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../App';

const CompDetail = () => {
  const { _todoArr } = useContext(AppContext)
  const params = useParams()
  const { id } = params

  const obj = _todoArr.find(v => v.id === parseInt(id))

  console.log(obj);


  return (
    <div>
      세부목록
    </div>
  );
};

export default CompDetail;