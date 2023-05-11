import { createContext, useState } from "react";
import CompBtn from "./CompBtn";
import CompDiv from "./CompDiv";

export const AppContext =  createContext()

function App() {
  const [_listArr, _setListArr] = useState([]) //div 반복출력할려고 만든거야 listArr//배열이 늘어날때 div가 늘어나게하고파



  return (
    <AppContext.Provider value={{_listArr, _setListArr}}>
      <p>
        버튼을 클릭할때마다 div가 추가됩니다. <br />
        div의 키값으로는 timeStamp를 사용하세요 <br />
        브라우저를 종료후 다시 실행할 경우 div의 숫자는 이전과 동일하게 출력되어야 합니다.
      </p>
      <hr />
      {_listArr.length === 0 ?
        <p>목록이 없어요</p>
        :
        _listArr.map(v => <CompDiv key={v.key} />)
        /*  [<CompDiv />,<CompDiv />] */
      } {/* 배열의 길이만큼 새로운 배열(배열이 필요하니까. 근데 리턴문안에서는 1개밖에 리턴못하자나 그니까 배열로 리턴해야지)을 만들겠다 */}
      <CompBtn  />
    </AppContext.Provider>
  );
}

export default App;

//버튼을 눌렀을때 추가하는거 먼저 배열이 있어야함...map.... 처음에는 하나 배열을 넣음. 그다음 2번째 인덱스 타임스탬프. 클릭할때마다 배열의 값이 추가가되는데 그걸 타임스템프를 밀어넣어서 추가할것. 그걸 키값으로 사용하고 해당 컴포넌트에서 추가한 날짜...
//타입스템프로 키값..

