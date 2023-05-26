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
    temp, snow,
    icon, bg, desc, windDeg, windSpeed,
    humidity, rain, uvi, uviDesc,
    sunrise, sunset, date, day, time, apm
  } = fnSetWeatherInfo(_weatherData.current, _weatherData.timezone)




  //console.log(_weatherData);//바로 찾을 수 있는 이유: 웨더데이터가 유효해야 출력이 되므로 _weatherData데이터를 바로 사용할 수 있음

  // useEffect(()=>{ //업데이트 되었을때 함수를 다시 그려내기 복잡하니까 그런건데..일단 나중에 다시 쓰던가합시당
  // },[])


  const fnResetHandler = () => {
    let result = window.confirm('현재위치로 날씨 정보를 갱신하시겠습니까?')
    if (result) fnAppInit()
  }

  return (
    <div className='current-output' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/weather/${bg}.jpg)` }}>{/* 퍼블릭폴더 dksdp dlTsmsrj ckwdmfEo */}

      <button onClick={fnResetHandler} className='reload'>
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>

      <address>{/* 애니메이션 할려면 무조건 두개 필요 스판은 줄내림이 되면안되고 옆으로 두개를 나란히세움 그리고 두개를 동시에 움직이는데 두번째꺼가 나올때 원래위치로 돌려버리면 보는사람은 계속 돌아가는것처럼 보임. 줄내림 안되게 할려면  */}
        <span>{_address}</span>
        <span>{_address}</span>
      </address>

      <div className="circle-container">
        <div className="sunset">
          <CompSvg currentData={_weatherData.current} />
          <time className='riseTime'>
            {sunrise}
          </time>
          <time className='setTime'>
            {sunset}
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
            {
              (rain!==0) &&
                <span className="rain">
                  <i className="fa-solid fa-umbrella"></i>
                  <b>{rain}</b>
                  <small>mm/h</small>
                </span>
                
            }
            {
              (snow!==0)&&
              <span className="snow">
                <i className="fa-solid fa-snowflake"></i>
                <b>{snow}</b>
                <small>mm/h</small>
              </span>
               
            }{/* 스트릭트표현식을 사용하면 언디파인이 나와서 출력값이 없는거고, 눈이 있다면~이렇게 쓰면 폴스가 나와서 0이 리턴 */}
          </p>

          <p className='time-date'>
            <time className="time">
              <small>{apm}</small>
              {time}
            </time>
            <br />
            <time className="date">{date} ({day}) </time>

          </p>
        </div>

        <br />
        <br />
      </div>
    </div >
  );
};

export default CompCurrentOutput;
