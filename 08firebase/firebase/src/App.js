import fb from "./fb/config"; //디폴트로 export했으니까 중괄호없음
import { Route, Routes, useNavigate } from "react-router-dom";
import CompFooter from "./components/CompFooter";
import CompHeader from "./components/CompHeader";
import CompHome from "./components/CompHome";
import CompSignIn from "./components/CompSignIn";
import CompSignUp from "./components/CompSignUp";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fb/auth";
import CompApp from "./components/CompApp";

export const Appcontext = createContext()

function App() {

  const navi = useNavigate()
  const [_isLogged, _setIsLogged] = useState(false)
  const [_isLoaded, _setIsLoaded] = useState(false)
  const [_todoArr, _setTodoArr] =useState() //


  useLayoutEffect(() => {//화면이 깜빡이면서 이동하는게 보이니까 유즈이펙트 말고..(0.1초라도 빠르게 이벤트관찰자를 추가하기 위함)
    onAuthStateChanged(auth, (user) => {
      if (user) {
        _setIsLogged(true)
        console.log(auth.currentUser);
      } else {
        _setIsLogged(false)
        navi('/signin')
      }
      _setIsLoaded(true)
    });
  }, [])

  return (
    <Appcontext.Provider value={{
      navi,
      _isLogged, _setIsLogged,
      _todoArr, _setTodoArr,
    }}>
      {(_isLoaded)
        ?
        <>
          <CompHeader />

          <Routes>
            <Route path="/" element={<CompHome />} />
            <Route path="/signin" element={<CompSignIn />} />
            <Route path="/signup" element={<CompSignUp />} />
            <Route path="/add" element={<CompApp/>} />
          </Routes>

          <CompFooter />
        </>
        :
        '회원정보를 가져오는 중입니다!'
      }
    </Appcontext.Provider>
  );
}

export default App;

