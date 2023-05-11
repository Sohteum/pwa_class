import React, { useEffect, useState } from 'react';

const CompForm1 = () => {
  const [_input, _setInput] = useState('')

  const fnResetHandler = function (e) {
    e.preventDefault()
    _setInput('')
    document.querySelector('.form1 input[type=radio]').checked = true    //가상돔이 리얼돔으로 바꾸니 뒤니까 여기 쿼리셀렉터 써도됨
    document.querySelector('.form1 input[type=text]').value = ''    
  }

  const fnInputHandler = function (e) {
    _setInput(e.target.value)
  }

  useEffect(() => {
    document.querySelector('.form1 input[type=radio]').checked = true     //쿼리셀렉터는 하나만 찾고 종료되니까 여기서 첫째 애는 찾을필요없음


  }, [])//디펜던시는 처음시작할때 한번만 해줘 라는 의미

  return ( //여긴 가상돔.가상돔에서 리얼돔으로 바뀌는 그 순간이 유즈이펙트
    <form className='form1'>
      <fieldset>
        <legend>자바스크립트 문법 활용하기</legend>
        <p>
          <input value="1" type="radio" name='radio1' />라디오1
          <input value="2" type="radio" name='radio1' />라디오2
        </p>
        <p>
          <input onInput={fnInputHandler} type="text" />
        </p>
        <p>
          <button onClick={fnResetHandler}>초기화하기</button>
        </p>
        <p>
          {_input}
        </p>
      </fieldset>
    </form>
  );
};

export default CompForm1;

/* 
폼요소의 value속성은 (사용자가) 값을 선택할 수 있는 양식에만 적용 가능
폼요소의 value속성을 값을 변경할 수 있는 양식에 적용하면 uncontrolled 상태가 됨 
->따라서 defaultValue를 사용함

폼요소의 checked 속성을 적용하면 uncontrolled 상태가 됨 

 uncontrolled 상태 = 사용자가 값을 못바꾸는 상태. 락이 걸린것처럼. 

그래서 defaultChecked를 사용한다(선택태그)

defaultChecked, defaultValue의 경우 상태(state)변화를 감지할 수 없음
defaultChecked, defaultValue의 경우 상태(state)변화를 감지하려면  key값을 변경해야함.

그래서 오늘 하려는게 가급적 그냥 value와 checked를 사용해보자라는것?해결할 부분?

*/