import { Route, Routes, useLocation } from "react-router-dom";
import CompMenu from "./components/compMenu/CompMenu";
import CompCalc from "./components/compCalc/CompCalc";
import CompBMI from "./components/compBMI/CompBMI";
import CompDDay from "./components/compDDay/CompDDay";
import CompBackBtn from "./components/compBackBtn/CompBackBtn";
import { fnGetTheme } from './script/CompMenu';
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext()

function App() {
  const [_theme, _setTheme] = useState({ 1: false, 2: false, 3: false }) //처음에는 아무도 체크를 안한다
  const location = useLocation() //중괄호가 객체라는거자나 로케이션 이름이 슬래시리면 i태그가 안나오면 됨
  useEffect(() => {
    _setTheme(fnGetTheme())
  }, []) //앱이 만들어지는 순간 테마를 적용해야함

  return (
    <AppContext.Provider value={{
      _theme, _setTheme
    }}>
      {(location.pathname !== '/') && <CompBackBtn />} {/* 버튼 안나오게 하기 */}
      <Routes>
        <Route path="/" element={<CompMenu />} />
        <Route path="/calc" element={<CompCalc />} />
        <Route path="/bmi" element={<CompBMI />} />
        <Route path="/dday" element={<CompDDay />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
