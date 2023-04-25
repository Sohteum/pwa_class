import { createContext, useEffect, useState } from "react";
import CompClock from "./conponents/CompClock";
import './css/style.css';
export const AppContext = createContext()

let time = new Date()// 지금 현재 시각을 알아냄

function App() {
  console.log(time);
  const [_hour, _setHour] = useState(time.getHours())
  const [_min, _setMin] = useState(time.getMinutes())
  const [_sec, _setSec] = useState(time.getSeconds())
  // const [_time, _setTime] = useState(new Date());
  const [_year, _setYear] = useState(time.getFullYear())
  const [_month, _setMonth] = useState(time.getMonth())
  const [_date, _setDate] = useState(time.getDate())
  const [_day, _setDay] = useState(time.getDay())
  //time.getFullYear()
  //time.getMonth() 0월부터 나옴 +1
  //time.getDate()
  //time.getDay() 일요일=0, [일, 월, 화, 수,....] 배열을 만들어서 x번째.출력

  useEffect(() => {
    setInterval(function () {
      time = new Date()
      _setHour(time.getHours())
      _setMin(time.getMinutes())
      _setSec(time.getSeconds())
    }, 1000)
  }, [])//셋인터벌 유즈이펙트 훅스에서만, 시작할때 한번이니까 시, 분, 초가 업뎃이 안됨, 유즈이펙트 디펜던시 안에서는 초기값만 가져올 수 있음




  return (
    <AppContext.Provider value={{
      _hour, _min, _sec,
      _year, _setYear,
      _month, _setMonth,
      _date, _setDate,
      _day, _setDay

    }}>
      <h1>시계</h1>
      <CompClock />

    </AppContext.Provider>
  );
}


export default App;


//위쪽에 디지털 시계 만들고 am,pm구분하기,
//아래에는 2023.01.24 (요일)
