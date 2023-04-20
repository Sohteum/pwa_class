import React, { useEffect, useState } from 'react';

const CompInterval = () => {

  const [_num, _setNum] = useState(0)//이 값은 그러니까 유즈스테잇은 컴포넌트단위로 시작될때 빠짐. 근데 그냥 컨스트로 선언한거는 컴포넌트단위로 시작될때 계속 읽음. 

  useEffect(() => {
    const intervalID = setInterval(() => {
      _setNum(prev => prev + 1)
      console.log('t');
    }, 1000);
    return(()=>{
      clearInterval(intervalID)
      //죽기전에할일 컴포넌트가 사라질때 1회 하는일 . 마감하고 다시 시작하면 컴포넌트부터 다시 시작
    })
  }, [])//화면에 나왔을때 단 1회만 할것.

  return (
    <p>
      _num : {_num}</p>
  );
};

export default CompInterval;