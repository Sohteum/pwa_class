import React, { useContext } from 'react';
import $ from 'jquery';
import { fnSetWeatherInfo } from '../../js/weather';
import { AppContext } from '../../App';

const CompDailyLi = ({ data }) => {

  const { _weatherData } = useContext(AppContext)

  const {
    feelsLike,
    day, date, mmdd, desc, icon,
    clouds, humidity, snow, rain, pressure, uvi, uviDesc, windDeg, windSpeed,
    temp, tempMin, tempMax, tempMorn, tempDay, tempNight
  } = fnSetWeatherInfo(data, _weatherData.timezone)//하나는 어떤객체를 가공할래?data,하나는 타임존 총 두개의 파라미터를 받음

  const fnAccordion = function (e) {
    e.preventDefault()
    $(`.comp-daily li .detail`).stop().slideUp()
    $(e.currentTarget).siblings('.detail').stop().slideToggle() //이게 디스 커런트를 쓰는 이유는 자식찾으면 안되니까
    $(`.comp-daily li a`).not($(e.currentTarget)).removeClass('active')
    $(e.currentTarget).toggleClass('active')
  }

  return (
    <li>
      <a href='#' onClick={fnAccordion}>

        <p className='date'>
          <span><i className="fa-solid fa-calendar-days"></i>{mmdd} ({day})</span>
          <span className='desc'>"{desc}"</span>
          {/* <i className="fa-solid fa-arrow-down"></i> */}

        </p>

        <p className="info">
          <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt="" />
          <span className="temp">
            <i className="fa-solid fa-temperature-three-quarters"></i>
            <em> {tempMin} / {tempMax} &#176;c</em>
          </span>
          {
            (rain !== 0) &&
            <span>
              <i className="fa-solid fa-umbrella"></i>
              <em>{rain}mm</em>
            </span>

          }
          {
            (snow !== 0) &&
            <span>
              <i className="fa-solid fa-snowflake"></i>
              <em>{snow}mm</em>
            </span>
            //스트릭트 표현식을 사용해야 언디파인으로 나옴. 안그러면 폴스출력해서 0을 리턴
          }
        </p>
        <i className="fa-solid fa-chevron-down"></i>
      </a>

      <div className="detail">
        <p>
          <span>
            <i className="fa-solid fa-face-smile"></i>
            <b>체감온도</b>
            <em>{feelsLike}<small>&#176;c</small></em>
          </span>
        </p>
        <p>
          <span>
            <i className="fa-solid fa-location-arrow"></i>
            <b>풍향</b>
            <em>{windDeg}<small>&#176;</small> </em>
          </span>

          <span>
            <i className="fa-solid fa-wind"></i>
            <b>풍속</b>
            <em>{windSpeed}<small>m/s</small></em>
          </span>
        </p>
        <p>
          <span>
            <i className="fa-solid fa-cloud"></i>
            <b>구름</b>
            <em>{clouds}<small>%</small></em>
          </span>
        </p>

        <p>
          <span>
            <i className="fa-solid fa-droplet"></i>
            <b>습도</b>
            <em>{humidity}<small>%</small></em>
          </span>
        </p>
        <p>
          <span>
            <i className="fa-solid fa-angles-down"></i>
            <b>기압</b>
            <em>{pressure}<small>hPa</small></em>
          </span>
        </p>
        <p>
          <span>
            <i className="fa-solid fa-sun"></i>
            <b>자외선</b>
            <em>{uvi}, ({uviDesc})</em>
          </span>
        </p>

      </div>
    </li>
  );
};

export default CompDailyLi;