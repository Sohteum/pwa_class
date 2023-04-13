import { useState } from "react";
import Sum from "./components/Sum";


function App() {

const [_point, _setPoint] = useState(0)

  return (
    <>
      <h1>더하기 계산</h1>
      <hr />
      <Sum _setPoint={_setPoint}/>{/* 내가 이걸 물려주는데 나는 셋포인트라고 부르지만 너는 a라고 불러 너는 a라는 박스에 담아서 써 하지만 귀찮으니까 그냥 같은 이름으로 쓴다.*/}
      <hr />
      <Sum _setPoint={_setPoint} />
      <hr />
      <Sum _setPoint={_setPoint} />
      <hr />
      <Sum _setPoint={_setPoint} />
      <hr />
      <Sum _setPoint={_setPoint} />
      <hr />
      총점: {_point}
          </>
  );
}

export default App;
