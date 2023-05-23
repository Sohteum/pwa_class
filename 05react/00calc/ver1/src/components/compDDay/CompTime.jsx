import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fnGetDateInfo } from '../../script/dday';

const CompTime = () => {

  const [_day, _setDay] = useState()
  const [_year, _setYear] = useState()
  const [_month, _setMonth] = useState()
  const [_date, _setDate] = useState()
  const [_ap, _setAp] = useState()
  const [_hour, _setHour] = useState()
  const [_min, _setMin] = useState()
  const [_sec, _setSec] = useState()

  const fnSetState = function () {
    const { day, year, month, date, ap, hour, min, sec } = fnGetDateInfo(new Date())//현재날짜
    _setDay(day)
    _setYear(year)
    _setMonth(month)
    _setDate(date)
    _setAp(ap)
    _setHour(hour)
    _setMin(min)
    _setSec(sec)
  }

  useEffect(() => {
    fnSetState() //바로 나와야되니까 한번
    let intervalID
    intervalID = setInterval(()=>{
      fnSetState()
    }, 1000)
return(()=>{
  clearInterval(intervalID)//타임스케줄러는 사라질때 항상 클린업을 해줘야함
})
  }, [])//여기서만 바꿀수있어서 그런거임

  return (
    <div className='now'>
      <time>
        <small>{_day}</small>
        <b>{_year}</b>-
        <b>{_month}</b>-
        <b>{_date}</b>
      </time>
      <time>
        <small>{_ap}</small>
        <b>{_hour}</b>:
        <b>{_min}</b>:
        <b>{_sec}</b>
      </time>

    </div>
  );
};

export default CompTime;