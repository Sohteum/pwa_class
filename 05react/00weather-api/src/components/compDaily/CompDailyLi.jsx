import React, { useContext } from 'react';
import { fnSetWeatherInfo } from '../../js/weather';
import { AppContext } from '../../App';

const CompDailyLi = ({ data }) => {

  const { _weatherData } = useContext(AppContext)

  const {
    day, snow, rain, date, mmdd, desc, icon, temp, tempMin, tempMax, tempMorn, tempDay, tempNight
  } = fnSetWeatherInfo(data, _weatherData.timezone)//하나는 어떤객체를 가공할래?data,하나는 타임존 총 두개의 파라미터를 받음



  return (
    <li>
      <a href='#'>
        <p className='date'>
          <span><i className="fa-solid fa-calendar-days"></i>{mmdd} ({day})</span>
          <span className='desc'>"{desc}"</span>
          <i className="fa-solid fa-arrow-down"></i>
        </p>

        <p className="info">
          <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt="" />
          <span className="temp">
            <i className="fa-solid fa-temperature-three-quarters"></i>
            <em> {tempMin} / {tempMax} &#176;c</em>
          </span>
          {
            (rain!==0) &&
            <span>
              <i className="fa-solid fa-umbrella"></i>
              <em>{rain}mm</em>
            </span>
          
          }
          {
            (snow!==0) &&
            <span>
              <i className="fa-solid fa-snowflake"></i>
              <em>{snow}mm</em>
            </span>
        //스트릭트 표현식을 사용해야 언디파인으로 나옴. 안그러면 폴스출력해서 0을 리턴
          }
        </p>
      </a>

      <div className="detail">
        detail
      </div>
    </li>
  );
};

export default CompDailyLi;