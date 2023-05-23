import React from 'react';
import CompBtn from './CompBtn';
import { btnArr } from '../../script/btnsArr';



const CompBtnContainer = () => {
  return (
    <ul className="btn-container">
      {
        btnArr.map(v => <CompBtn key={v.id} data={v} />)
      }
    </ul>
  );
};

export default CompBtnContainer;