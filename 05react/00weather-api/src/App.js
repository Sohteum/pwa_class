import CompCurrent from "./components/compCurrent/CompCurrent";
import CompDaily from "./components/compDaily/CompDaily";
import CompHourly from "./components/compHourly/CompHourly";
import CompMap from "./components/compMap/CompMap";

function App() {
  return (
    <div className="app-inner">
      <CompCurrent/>
      <CompDaily/>
      <CompHourly/>
      <CompMap/>
    </div>
  );
}

export default App;
