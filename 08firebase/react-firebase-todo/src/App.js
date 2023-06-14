import fb from "./fb/config";
import { auth } from "./fb/auth";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
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
  const [_loadedCnt, _setLoadedCnt] = useState(0) //문서가 하나도 안불러와졌으니까 0
  const [_docsArr, _setDocsArr] = useState(null)
  const [_docsOutputArr, _setDocsOutputArr] = useState(null)
  const [_nextDoc, _setNextDocs] = useState(null)
  const [_isPending, _setIsPending] = useState(true)//처음에는 대기상태로 만들어줌>변화가 있을때마다 대기하도록 만들어줌>송신이 끝나면 목록출력
  const [_scrollTop, _setScrollTop] = useState(true)

  const navi = useNavigate()

  const fnGetDocsHandler = useCallback(//함수에 함수를 싸서 하이오더펑션이라고 하는데 리액트훅스. 앱 리랜더링될때 다시 안읽음. 새로 쓰지 말라는뜻(최적화)
    async (cnt) => {
      _setIsPending(true)
      const { docsArr, nextDoc } = await fnGetDocs(auth.currentUser.uid, cnt )
      const docsCnt = await fnGetDocsCnt(auth.currentUser.uid)//순서, onsnapshot안쪽에서는 캐싱이되는걸로 보임

      _setDocsCnt(docsCnt); _setDocsArr(docsArr); _setDocsOutputArr(docsArr); _setNextDocs(nextDoc); _setLoadedCnt(cnt);
      _setIsPending(false);
    },[])

  useEffect(() => {

    onAuthStateChanged(auth, () => {
      if (auth.currentUser && (auth.currentUser.emailVerified || auth.currentUser.email === 'guest@mail.com')) {//로그인
        _setIsLogged(true)
        navi('/')
        fnGetDocsHandler(5)//문서를 처음부터 5개만 가져온다

        onSnapshot(collection(db, auth.currentUser.uid), (snapshot) => {//데이터베이스가 변화감지
          snapshot.docChanges().forEach(async (change) => {
            if (change.type === "added" || change.type === "removed") {//문서를 추가하거나 삭제했을때
              _setScrollTop(0)//스크롤위치 처음으로 조정
              fnGetDocsHandler(5)//앱이 시작했을때 문서를 처음부터 5개만 가져옴

            }
          })//forEach
        })//snapshot
      } else {//로그아웃
        _setIsLogged(false)
        navi('/signin')
      }
      let init = true
      if (init) {//처음접속했을경우
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
      _isPending, _setIsPending,
      _loadedCnt, _setLoadedCnt,
      fnGetDocsHandler,
      _scrollTop, _setScrollTop,
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
            <Route path="/detail/:docid" element={<CompDetail />} />
            <Route path="*" element={<Comp404 />} />
          </Routes>

        </article>
      </main>
      {(_showLoader) && <CompLoader />}
    </AppContext.Provider>
  );
}

export default App;
