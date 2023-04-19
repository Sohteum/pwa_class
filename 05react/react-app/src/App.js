import { createContext, useState } from "react";
import CompResult from "./components/CompResult";
import CompUl from "./components/CompUl";

export const AppContext = createContext() //전달해주고싶으면 크리에잇 컨텍스트. 익스폴트를 만드시 해줘야함. 그래서 앱 안에서 만들면 안됨. app이 익스폴트가 이미 되어있어서 밖에서 해야함

const fnChangePoint = function (arr) {
  return arr.filter(v => v === 'o').length
}

function App() {
  const [_pointArr, _setPointArr] = useState(new Array(3).fill('x'))//점수출력용//함수()는 실행하겠다는뜻.여기선 ()쓰면 안됨
  const [_readOnly, _setReadOnly] = useState(false)
  const [_showBtn, _setShowBtn] = useState(false)
  const [_reset, _setReset] = useState(true)
  const [_newColor, _setNewColor] = useState('#FFF')
  const [_listCnt, _setListCnt] = useState(Math.ceil(Math.random()*3))


  return (
    <AppContext.Provider value={{
      _pointArr, _setPointArr, fnChangePoint, _readOnly, _setReadOnly, _setShowBtn, _reset, _newColor, _setNewColor, _listCnt, _setListCnt
    }}> {/* 전달할 수 있는 범위가 프로바이더, value는 보낼 객체..??그래서 중괄호를 하나 더 열어서 다 담아서 보낸다 */}
      <h1>context</h1>
      <hr />
      <CompUl />
      <hr />
      <CompResult />
      {(_showBtn) && <button onClick={e => {
        _setReset(prev => !prev);//반대로 바꿔라!토글
        _setReadOnly(false);
        _setPointArr(new Array(3).fill('x'))
        _setNewColor('#FFF')
        _setListCnt(Math.ceil(Math.random()*3))
      }}
      >다시하기</button>} {/* 조건부출력 */}
    </AppContext.Provider>
  );
}

export default App;
