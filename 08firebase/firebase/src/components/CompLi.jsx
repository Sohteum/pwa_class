import React from 'react';
import { Link } from 'react-router-dom';

const CompLi = ({docid, data}) => {

  const {date, title, desc} = data

  return (
    <li>
     <Link to={`/detail/${docid}`}>{title}</Link> 
    </li>
  );
};

export default CompLi;