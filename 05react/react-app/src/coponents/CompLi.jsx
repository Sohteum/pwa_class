import React from 'react';
import {Link, useParams} from 'react-router-dom';

const CompLi = ({id, title}) => {

  return (
    <li>
      <Link to={`/detail/${id}`}>{title}</Link>{/* 유즈파람이라고 함. 바닐라는 쿼리스트링이라고 함 */}
      
    </li>
  );
};

export default CompLi;