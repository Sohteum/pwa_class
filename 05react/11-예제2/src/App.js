import { createContext, useState } from "react";
import CompResult from "./components/CompResult";
import CompUl from "./components/CompUl";
export const AppContext = createContext()

const fnChangePoint = function (arr) {
  //arr['o','x','o'].filter(v=>v==='o') -> ['o','o'].legnth -> 2
  return arr.filter(v => v === 'o').length
}

function App() {
  const [_pointArr, _setPointArr] = useState(new Array(3).fill('x'))//['x','x','x']
  const [_readOnly, _setReadOnly] = useState(false)
  const [_showBtn, _setShowBtn] = useState(false)
  const [_reset, _setReset] = useState(true)
  const [_listCnt,_setListCnt] =useState(Math.ceil(Math.random()*3))

  return (
    <AppContext.Provider value={{
      _pointArr, _setPointArr, fnChangePoint, _readOnly, _setReadOnly, _setShowBtn, _reset,_listCnt
    }}>
      <h1>Context</h1>
      <hr />
      <CompUl />
      <hr />
      <CompResult />
      {(_showBtn) && <button onClick={e => {
        _setReset(p => !p) 
        _setReadOnly(false)
        _setPointArr(new Array(3).fill('x'))
        _setListCnt(Math.ceil(Math.random()*3))
      }}>다시시작하기</button>}
    </AppContext.Provider>
  );
}

export default App;
