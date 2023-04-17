import { useState } from "react";
import ComModal from "./components/ComModal";
import CompSum from "./components/CompSum";

let arrComp = []
for (let i = 0; i < 5; i++) {
  arrComp.push(i) //[0,1,2,3,4]
}

function App() {

  const [_pointArr, _setPointArr] = useState(new Array(5).fill(''))//길이가 4인 배열을 만든것.속도가 느린 명령어//원래 이게더빨라[,,,,]
  const [_arrComp, _setArrComp] = useState(arrComp)
  const [_showModal, _setShowModal] = useState(false)

  const fnModalHandler = () => {
    _setShowModal(true)
  }


  return (
    <>
      <h1>더하기문제</h1>
      <hr />
      {
        _arrComp.map((v, idx) => { //배열로 출력하는경우에는 key(키값,유니크한이름)라는 프롭스을 꼭 쓰래, i는 원래 쓰면 안돼
          return <CompSum key={v} idx={idx} _setPointArr={_setPointArr} _pointArr={_pointArr}/>//배열은 둘다 가져와야 됨
        })
        /* 변수만 적어 문법은 못적어. 최종결과가 변수 한개, 배열은 한개니까 쓸수있어 */
      }
      {/* <CompSum _setPoint={_setPoint}/> 반복되는 컴포넌트는 적어주지 않고 반복문을 쓴다 */}

      <button onClick={fnModalHandler}>점수확인</button>
      {(_showModal === true) && <ComModal _pointArr={_pointArr} _setShowModal={_setShowModal}/>}
    </>
  );
}

export default App;
