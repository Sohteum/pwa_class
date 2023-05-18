import React, { useContext, useEffect, useState } from 'react';
import { fnDdayArrInit, fnGetDateInfo, fnTimer } from '../../script/dday';
import { DDayContext } from './CompDDay';


const CompListItem = ({ item }) => {

  const [_remainDays, _setRemainDays] = useState(0)
  const [_remainHours, _setRemainHours] = useState(0)
  const [_remainMinutes, _setRemainMinutes] = useState(0)
  const [_remainSeconds, _setRemainSeconds] = useState(0)

  const [_stroke1, _setStroke1] = useState(300)
  const [_stroke2, _setStroke2] = useState(24)
  const [_stroke3, _setStroke3] = useState(60)
  const [_stroke4, _setStroke4] = useState(60)
  const [_isActive, _setIsActive] = useState('')

  const {      //dday일정(객체)를 담고있는 배열
    _ddayArr, _setDdayArr,
    //dday일정을 가공해서 출력할 배열
    _ddayOutputArr, _setDdayOutputArr} = useContext(DDayContext)


  const { title, dday ,id} = item //item은 부모로부터 받은 props객체를 구조분해{id, title,  dday}
  const { day, year, month, date, ap, hour, min, sec, timeStamp } = fnGetDateInfo(dday)

  const fnTimerSetState = function () {
    let { diffSec, remainDays, remainHours, remainMinutes, remainSecs } = fnTimer(timeStamp)// 계속 똑같은거 써야하니까 함수로 만들어 set을 마니마니해야해
    _setRemainSeconds(remainSecs)
    _setRemainDays(remainDays)
    _setRemainHours(remainHours)
    _setRemainMinutes(remainMinutes)
    _setStroke1(remainDays) //300-300이면 선이 완전히 채워짐 그러니까 300빼기remaindays
    _setStroke2(remainHours)
    _setStroke3(remainMinutes)
    _setStroke4(remainSecs)
  }

  const fnMouseDownHandler = function () {
    _setIsActive('active')
  }

  const fnDelHandler = function () {
    if (window.confirm('DDay목록을 삭제하시겠습니까?')) {
      //지우는거 우리가 하기  스테이트로 목록을 지운다음에 로컬스토리지에 반영 
      // let ddayArr = [..._ddayArr].filter(v => v !== item)//필터는 새로운 값을 리턴하니까 
      let ddayArr = _ddayArr.filter(v => v.id !== id)
      _setDdayArr(ddayArr)  //_ddayArr는 다음 화면에 바뀐다
      _setDdayOutputArr(ddayArr)
      localStorage.setItem('ddayArrStorage', JSON.stringify(ddayArr))
    } else {
      _setIsActive('')
    }
  }

  useEffect(() => {
    fnTimerSetState()//시작할때 한번, 인터벌마다 계속
    let intervalID
    intervalID = setInterval(() => {
      fnTimerSetState()
    }, 1000)
    return (() => {
      clearInterval(intervalID)
    })
  }, [])

  return (
    <li className={_isActive} onMouseDown={fnMouseDownHandler} onClick={fnDelHandler} >
      <div className='meta'>
        <h3>{title}</h3>
        <p>
          <time className='date'>
            <em>{year}</em>-
            <em>{month}</em>-
            <em>{date}</em>-
            <small>{day}</small>
          </time>

          <time className='time'>
            <small>{ap}</small>
            <em>{hour}</em>:
            <em>{min}</em>:
            <em>{sec}</em>
          </time>
        </p>
      </div>


      <ul className='timer-output'> {/* 얘네를 바꿀려면 아무데서나 못하고 유즈이펙트에서만 할 수 있음 */}

        <li>
          <figure>
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='47' /> {/* 오프셋이 0이면 사라지고 300이면 원이 그려짐 */}
              <circle cx='50' cy='50' r='47' pathLength='300' strokeDasharray='300' strokeDashoffset={_stroke1} />
            </svg>
            <figcaption> {_remainDays}</figcaption>
          </figure>
          <p>
            <em>day</em>
            <small>0~ 300</small>
          </p>
        </li>

        <li>
          <figure>
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='47' />
              <circle cx='50' cy='50' r='47' pathLength='24' strokeDasharray='24' strokeDashoffset={_stroke2} />
            </svg>
            <figcaption> {_remainHours}</figcaption>
          </figure>
          <p>
            <em>hour</em>
            <small>0~ 24</small>
          </p>
        </li>

        <li>
          <figure>
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='47' />
              <circle cx='50' cy='50' r='47' pathLength='60' strokeDasharray='60' strokeDashoffset={_stroke3} />
            </svg>
            <figcaption>{_remainMinutes}</figcaption>
          </figure>
          <p>
            <em>min</em>
            <small>0~ 60</small>
          </p>
        </li>

        <li>
          <figure>
            <svg viewBox='0 0 100 100'>
              <circle cx='50' cy='50' r='47' />
              <circle cx='50' cy='50' r='47' pathLength='60' strokeDasharray='60' strokeDashoffset={_stroke4} />
            </svg>
            <figcaption> {_remainSeconds}</figcaption>
          </figure>
          <p>
            <em>sec</em>
            <small>0~ 60</small>
          </p>
        </li>
      </ul>
    </li>
  );
};

export default CompListItem;