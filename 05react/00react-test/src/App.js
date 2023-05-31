import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CompHeader from "./components/CompHeader";
import { useContext } from "react";
import CompSignIn from "./components/CompSignIn";
import CompTodoList from "./components/CompTodoList";
export const Appcontext = useContext()

function App() {


  const [_isLogged, _setIsLogged] = useState(false)
  const navi = useNavigate()


  return (
    <Appcontext.Provider value={{
      navi,
      _isLogged, _setIsLogged,
    }}>
      <CompHeader />

      <Routes>
        <Route path="/" element={<CompHeader/>}/>
        <Route path="/signin" element={<CompSignIn/>} />
        <Route path="/todo" element={<CompTodoList/>}/>
      </Routes>





    </Appcontext.Provider>

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