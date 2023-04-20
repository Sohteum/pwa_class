import { useEffect, useState } from "react";


const CompOutput = ({ _setShow, _setShowBtn }) => {

  const [_n, _setN] = useState(1)


  useEffect(() => {
      const intervalID = setInterval(function () {
        _setN(prev => prev + 1)
      }, 1000)
      return(()=>{  //cleanUp
        clearInterval(intervalID)
      })
  }, [])

  function fnRemoveHandler() {
    _setShow(false)
    _setShowBtn(true)
  }


  return (
    < >
      <p >1씩 증가 :{_n}</p>
      <button onClick={fnRemoveHandler} >중지</button>
    </ >
  );
};

export default CompOutput;