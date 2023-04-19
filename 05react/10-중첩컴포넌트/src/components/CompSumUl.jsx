import React from 'react';
import CompSumLi from './CompSumLi';

let arrList = ['1', '2', '3']


const CompSumUl = ({_point, _setPoint, _setShowModal,_setShowUl}) => {
  return (
    <ul>
      {
        arrList.map((v, idx)=> <CompSumLi  key={v} idx={idx} _point={_point} _setPoint={_setPoint} _setShowModal={_setShowModal} _setShowUl={_setShowUl}/>)
      }
    </ul>

  );
};

export default CompSumUl;