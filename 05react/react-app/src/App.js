import { useState } from "react";
import CompBtn from "./components/CompBtn";
import CompOutput from "./components/CompOutput";

function App() {
  const [_show, _setShow] = useState(false)
  const [_showBtn, _setShowBtn] = useState(true)

function fnBtnHandler () {
  _setShow(true)
}
  
  return (
    <>

     { _show&&<CompOutput _setShow={_setShow} _setShowBtn={_setShowBtn} />}

      <hr />

     { _showBtn&&<CompBtn _setShow={_setShow} _setShowBtn={_setShowBtn}/>}
    </>
  );
}

export default App;

//ㅓ음에는 위에 애가 보이면 아노디고 클릭하면 사라지면서 위애가 나타남.