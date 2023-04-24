import { createContext, useEffect, useState } from 'react';
import CompClock from './components/CompClock';
import './css/style.css'
let time = new Date()
export const AppContext = createContext()

function App() {

  const [_year, _setYear] = useState(time.getFullYear())
  const [_month, _setMonth] = useState(time.getMonth())//출력시 +1
  const [_date, _setDate] = useState(time.getDate())
  const [_day, _setDay] = useState(time.getDay())//일요일 0

  const [_hour, _setHour] = useState(time.getHours())
  const [_minute, _setMinute] = useState(time.getMinutes())
  const [_sec, _setSec] = useState(time.getSeconds())


  useEffect(() => {
    setInterval(() => {
      time = new Date()
      _setHour(time.getHours())
      _setMinute(time.getMinutes())
      _setSec(time.getSeconds())
    }, 1000)
  }, [])

  return (
    <AppContext.Provider value={{
      _hour, _minute, _sec, time,
      _year, _month, _date, _day
    }}>
      <h1>리액트 시계</h1>
      <CompClock />
    </AppContext.Provider>
  );
}

export default App;
