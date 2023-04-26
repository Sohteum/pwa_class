import { useEffect, useState } from "react";
import CompBtn from "./CompBtn";
import CompOutput from "./CompOutput";
import CompTitle from "./CompTitle";

function App() {
const [_n, _setN] = useState(0)

useEffect(()=>{//스테이트가 변경될때마다
console.log('App update');
})

  return (
    <>
    <CompTitle/>
    <hr />
    <CompOutput _n={_n}/>
    <hr />
    <CompBtn _setN={_setN}/>
    
    </>

  );
}

export default App;
