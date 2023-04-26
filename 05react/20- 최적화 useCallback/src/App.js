import { useCallback, useEffect, useState } from "react";
import CompBtn from "./CompBtn";
import CompOutput from "./CompOutput";
import CompTitle from "./CompTitle";

function App() {
  const [_n, _setN] = useState(0)

  const fnIncrease = useCallback(() => {//btn에서 가져옴
    //복잡한 함수르르 이용해 n을 변경한다는 가정
    _setN(prev => prev + 1)
  },[])//디펜던시를 달아줘야함[]

  useEffect(() => {//스테이트가 변경될때마다
    console.log('App update');
  })

  return (
    <>
      <CompTitle />
      <hr />
      <CompOutput _n={_n} />
      <hr />
      <CompBtn fnIncrease={fnIncrease} />

    </>

  );
}

export default App;
