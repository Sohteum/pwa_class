import { useEffect } from "react";

function App() {
  // const day = new Date()
  // day.getTime()
  let timeStamp = Date.now()//1000곱한 시간이 지금까지 흐른 초, 실시간으로 구해야함(업데이트되어야함, 그래서 셋인터벌)
  //내가 만약 미래 특정시간(바뀌지 않는 시간)을 구하고 싶으면 미래시간 - 지금시간을 빼면 됨.
  const dDayTimeStamp = new Date(2023,4,26).getTime() //이렇게 만들면 현재 날짜 아니면 안에 날짜를 넣어줘야 디데이가 됨
  console.log(dDayTimeStamp);

  useEffect(() => {
    let intervalID = setInterval(() => {
      timeStamp = Date.now()
      // console.log(timeStamp);
    }, 1000)//항상 습관적으로 클리어 할것
    return (() => {
      clearInterval(intervalID)
    })
  }, [])
  // console.log(timeStamp);
  return (
    <>
      app
    </>
  );
}

export default App;
