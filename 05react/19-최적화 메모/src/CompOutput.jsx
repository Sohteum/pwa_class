import React, { useEffect } from 'react';

const CompOutput = ({ _n }) => {

  useEffect(() => {
    console.log('--output update');
  })

  return (
    <div>
      _n : {_n}
    </div>
  );
};

export default CompOutput;