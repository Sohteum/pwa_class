import { Route, Routes } from "react-router-dom";
import CompTitle from "./components/CompTitle";
import CompMain from "./components/CompMain";
import CompAdd from "./components/CompAdd";
import CompDetail from "./components/CompDetail";
import Comp404 from "./components/Comp404";
import sampleArr from "./store/store";  //src폴더에 있어야함
import { createContext, useState } from "react";
export const AppContext = createContext()


//컴포넌트 안에서 적으면 초기화가되니까여기서 적을거
const todoArr = [...sampleArr]


function App() {
  const [_orgArr, _setOrgArr] = useState(todoArr)
  const [_todoArr, _setTodoArr] = useState(todoArr) //샘플어레이를 쓰려면 투두어레이를 써야됨//저위에 샘플어레이를 만들고 여기는 다시 todoArr로...

  return (
    <AppContext.Provider value={{ _orgArr, _setOrgArr, _todoArr, _setTodoArr}}>
      <CompTitle /> {/* 얘는 그냥 무조건 나오는거야 */}
      <hr />
      <Routes>{/* 라우츠 안에 라우트 라우트는 안에 페스랑 엘리먼트 */}
        <Route path="/" element={<CompMain/>}/>
        <Route path="/add" element={<CompAdd/>}/>
        <Route path="/detail/:id" element={<CompDetail/>}/> {/* //let id하고싶어요와같은말//쿼리스트링같은걸 여기서 해줘야함 유즈리퀘스트파람즈?//여러개를 보낼수있다, 이름은 마음대로 정해도 된다 */}
        <Route path="/*" element={<Comp404/>}/>{/*  *는 우선순위가 높아서 맨 위에쓰면 계속 *만 보여주게됨. 이프문에서 엘즈이프썻을때 조건 걸리면 멈추는것과 동일한 원리 */}
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
