import fb from "./fb/config"; //디폴트로 export했으니까 중괄호없음
import { Route, Routes, useNavigate } from "react-router-dom";
import CompFooter from "./components/CompFooter";
import CompHeader from "./components/CompHeader";
import CompHome from "./components/CompHome";
import CompSignIn from "./components/CompSignIn";
import CompSignUp from "./components/CompSignUp";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./fb/auth";

export const Appcontext = createContext()

function App() {

  const [_isLogged, _setIsLogged] = useState(false)
  const navi = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(auth.currentUser);
      } else {
        console.log('로그인전');

      }
    });
  }, [])

  return (
    <Appcontext.Provider value={{ navi }}>
      <CompHeader />

      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/signin" element={<CompSignIn />} />
        <Route path="/signup" element={<CompSignUp />} />
      </Routes>

      <CompFooter />
    </Appcontext.Provider>
  );
}

export default App;
