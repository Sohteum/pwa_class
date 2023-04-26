import React from 'react';

const CompSum = ({ n1, _setN1 }) => {
  return (
    <div>
      <p> n1 : {n1}</p>
      <button onClick={() => { _setN1(prev => prev + 1) }}>증가</button>
    </div>
  );
};

export default CompSum;