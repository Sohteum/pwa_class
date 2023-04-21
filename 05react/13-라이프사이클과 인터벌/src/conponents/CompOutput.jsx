import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompOutput = () => {

  const {_sec} = useContext(AppContext)

  return (
    <p>
      {_sec}초
    </p>
  );
};

export default CompOutput;