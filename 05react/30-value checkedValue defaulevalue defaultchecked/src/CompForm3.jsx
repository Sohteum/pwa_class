import React, { useState } from 'react';
import { fnSetObj } from './fn';

//사이트에 접속할때 처음. 그냥 무조건 나옴. 화면이 안나와도 실행됨

const CompForm3 = () => {
  const [_input, _setInput] = useState(''); //조건부로 출력 못하게 햇다가 다시 출력할때 에를들어 모달창을 닫거나, 화면이 나올때
  const [_chkObj, _setChkObj] = useState(fnSetObj()); //양이 많아지면 직접 입력할 수 없잖아 그러니까 함수를 받아준다//디폴트로는 1을 받아주는거지

  //이 아래는 스테이트가 변경될때 바뀜
  const fnInputHandler = function (e) {
    _setInput(e.target.value);
  };

  const fnSubmitHandler = function (e) {
    e.preventDefault(); //새로고침 막는다
    _setInput(''); //서브밋되었을때 값을 비워준다
    _setChkObj(fnSetObj(1)); //디폴트로 1을 받아줘야되니깐 여기가 1인거지 서브밋되었을때 1로
  };

  const fnChangeHandler = function (e) {
    _setChkObj(fnSetObj(e.target.value)); //사용자가 입력하는거를 온체인지로 받아서 쪄기 넣어주는거야 그러면 온체인지를 쓸수있지
  };

  return (
    <form onSubmit={fnSubmitHandler}>
      <fieldset>
        <legend>default 속성 활용하기</legend>
        <p>
          <input
            onChange={fnChangeHandler}
            value={1}
            checked={_chkObj[1]}
            type='radio'
            name='radio1'
          />
          라디오1 {/* 여기 이렇게 불리언값넣어두면 평생안변해 스테이트 만들어 */}
          <input
            onChange={fnChangeHandler}
            value={2}
            checked={_chkObj[2]}
            type='radio'
            name='radio1'
          />
          라디오2{/* 여기서 왜 []이거써? _chkObj.1 이런것 못써 */}
          {/* 만약에 여기서 100개가 있으면 맵같은걸로 돌려서 100개를 만들어주면 됨 */}
        </p>
        <p>
          <input
            onInput={fnInputHandler}
            value={_input}
            type='text'
          />{' '}
          {/* 밸류는 사용자가 못바꾸니까. 사용자가 입력할때마다 그 값을 갱신해주는 이벤트를 같이 바인딩하자. 타겟값을 이용해서 밸류를 바꿔주자 그럼 벨류를 사용할 수 있잖아 */}
        </p>
        <p>
          <button>초기화하기</button>
        </p>
        <p>{_input}</p>
      </fieldset>
    </form>
  );
};

export default CompForm3;

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
/* const obj ={사람1: 홍길동 , 사람2 : 아무개}
obj[`사람${1}`] 여기 대괄호 안에는 문자열이 들어가는것
const 사람 = '사람2'
(obj[사람]) */
//키값을 문자열로 찾거나 무튼 키값찾을때 사용 키값으로 변수를 연결, 문자열이랑 이어붙이는 목적
