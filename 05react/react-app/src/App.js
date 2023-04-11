
import { useState } from "react";
//모듈즈안에있는것들은 경로없이 불러올수있음 .js는 생략된것.{}니까 익스폴트한거지. 함수야.


function App() { /* 이걸 컴포넌트라고 함 */
  let [_n, _setNumber] = useState(1)

  // let fnClickHandler = () => {
  // }//fnClickHandler
  function fn() {
    //_setNumber(++number)
    //let number = number
    //_setNumber(++n)

    _setNumber(prev => prev + 1)
    console.log(_n);

  }//fnClickHandler

  return (
    <>
      <h1>1씩증가</h1>
      <p><button onClick={fn}>증가</button></p>
      <p className="output">현재값 : {_n}</p>
    </>
  );
}

export default App;
