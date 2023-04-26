import { useMemo, useState } from "react";
import CompSub from "./CompSub";
import CompSum from "./CompSum";

function App() {

  const [_n1, _setN1] = useState(1)
  const [_n2, _setN2] = useState(1)




  /* ------------------- */
  const fn1 = function (n) {
    console.log('fn1실행');
    let result = n
    for (let i = 1; i < 1000000; i++) {//이렇게 과하게 수를 적용해서 버벅이게 만드는거...예를 든거야
      result += 1  //3,
    }
    return result
  }

  let n1 = useMemo(() => { return fn1(_n1) }, [_n1]) //n1이 값이 변경되는 경우에만 실행해라
  /* ---------------- */
  const fn2 = function (n) {
    console.log('fn2실행');
    let result = n
    for (let i = 1; i < 1000000; i++) {//이렇게 과하게 수를 적용해서 버벅이게 만드는거...예를 든거야
      result -= 1  //3,
    }
    return result
  }

  let n2 = useMemo(() => { return fn2(_n2) }, [_n2]) //n1이 값이 변경되는 경우에만 실행해라




  return (
    <>
      <CompSum n1={n1} _setN1={_setN1} />
      <hr />
      <CompSub n2={n2} _setN2={_setN2} />
    </>
  );
}

export default App;
