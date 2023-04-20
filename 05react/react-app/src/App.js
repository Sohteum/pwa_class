import { useState } from "react";
import CompOutput from "./components/CompOutput";
import CompBtn from './components/CompBtn';

function App() {

  const [_show, _setShow] = useState(false)
  const [_showBtn, _setShowBtn] = useState(true)

  function fnBtnHandler() {
    _setShow(true)
  }

  return (
    <>
      {_showBtn && <CompBtn _setShow={_setShow} _setShowBtn={_setShowBtn} />}
      {_show && <CompOutput _setShow={_setShow} _setShowBtn={_setShowBtn} />}



    </>
  );
}

export default App;
