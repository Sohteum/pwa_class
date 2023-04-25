import { useEffect, useState } from "react";
import CompPopup from "./components/CompPopup";

// window,localStorage.setItem('expires','들어감')  //이렇게 해주면 스토리지가 생기기때문에 팝업이 안나온다. 주석처리 안해주면 계속 팝업 안나와


function App() {
  const [_show, _setShow] = useState(true)
  useEffect(() => {
    if (window.localStorage.getItem('expires')) {//팝업숨기기 //여기가 유효기간. 이거보다 커지면 유효기간이 지난것.
      if (Date.now()< parseInt(window.localStorage.getItem('expires'))) { //앱이 실행된 시간으로부터 팝업유효기간이 지나지 않았다면
        _setShow(false)
      } else {
        _setShow(true)
        window.localStorage.removeItem('expires')
      }
    }
      //이런게 존재하니?지금은 없엉. 보여줄지 말지 결정할건데. 스토리지에 없으면 보여주고 스토리지에 있으면 안보여주고
    }, [])
  return (
    <>
      <h1>유효기간 팝업</h1>
      {_show && <CompPopup _setShow={_setShow} />}
    </>
  );
}

export default App;
