import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { CalcContext } from './CompCalc';

const CompOutput = () => {
  const {_output} = useContext(CalcContext)
  return (
    <p className="output">
      <span>{_output}</span> {/* 인라인블록 절대노노 */}
    </p>
  );
};

export default CompOutput;