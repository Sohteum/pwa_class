import React from 'react';

const CompBtn = ({data}) => {
  const {type, char} = data
  return (
    <li>
      <button>{char}</button>
    </li>
  );
};

export default CompBtn;