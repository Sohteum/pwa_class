import { useState } from "react";
import CompBtn from "./CompBtn";
import CompDiv from "./CompDiv";

const fnSetArr = () => {
  const arr = [
    {
      id:,
      title,
      date,
      time,
      desc,
    },
  ]
  return arr
}

function App() {
  const [_listArr, _setListArr] = useState(fnSetArr)

  console.log(_listArr);

  //타임스템프, 날짜와 시간정보 여러개니까 객체로 받음
  // {
  //   id: ,
  //   month:
  //   date:
  //   hour:

  // }
  return (
    <>
      <p>
        버튼을 클릭할때마다 div가 추가됩니다. <br />
        div의 키값으로는 timeStamp를 사용하세요 <br />
        브라우저를 종료후 다시 실행할 경우 div의 숫자는 이전과 동일하게 출력되어야 합니다.
      </p>
      <hr />
      {_listArr.length !== 0 ? <CompDiv /> : "<p>목록이 없어요</p>"}
      <CompBtn _listArr={_listArr} _setListArr={_setListArr} />
    </>
  );
}

export default App;

//버튼을 눌렀을때 추가하는거 먼저 배열이 있어야함...map.... 처음에는 하나 배열을 넣음. 그다음 2번째 인덱스 타임스탬프. 클릭할때마다 배열의 값이 추가가되는데 그걸 타임스템프를 밀어넣어서 추가할것. 그걸 키값으로 사용하고 해당 컴포넌트에서 추가한 날짜...
//타입스템프로 키값..

