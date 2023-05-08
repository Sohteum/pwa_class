import React, { createContext, useState } from 'react';
import { btnArr } from '../../script/btnsArr';
import CompBtn from './CompBtn';
import { AppContext } from '../../App';

export const CalcContext = createContext()

const CompCalc = () => {
  const [_output, _setOutput] =useState('dddsdfgdfgsdfgsdfgsdfsdfsdfsdsdsd')

  return (

    <section className='calc'>
      <h2> calculator</h2>
      <CalcContext.Provider value={{_output,_setOutput}}>
      <p className="output">
      <span>{_output}</span> {/* 인라인블록 절대노노 */}
      </p>
      <ul className="btn-container">
        {
          btnArr.map(v=><CompBtn key={v.id} data={v}/>)
        }
      </ul>
      </CalcContext.Provider>
    </section>
  );
};

export default CompCalc;