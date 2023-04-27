import { Route, Routes } from "react-router-dom";
import CompAddList from "./components/CompAddList";
import CompDetail from "./components/CompDetail";
import CompHome from "./components/CompHome";
import CompTitle from "./components/CompTitle";
import { createContext, useState } from "react";

export const AppContext =  createContext()

function App() {

const [_todoArr, _setTodoArr] = useState([])//배열 길이를 여기서 제어할 수도 있음 내용은 compli에서 나온다

  return (
    <AppContext.Provider value={{_todoArr, _setTodoArr}}>
      <CompTitle />
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/add" element={<CompAddList />} />
        <Route path="/detail/:id" element={<CompDetail />} />

      </Routes>
      <hr />

    </AppContext.Provider >

  );
}

export default App;
