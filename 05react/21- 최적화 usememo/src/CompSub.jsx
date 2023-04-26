import React from 'react';

const CompSub = ({ n2, _setN2 }) => {
  return (
    <div>
      <p> n2 : {n2}</p>
      <button onClick={() => { _setN2(prev => prev - 1) }}>감소</button>

    </div>
  );
};

export default CompSub;