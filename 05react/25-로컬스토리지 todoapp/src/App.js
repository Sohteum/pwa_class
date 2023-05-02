import { Route, Routes } from "react-router-dom";
import CompAdd from "./coponents/CompAdd";
import CompDetail from "./coponents/CompDetail";
import CompMian from "./coponents/CompMian";
import { createContext, useState } from "react";
export const AppContext = createContext() //이거 외우기 


//window.localStorage.setItem('todoStorage',' ')//여기서 값을 넣을때 ''그냥이렇게가 아니고'  '이렇게 빈값을 넣어야함

const fnSetArr = () => {
  let todoStorage = window.localStorage.getItem('todoStorage') //일단 가져와서 있는지없는지 먼저 확인해야함
  if (todoStorage) { //=만약 배열이 있다면
    return JSON.parse(todoStorage) //글자를 진짜 배열로 바꾸어 넣어준것임
  } else {
    return []  //빈배열이 있는것. 푸시를 할수있는 상태
  }
}

function App() {
  const [_orgArr, _setOrgArr] = useState(fnSetArr()) //화면에 출력되는 목록(검색용)이랑 진짜리스트 두개를 만들거야 출력되는 목록을따로 만드는 이유는 원본을 보존하지 않으면 검색기능 등을 활용했을때 다 지워버리면 안되니까 출력용, 원본용(회원추가나 삭제, 변경)
  const [_outputArr, _setOutputArr] = useState(fnSetArr()) //이게 화면 출력용



  return (
    <AppContext.Provider value={{ _orgArr, _setOrgArr, _outputArr, _setOutputArr }}>
      <h1>todoApp</h1>
      <hr />
      <Routes>
        <Route path="/" element={<CompMian />} />
        <Route path="/add" element={<CompAdd />} />
        <Route path="/detail/:id" element={<CompDetail />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
