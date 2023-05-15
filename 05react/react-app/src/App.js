import { useEffect, useState } from "react";

function fnGetDDay(dday, now) {
  // let dDayTimeStamp = dday
  // let timeStamp = now
  let diff = dday - now//남은 시간을 밀리세컨드로 환산(1000분의 1초)
  let remainfSec = parseInt(diff / 1000) //남은시간을  초로 환산

  let year = Math.floor(remainfSec / (24 * 60 * 60 * 365)) //몇일 남았는지 환산
  remainfSec = remainfSec % (24 * 60 * 60 * 365)

  let month = Math.floor(remainfSec / (24 * 60 * 60 * 30)) //몇일 남았는지 환산
  remainfSec = remainfSec % (24 * 60 * 60 * 30)

  let date = Math.floor(remainfSec / (24 * 60 * 60)) //몇일 남았는지 환산
  remainfSec = remainfSec % (24 * 60 * 60) //남은 시간(일차 빼고) 일로 나누고 남은 나머지 초

  let hour = Math.floor(remainfSec / (60 * 60)) //몇시간 남았는지
  remainfSec = remainfSec % (60 * 60) //시간으로 나누고 남은 나머지 초

  let min = Math.floor(remainfSec / 60) //몇분 남았는지
  let sec = remainfSec % 60 //분으로 나누고 몇초 남았는지

  console.log(year, month, date, hour, min, sec);
  // _setDate(date)
  // _setHour(hour)
  // _setMin(min)
  // _setSec(sec) //이건 안에서만 가능
  //60분이 1시간이니까 3600초, 소수점이 나오니까 floor로 소수점을 내려버림

  return {
    year,
    month,
    date,
    hour,
    min,
    sec,
  }
}

function App() {

  let timeStamp = Date.now()
  const dDayTimeStamp = new Date(2023, 5, 20).getTime()//월의 인덱스를 0부터 시작하기때문에 월은 -1해주는것
  //반대로 출력할때는 0월부터 시작하니까 +1을 해줘야함

  const [_year, _setYear] = useState()
  const [_month, _setMonth] = useState()
  const [_date, _setDate] = useState()
  const [_hour, _setHour] = useState()
  const [_min, _setMin] = useState()
  const [_sec, _setSec] = useState()

  const dDay = fnGetDDay(dDayTimeStamp, timeStamp)

  function fnSetDDay() {
    const { year, month, date, hour, min, sec } = fnGetDDay(dDayTimeStamp, timeStamp)
    _setYear(year)
    _setMonth(month)
    _setDate(date) //화면을 바꾸겠다는건 다시 실행하겠다는거니까 계속 걸림 그래서 무한루프에 빠짐.
    _setHour(hour)
    _setMin(min)
    _setSec(sec)
  }

  useEffect(() => {
    fnSetDDay()//1초 이후에 시작하니까 처음에 나올대까지 1초가 걸림 그래서 여기 한번 꽃아주면 계속 나오는것처럼 보임
    let intervalID = setInterval(() => {
      timeStamp = Date.now()
      fnSetDDay()
    }, 1000)//항상 습관적으로 클리어 할것
    return (() => {
      clearInterval(intervalID)
    })
  }, [])

  return (
    <>
      <p>
        2023 6월20일까지
        {_year}년, {_month}월, {_date}일, {_hour}시간, {_min}분, {_sec}초가 남았습니다.
      </p>
    </>
  );
}

export default App;
