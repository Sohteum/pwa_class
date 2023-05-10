import React from 'react';


const CompBtn = ({_listArr, _setListArr}) => {

  const fnClickHandler = function(){
    const arr = [..._listArr]
    _setListArr(arr)
    
  }
  

  return (
    <button onClick={fnClickHandler}>
      추가하기
    </button>
  );
};

export default CompBtn;