import { useState } from "react";
import Comp from "./Comp";





function App() {
  const [_arr , _setArr] = useState([])
  const fnAddHandler = function (){
  }
  
  return (
    <>
      <Comp />
      <hr />
      <button onClick={fnAddHandler}>추가</button>
    </>
  );
}

export default App;

//컴포넌트가 추가되고 숫자도 바뀐다 배열을 이용해야한다.
//로컬스토리지 이용해서  i쓰거라