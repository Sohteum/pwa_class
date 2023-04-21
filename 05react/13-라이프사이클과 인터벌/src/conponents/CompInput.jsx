import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompInput = () => {

  const { _setSec , _setDisabled, _readOnly, _setReadOnly, refInput} = useContext(AppContext)

  function fnInputHadler(e) {//입력된걸 알아야하니까
    if(e.target.value===''){
      _setDisabled(true)
      _setSec('--')
    }else{
      _setDisabled(false)
      _setSec(parseInt(e.target.value))
    }
  }
    return (

    <input ref={refInput} onInput={fnInputHadler} type="number" readOnly={_readOnly}/>//초기는 쓰기금지. 초가 끝나면 다시 쓸수있음
    //타이머가 시작하면 내용이 지워지고 초가 돌아가고 리드온리

  );
};

export default CompInput;