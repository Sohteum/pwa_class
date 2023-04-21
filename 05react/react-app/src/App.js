import { createContext, useContext, useEffect, useState } from "react";
import CompResult from "./components/CompResult";
import CompUl from "./components/CompUl";

export const AppContext = createContext()  //접속시에 최초 한번 갱신

function App() {
  const liCnt = Math.ceil(Math.random() * 3) + 1
  const [_liCnt, _setLiCnt] = useState(liCnt)  //배열 개수를 생성하는 스테잇을 만들고야 배열의 개수는 랜덤.근데 다음에 화면 업데이트해도 안읽으니까 여기서 랜덤으로 만들면 안됨. 초기화를 안하고 바뀐상태만 기억함. 그래서 셋리카운트를 해줄때까지는 안변하고 아님 새로고침을 해줘야하는것. //업뎃될때는 안되는데 랜덤이니까 안보였다가 다시 새로 태어날때, 키값이 바뀔때, 그때는 달라진다.
  const [_ulKey, _setUlKey] = useState(1)
  const [_pointArr, _setPointArr] = useState([new Array(liCnt).fill('x')])//배열로 만들어야하니까. arr, 변수로 만들어서 사용하는것이 바람직함.


  useEffect(() => {
    console.log('App update');//정답일때만 업데이트가 일어난다 왜냐면 스테이트가 그때만 변경되잖아
  })
  function fnresetHandler() {
    _setUlKey(prev => prev * -1)
    _setLiCnt(liCnt)
    _setPointArr(new Array(liCnt).fill('x'))
  }


  return (
    <AppContext.Provider value={{ //밖은 보간법중괄호, 안은 변수(객체)중괄호
      _liCnt, _setLiCnt,
      _pointArr, _setPointArr
    }}>
      <h1>더하기 문제</h1>
      <CompUl key={_ulKey} />{/* //키를 계속 바꿔야 새로 태어나니까 스테잇으로 만들어버림 */}
      <hr />
      <CompResult />
      <button onClick={fnresetHandler}>초기화</button>
    </AppContext.Provider>
  );
}

export default App;
