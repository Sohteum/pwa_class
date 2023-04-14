import { useState } from "react";
import Sum from "./components/Sum";
import CompModal from "./components/CompModal";


function App() {

  const [_point, _setPoint] = useState(0)
  const [_showModal, _setShowModal] = useState(false)

  const fnModalHandler = function () {
    let point = 0
    let inputs = document.querySelectorAll('form')
    inputs.forEach(v => {
      let userNum = parseInt(v.querySelector('.userNum').value)
      let num1 = parseInt(v.querySelector('.num1').innerText)
      let num2 = parseInt(v.querySelector('.num2').innerText)
      if (num1 + num2 === userNum) _setPoint(prev => prev + 1)

    })
    console.log(point);
    //    _setPoint(point)
    _setShowModal(true)
  }

  return (
    <>
      <h1>더하기 계산</h1>
      <hr />
      <Sum _setPoint={_setPoint} _point={_point} />{/* 내가 이걸 물려주는데 나는 셋포인트라고 부르지만 너는 a라고 불러 너는 a라는 박스에 담아서 써 하지만 귀찮으니까 그냥 같은 이름으로 쓴다.*/}
      <hr />
      <Sum _setPoint={_setPoint} _point={_point} />
      <hr />
      <Sum _setPoint={_setPoint} _point={_point} />
      <hr />
      <Sum _setPoint={_setPoint} _point={_point} />
      <hr />
      <Sum _setPoint={_setPoint} _point={_point} />
      <hr />

      <button onClick={fnModalHandler}>점수확인</button>
      {(_showModal === true) && <CompModal _point={_point} />}

    </>
  );
}

export default App;
