import { Route, Routes, useNavigate } from "react-router-dom";
import CompHeader from "./components/CompHeader";
import CompHome from "./components/CompHome";
import CompSignIn from "./components/CompSignIn";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

const fnSetUser = () => {//로컬에 뭐가 들어있는지 봄
  let user = localStorage.getItem('localStorageUser')
  if (user) {//로그인 기록이 있다면
    return JSON.parse(user) //기록을 유저에게 넘겨주니까 리턴
  } else {
    return null
  }
}

function App() {

  const [_user, _setUser] = useState(fnSetUser())
  const [_list, _setList] = useState([])
  const navi = useNavigate()

  useEffect(() => {
    if (!_user) {
      navi('/signin')
    }
  }, [])

  return (
    <AppContext.Provider value={{
      _user, _setUser,
      _list, _setList,
      }}>
      <CompHeader />
      <Routes>
        <Route path="/" element={<CompHome />} />
        <Route path="/signin" element={<CompSignIn />} />

      </Routes>
    </AppContext.Provider>
  );
}

export default App;


// [
//   {
//     "id": "user1",
//     "pw": "1234",
//     "name": "michle"
//   },
//   {
//     "id": "user2",
//     "pw": "2345",
//     "name": "john"
//   },
//   {
//     "id": "user3",
//     "pw": "3456",
//     "name": "jane"
//   }
// ]