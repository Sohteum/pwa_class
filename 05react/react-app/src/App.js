import { useState } from "react";

//fn
// 로컬스토리지에 값이 있으면 가져오고 없으면 1의 값을 리턴하는 함수를 만든다
// 스테이트를 직접작성하는게 아니면 밖에서 만들어야한다
const fnArr = function(){
  const n = localStorage.getItem('n')
  if(n) {
    return parseInt(n)
  }else {
    localStorage.setItem( 'n', 1 )
    return 1
  }
}//fn



function App() {
  const [_n, _setN] = useState(fnArr())

  const fnIncrease = function(){
    let n = _n
    _setN(++n)
   
    window.localStorage.setItem('n',n)
  }

  return (
    <>
      {_add}
      <hr />
      <button onClick={fnIncrease}>증가</button>
    </>
  );
}

export default App;


//브라우저 끄고 증가가 남아있어야함



// const fnArr = function(){

// }//fn



// function App() {
//   const [_n, _setN] = useState(()=>{
//     const n = localStorage.getItem('n')
//     if(n) {
//       return parseInt(n)
//     }else {
//       localStorage.setItem( 'n', 1 )
//       return 1
//     }
//   })