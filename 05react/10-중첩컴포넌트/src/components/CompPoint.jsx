import React from 'react';

const CompPoint = ({_point, _setPoint}) => {
  return (
    <p>
     현재점수는 
     {_point},
     {
     _point.filter(v=>v==='o').length
     }점입니다 
    </p>
  );
};

export default CompPoint;