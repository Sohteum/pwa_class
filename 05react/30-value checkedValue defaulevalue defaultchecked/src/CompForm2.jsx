import React, { useEffect, useState } from 'react';

const CompForm2 = () => {
  const [_chkObj, _setChkObj] = useState({ chk1: true, chk2: false }) //객체를 만들예정. 둘다 트루 안되잖아.
  const [_input, _setInput] = useState('') //인풋용
  const [_keyArr, _setKeyArr] = useState([0, 1, 2])

  const fnSubmitHandler = function (e) {
    e.preventDefault()
    const chkObj = { ..._chkObj }
    chkObj.chk1 = true
    chkObj.chk2 = false
    _setChkObj(chkObj)
    _setInput('')
    //여기까지는 스테이트는 변경된것.화면만 바뀌지 않을뿐
    const keyArr = [..._keyArr]
    keyArr.forEach((v, i) => { //배열을 리턴받을 필요없을때는 포이치, 아니면 맵 //v는 지우면 안됨. 왜냐면 i가 v의 역할을 해버리기때문. 
      keyArr[i] += 3 //배열의 i번째에다가 3을 더하는거야 만약 v+=3이라고 쓴다면 그냥 숫자를 바꾸는 것일뿐 다른 의미는 없음 v라는 변수를 증가하고 배열은 그대로
    })
    _setKeyArr(keyArr)
  }

  const fnInputHandler = function (e) {
    _setInput(e.target.value)
  }

  return ( //스테이트로 관리할때는 클래스네임필요없어<>스크립트
    <form onSubmit={fnSubmitHandler}>
      <fieldset>
        <legend>default 속성 활용하기</legend>
        <p>
          <input key={_keyArr[0]} defaultChecked={_chkObj.chk1} value="1" type="radio" name='radio1' />라디오1
          <input key={_keyArr[1]} defaultChecked={_chkObj.chk2} value="2" type="radio" name='radio1' />라디오2
        </p>
        <p>
          <input key={_keyArr[2]} onInput={fnInputHandler} defaultValue={_input} type="text" />
        </p>
        <p>
          <button>초기화하기</button>
        </p>
        <p>
          {_input}
        </p>
      </fieldset>
    </form>
  );
};

export default CompForm2;

/* 
폼요소의 value속성은 (사용자가) 값을 선택(입력아니고 선택)할 수 있는 양식에만 적용 가능
폼요소의 value속성을 값을 변경할 수 있는 양식에 적용하면 uncontrolled 상태가 됨 
->따라서 defaultValue를 사용함

폼요소의 checked 속성을 적용하면 uncontrolled 상태가 됨 

 uncontrolled 상태 = 사용자가 값을 못바꾸는 상태. 락이 걸린것처럼. 

그래서 defaultChecked를 사용한다(선택태그)

defaultChecked, defaultValue의 경우 상태(state)변화를 감지할 수 없음
defaultChecked, defaultValue의 경우 상태(state)변화를 감지하려면  key값을 변경해야함.

그래서 오늘 하려는게 가급적 그냥 value와 checked를 사용해보자라는것?해결할 부분?

*/