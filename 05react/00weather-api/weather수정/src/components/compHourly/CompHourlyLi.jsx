import React from 'react';
import { AppContext } from '../../App';
import { fnGetWeatherData, fnSetWeatherInfo } from '../../js/weather';
import { useContext } from 'react';

const CompHourlyLi = ({ data }) => {

  const { _weatherData } = useContext(AppContext)

  const {
    icon,
    date, day, apm, mmdd, time, hhmm,
    rain, snow,
  } = fnSetWeatherInfo(data, _weatherData.timezone)

  return (
    <li>
      <p>
        <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt="" />
      </p>
      <p>
        {mmdd}
      </p>
      <p>
        {hhmm}
      </p>
      <p>
        {
          (rain !== 0) && <><i className="fa-solid fa-umbrella"></i>{rain}</>
        }
        {
          (snow !== 0) && <><i className="fa-solid fa-snowflake"></i>{snow}</>
        }
      </p>
    </li>
  );
};

export default CompHourlyLi;