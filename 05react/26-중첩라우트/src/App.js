import { Routes, Route } from "react-router-dom";
import CompFooter from "./components/CompFooter";
import CompHeader from "./components/CompHeader";
import CompMain from "./components/CompMain";
import CompGreet from "./components/CompGreet";
import CompSubWrap from "./components/CompSubWrap";
import CompLocation from "./components/CompLocation";
import CompBizArea from "./components/CompBizArea";
import CompBizIntro from "./components/CompBizIntro";
import CompMenuNotice from "./components/CompMenuNotice";
import CompMenuOnline from "./components/CompMenuOnline";
import CompNotice from "./components/CompNotice";
import CompOnline from "./components/CompOnline";

function App() {
  return (
    <>
      <CompHeader />



      <Routes>{/* 여기는 주소에 따라 변하는 부분 */}

        <Route path='/' element={<CompMain />} />

        <Route path='/about' element={<CompSubWrap />}>{/* 여기는 따로 닫아줘야함 단일태그아님 */}
          <Route path='location' element={<CompLocation />} />
          <Route path='greet' element={<CompGreet />} />{/* 아웃렛안에 들어오는건 /슬래시를 안함 */}
        </Route>

        <Route path='/biz' element={<CompSubWrap />}>
          <Route path='intro' element={<CompBizIntro />} />
          <Route path='area' element={<CompBizArea />} />
        </Route>
 
        <Route path='/notice' element={<CompSubWrap />}>
          <Route path='notice' element={<CompNotice />} />
          <Route path='online' element={<CompOnline />} />
        </Route>

      </Routes>

      <CompFooter />
    </>
  );
}

export default App;


//공지사항 안에 자유게시판 만들기