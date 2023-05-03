import { Route, Routes } from "react-router-dom";
import CompMenu from "./components/compMenu/CompMenu";
import CompCalc from "./components/compCalc/CompCalc";
import CompBMI from "./components/compBMI/CompBMI";
import CompDDay from "./components/compDDay/CompDDay";



function App() {
  return (
    <Routes>
      <Route path="/" element={<CompMenu/>}/>
      <Route path="/calc" element={<CompCalc/>}/>
      <Route path="/bmi" element={<CompBMI/>}/>
      <Route path="/dday" element={<CompDDay/>}/>
    </Routes>
  );
}

export default App;
