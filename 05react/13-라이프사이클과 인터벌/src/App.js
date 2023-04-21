import { createContext, useEffect, useRef, useState } from "react";
import CompBtn from "./conponents/CompBtn";
import CompOutput from "./conponents/CompOutput";
import CompInput from "./conponents/CompInput";

export const AppContext = createContext()

function App() {

  const [_sec, _setSec] = useState('?')//변화값은 호출을 하는 곳에서만 확인가능(_sec)
  const [_disabled, _setDisabled] = useState(true)
  const [_readOnly, _setReadOnly] = useState(false)
  let intervalID = useRef()
  const refInput = useRef()

  useEffect(() => {
    if (_sec === 0) {
      _setDisabled(false)
      clearInterval(intervalID.current)
      _setReadOnly(false)
    }
  })
  //업데이트 될때마다 알아야함. 노디펜던시를 해야댐....화면이 바뀔때마다 변경된 값을 확인가능

  return (
    <AppContext.Provider value={{ _sec, _setSec, _disabled, _setDisabled, intervalID, _readOnly, _setReadOnly, refInput }}>
      <h1>타이머(Lifecycle&setInterval)</h1>
      <hr />
      <CompOutput />
      <hr />
      <CompInput />
      <hr />
      <CompBtn />
      <hr />
    </AppContext.Provider>
  );
}

export default App;
