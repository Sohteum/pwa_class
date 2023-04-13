import { useRef, useState } from "react";


let fnGetRandom = () => Math.floor(Math.random() * 10)



function App() {
  const [_num1, _setNum1] = useState(fnGetRandom())
  const [_num2, _setNum2] = useState(fnGetRandom())
  const [_point, _setPoint] = useState(0)
  const [_showGreen, _setShowGreen] = useState(false)
  const [_showPink, _setShowPink] = useState(false)
  const refInput = useRef()


  function fnOnSubmitHandler(e) {
    e.preventDefault()
    let userName = parseInt(refInput.current.value)
    if (_num1 + _num2 === userName) {
      _setPoint(prev => prev + 1)//현재 화면을 다음화면에서 하나 증가한다
      //5점만점이 나오면 축하메시지, -1 나오면 경고
      _setNum1(fnGetRandom())
      _setNum2(fnGetRandom())
      if (_point <= 3) { //5점이 나오면 안되니까 3점이하일때까지 증가 그럼 4까지 증가함
        _setPoint(prev => prev + 1)
      } else{
        _setShowGreen(true)
      }
    } else {
      if (_point >= 1) {
        _setPoint(prev => prev - 1)
      } else {
        _setShowPink(true)
      }
    }//정오답조건문
    refInput.current.value = '';
  }
  //state관련된거는 무조건 이 안에서 사용해야함. 밖에서는 리렌더링할때 다시 안읽음. 즉 불필요하게 읽는 내용이 줄어듦->최적화


  function fnCloseHandler() {
    _setNum1(fnGetRandom())
    _setNum2(fnGetRandom())
    _setPoint(0)
    if (_showGreen == true) {
      _setShowGreen(false)
    } else if (_showPink == true) {
      _setShowPink(false)
    }
  }


  return (
    <>
      <h1>더하기 연습</h1>
      <form onSubmit={fnOnSubmitHandler}>
        <span>{_num1}</span>
        +
        <span>{_num2}</span>
        =
        <input ref={refInput} type="number" min="0" max="20" />
        <button style={{ display: 'none' }}>버튼</button>
      </form>
      <p>점수 : {_point}</p>
      {
        /* (_showGreen)? <div className="modal modal_green">5점 만점입니다!</div>:null */
        (_showGreen) && <div className="modal modal_green"><p>5점 만점입니다!</p>
          <button onClick={fnCloseHandler}>다시시작하기</button>
        </div> /* 이항연산자 */
      }
      {
        (_showPink) && <div className="modal modal_pink"><p>탈락입니다!ㅠㅠ</p>
          <button onClick={fnCloseHandler}>다시시작하기</button>
        </div>//이건 숨기는게 아니고 지워버리는거
      }
      {/* 화면을 덮는걸 모달이랑고 함 */}
      {/* <div className="modal modal_pink">탈락입니다!ㅠㅠ</div> */}
      {/* 변수가 필요함. 화면과 관련되어있으니까 state를 사용하자 그리고 조건이 필요함. 스크립트 변수는 보간법을 사용하잖아. 이안에서 변수나 함수이름 한개만 사용가능함. 걍 변수이름 하나만 사용가능
      if()이건 변수가 아니고 문법이잖아. for()이것도 문법이자나. 
      근데 이건 가능 Arr.map(v=>v) 이거 리턴해서 배열하나 나오는 함수 필터도 리턴해서 배열 하나 받으니까 값이 하나가 튀어나옴 그리고....indexOf이런거 숫자가 하나 나오는거니까 , 삼항연산자도 하나만 나오는거니까 가능.*/}
    </>
  );
}

export default App;
