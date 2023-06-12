import fb from "./fb/config";
import { auth } from "./fb/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import CompHeader from "./components/compHeader/CompHeader";
import CompSignin from "./components/compSignin/CompSignin";
import { Route, Routes, useNavigate } from "react-router-dom";
import CompHome from "./components/compHome/CompHome";
import Comp404 from "./components/comp404/Comp404";
import CompSignup from "./components/compSignup/CompSignup";
import CompAdd from "./components/compAdd/CompAdd";
import CompDetail from "./components/compDetail/CompDetail";
import CompLoader from "./components/compLoader/CompLoader";
import { collection, onSnapshot } from "firebase/firestore";
import { db, fnGetDocs, fnGetDocsCnt } from "./fb/db";


export const AppContext = createContext();


function App() {

  const [_init, _setInit] = useState(true)
  const [_isLogged, _setIsLogged] = useState(null)
  const [_showLoader, _setShowLoader] = useState(true)
  const [_fadeOut, _setFadeOut] = useState(false)
  const [_docsCnt, _setDocsCnt] = useState(0)
  const [_docsArr, _setDocsArr] = useState(null)
  const [_docsOutputArr, _setDocsOutputArr] = useState(null)
  const [_nextDoc, _setNextDocs] = useState(null)

  const navi = useNavigate()

  useEffect(() => {
    let init = true
    onAuthStateChanged(auth, (user) => {
      if (user && auth.currentUser.emailVerified) {//로그인
        _setIsLogged(true)
        onSnapshot(collection(db, auth.currentUser.uid), async()=>{
          const docsCnt = await fnGetDocsCnt(auth.currentUser.uid)
          
          const {docsArr, nextDoc} = await fnGetDocs(auth.currentUser.uid, 3)
          console.log(docsCnt, docsArr);
          _setDocsCnt(docsCnt);_setDocsArr(docsArr);_setDocsOutputArr(docsArr);_setNextDocs(nextDoc);
        })
        navi('/')
      } else {//로그아웃
        _setIsLogged(false)
        navi('/signin')
      }
      if (init) {//처음에만 
        init = false
        _setFadeOut(true) //이렇게 하면 페이드아웃이 안돼 페이드아웃은 존재하는상태에서 투명해지는거닌까
      }
      // console.log('로그인상태변경');
      // navi('/signin')
    })
  }, [])//변하는 state를 useEffect에서 사용하면 절대 안됨. 이 안에서만 작동하는 변수를 따로 만들어야함

  return (
    <AppContext.Provider value={{
      _isLogged, _setIsLogged,
      _showLoader, _setShowLoader,
      _fadeOut, _setFadeOut,
      _docsCnt, _setDocsCnt,
      _docsArr, _setDocsArr,
      _docsOutputArr, _setDocsOutputArr,
      _nextDoc, _setNextDocs,
    }}>
      <main>
        <img className="main-bg" src={require('./assets/img/common/main-bg.png')} alt="" />
        <h1>
          <img src={require('./assets/img/header/title-main.png')} alt="" />
        </h1>
        <article>
          <CompHeader />
          <Routes>
            <Route path="/" element={<CompHome />} />
            <Route path="/signin" element={<CompSignin />} />
            <Route path="/signup" element={<CompSignup />} />
            <Route path="/add" element={<CompAdd />} />
            <Route path="/detail/:id" element={<CompDetail />} />
            <Route path="*" element={<Comp404 />} />
          </Routes>

        </article>
      </main>
      {(_showLoader) && <CompLoader />}
    </AppContext.Provider>
  );
}

export default App;
