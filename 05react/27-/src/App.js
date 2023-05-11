import { useState } from "react";
import Comp from "./Comp";

const fnGetArr = () => {
  const arrStrg = localStorage.getItem('arrStorage')
  if(arrStrg) {
    return JSON.parse(arrStrg)
  }else {
    localStorage.setItem( 'arrStorage',JSON.stringify([1]) )
    return [1]
  }
}//fn

function App() {
  const [_arr,_setArr] = useState(fnGetArr)

  const fnAdd = function(){
    const i = _arr[_arr.length-1]+1
    const arr = [..._arr,i]
    window.localStorage.setItem('arrStorage',JSON.stringify(arr))
    _setArr(arr)
  }
  return (
    <>
      {
        _arr.map((v,i)=>{
          return <Comp key={v} idx={i}/>
        })
      }
      
      <hr />
      <button onClick={fnAdd}>추가</button>
    </>
  );
}

export default App;
