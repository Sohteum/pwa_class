import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App';
import { fnGetWeatherData, fnSetWeatherInfo } from '../../js/weather';
import CompSvg from './CompSvg';
import { codeEnArr, codeKrArr } from '../../js/conditionCode';


const CompCurrentOutput = () => {

  const {
    _weatherData,
    _address, _setAddress,
    fnAppInit,
  } = useContext(AppContext)

  const {
    temp, sunriseHours, sunriseApm, sunriseMinutes,
    sunsetHours, sunsetApm, sunsetMinutes,
    icon, bg, desc, windDeg, windSpeed,
    humidity, rain, uvi, uviDesc,
    hour, apm, min, year, month, date, day
  } = fnSetWeatherInfo(_weatherData.current)




  //console.log(_weatherData);//바로 찾을 수 있는 이유: 웨더데이터가 유효해야 출력이 되므로 _weatherData데이터를 바로 사용할 수 있음

  // useEffect(()=>{ //업데이트 되었을때 함수를 다시 그려내기 복잡하니까 그런건데..일단 나중에 다시 쓰던가합시당
  // },[])


const fnResetHandler =()=>{
  let result = window.confirm('현재위치로 날씨 정보를 갱신하시겠습니까?')
  if(result) fnAppInit()
}

  return (
    <div className='current-output' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/weather/${bg}.jpg)` }}>{/* 퍼블릭폴더 dksdp dlTsmsrj ckwdmfEo */}

      <button onClick={fnResetHandler} className='reload'>
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>

      <address>{/* 애니메이션 할려면 무조건 두개 필요 스판은 줄내림이 되면안되고 옆으로 두개를 나란히세움 그리고 두개를 동시에 움직이는데 두번째꺼가 나올때 원래위치로 돌려버리면 보는사람은 계속 돌아가는것처럼 보임. 줄내림 안되게 할려면  */}
        <span>{_address}</span>
        <span>{_address}</span>
      </address>

      <div className="circle-container">
        <div className="sunset">
          <CompSvg currentData={_weatherData.current} />
          <time className='riseTime'>
            <small>{sunriseApm}</small>
            <b>{sunriseHours}:</b>
            <b>{sunriseMinutes}</b>
          </time>

          <time className='setTime'>
            <small>{sunsetApm}</small>
            <b>{sunsetHours}:</b>
            <b>{sunsetMinutes}</b>
          </time>

        </div>{/* sunset */}
        <div className="circle-container-inner">
          <p className='temp'>
            <em>{temp}<sup>&#176;c</sup></em>
            <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt="" />
            <span>
              <i className="fa-solid fa-user"></i>
              {/* <i>Feel</i> */}
              <b>23<sup>&#176;c</sup></b>
            </span>
          </p>
          <p className="desc">"{desc}"</p>

          <p className="etc">
            <span className="wind">
              <i style={{ transform: `rotate(${windDeg - 45}deg)` }} className="fa-solid fa-location-arrow"></i>
              <i className="fa-solid fa-wind"></i>
              <b>{windSpeed}</b>
              <small>m/s</small>

            </span>
            <span className="humidity">
              <i className="fa-solid fa-droplet"></i>
              <b>{humidity}</b>
              <small>%</small>

            </span>
            <span className="uvi">
              <i className="fa-solid fa-sun"></i>
              <b>{uvi}</b>
              <small>{uviDesc}</small>

            </span>
            <span className="rain">
              <i className="fa-solid fa-umbrella"></i>
              <b>{rain}</b>
              <small>mm/h</small>

            </span>
          </p>

          <p className='time-date'>
            <time className="time">{hour}:{min} {apm}</time>
            <br />
            <time className="date">{year}년{month}월{date}일({day})</time>

          </p>
        </div>

        <br />
        <br />
      </div>
    </div >
  );
};

export default CompCurrentOutput;

