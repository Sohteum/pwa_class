import { useState } from "react";
import CompSumUl from "./components/CompSumUl";
import CompPoint from "./components/CompPoint";
import CompModal from "./components/CompModal";


function App() {

  const [_showUl, _setShowUl] = useState(true)
  const [_showModal, _setShowModal] = useState(false)
  const [_point, _setPoint] = useState(new Array(3).fill('x'))//정답개수를 세려고 배열을 만듦

  return (
    <>
      <h1>중첩컴포넌트</h1>
      <hr />
      {
        _showUl && <CompSumUl _setShowUl={_setShowUl} _point={_point} _setPoint={_setPoint} _setShowModal={_setShowModal} />
      }

      <hr />
      <CompPoint _point={_point} /> {/* 나중에는 드릴링을 안하려고 컨텍스트?? 같은 스테이트관리 훅스를 사용함 손주한테 건너뛸때는 스테잇 관리 툴을 사용 하지만 직계자손한테는 프롭스가 편하지*/}
      {/*       <button onClick={e=>{_setShowUl(false)}}>문제삭제</button>
      <button onClick={e=>{_setShowUl(true)}}>문제제출</button> */}
      {_showModal&&<CompModal _setShowUl={_setShowUl} _setPoint={_setPoint} _setShowModal={_setShowModal}/>
      }
    </>
  );
}

export default App;
