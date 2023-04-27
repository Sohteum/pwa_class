import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const CompLi = ({title, id}) => {
  return (
    <li>
      <p><Link to={`/detail/${id}`}>{title}</Link></p> 
    </li>
  );
};

export default CompLi;