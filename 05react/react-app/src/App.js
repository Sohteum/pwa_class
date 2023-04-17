import { useState } from "react";
import CompSum from "./components/CompSum";
import CompModal from "./components/CompModal";


// let arrComp = ['1','2','3','4','5']  //문제 개수를 바꾸지 못함 state안썼으니까

function App() {

  const [_arrComp, _setArrComp] = useState(['1','2','3','4','5'])//여기서 usestate로 변경하고 아래에 언더바 작성하고, 프롭스로 모달이 셋어래이컴프를가져감
  const [_arrPoint, _setArrPoint] = useState(new Array(5).fill('x'))
  const [_showModal, _setShowModal] = useState(false)

  return (
    <>
      <h1>더하기연습</h1>
      {
        _arrComp.map((v, idx) =>
          <CompSum _setShowModal={_setShowModal} key={v} idx={idx} _arrPoint={_arrPoint} _setArrPoint={_setArrPoint} />//배열을 리턴할때는 키를 사용한다. 최적화를 위해서 //근데 i를 주면 내가 수정을 해버리면 그게 적용이 안되고 계속해서 0부터 나오게 됨. 즉 키값이 바뀔때마다 다시 그리게 됨 //하지만 v를 넣으면 v번째잖아 그러니까 딱 걔만 지울 수가 있는거.
        )
      }
      <p>
        {
          _arrPoint.filter(v => v === 'o').length
        }점</p>
      {(_showModal) && <CompModal _arrComp={_arrComp} _setArrComp={_setArrComp} _setShowModal={_setShowModal}  _setArrPoint={_setArrPoint}/>}
      {/* 형제끼리는 state공유를 못함 그래서 문제를 못바꿈. 문제를 다시 만들어주면 됨 */}
    </>
  );
}

export default App;
