import { Route, Routes } from "react-router-dom";
import CompHeader from "./components/CompHeader";
import CompHome from "./components/CompHome";
import CompSignIn from "./components/CompSignIn";


function App() {


  return (
    < >
      <CompHeader />
      <Routes>
        <Route path="/" element={<CompHome/>}/>
        <Route path="/signin" element={<CompSignIn/>} />

      </Routes>
    </ >
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