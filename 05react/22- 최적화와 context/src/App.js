import { createContext, useEffect, useState } from "react";
import CompTitle from "./CompTitle";
import CompOutput from "./CompOutput";
import CompBtn from "./CompBtn";

export const AppContext = createContext()

function App() {

  const [_n, _setN] = useState(0)

  useEffect(()=>{
    console.log(`App update`);
  })

  return (
    <AppContext.Provider value={{
      _n, _setN
    }
    }>
      <CompTitle/>
      <hr />
      <CompOutput/>
      <hr />
      <CompBtn  _setN={_setN}/>
      </AppContext.Provider>
  );
}

export default App;
