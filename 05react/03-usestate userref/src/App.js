// eslint-disable //이걸 쓰면 경고가 안나오는데 그냥 안쓰고 경고 보는게 나아^^

import { useRef, useState } from "react";

let fnGetRandom = () => Math.floor(Math.random() * 10)//프롭스는 절대절대 여기서 쓰면 안됨. app(컴포넌트)안에서 써야함.

function App() {

  //state를 만들거냐 변수를 만들거냐를 결정해야함. 문제가 출력되면 화면이 바뀌어야하니 state를 만들거야
  const [_num1, _setNum1] = useState(Math.floor(Math.random() * 10))//이게 너무 길면 함수를 만들어서 사용한다
  const [_num2, _setNum2] = useState(fnGetRandom())
  const [_result, _setResult] = useState('')
  const [_point, _setPoint] = useState(0)//처음에는 0점이니까
  const [_bg, _setBg] = useState('none')
  const refInput = useRef()//아직 만들어지지않은 객체를 찾을때를 대비해서...이름을 연결함


  //_setNum1 을 이용하는게 _num을 바꾸고싶다는 소리임. 다시말하면 리렌더링을 하고싶다는의미가 됨. 이걸 이벤트안에 안적으면 무한루프에 빠짐.
  //화면을 바꾸는 변수.state

  function fnSubmit(e) {
    e.preventDefault()
    let userNum = parseInt(refInput.current.value) //여기서 밸류가 예약어라서 밑에서 못씀
    if (userNum === _num1 * _num2) {
      _setResult('정답')
      _setPoint(prev => prev + 1) //lazy initialze 게으른 초기화. 한박자 늦다.
      _setNum1(fnGetRandom())
      _setNum2(fnGetRandom())
      _setBg('palegreen')
      // document.querySelector(`.output`).style.background = 'palegreen'

      //포인트는 증감연산노노 //사용자의 결과를 써주고 맞으면 점수1점
    } else {
      _setResult('오답')
      _setBg('pink')
      // document.querySelector(`.output`).style.background = 'pink'
      //사용자의 결과를 써주고 틀리면 점수는 그대로.
      if (_point >= 1)
        _setPoint(prev => prev - 1)//게으른초기화때문에 이렇게 해줘야함. 포인트가 0일때가아니라 1이상일때
    }
    refInput.current.value = '';// 둘 다에게 적용하니까 함수 밖으로 빼줄거야.


  }//이건 호이스팅이 발생, 스코프를 안줘도 되는데 애로우펑션 사용해서 let 등으로 스코프를 만들어주는데app안에서 만들면 최상단에 적어줘야하므로 안에다가는 state만 선언하고 아얘 바깥에다가 만들어버림. 

  return (
    <>
      <h1>구구단 연습</h1>
      <form onSubmit={fnSubmit} style={{ background: _bg }}>
        <input value={_num1} min="0" max="9" type="number" readOnly />
        *
        <input value={_num2} min="0" max="9" type="number" readOnly />
        =
        <input ref={refInput} type="number" min="0" max="99" />
        <p><button style={{ display: 'none' }}>결과보기</button></p>
        {/* 버튼은 만들어야 이벤트가 발생하니까 만들어줘야함*/}
      </form>
      <p className="output">결과: {_result} , 점수 : {_point}점</p>
    </>
  );
}

export default App;
