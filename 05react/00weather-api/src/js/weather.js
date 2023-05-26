import moment from "moment-timezone";
import { codeEnArr, codeKrArr } from "./conditionCode";

export const fnGetWeatherData = (latlngObj) => {
  return new Promise((resolve) => {
    const { lat, lng } = latlngObj
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&exclude={part}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    //.enb파일을 만드는데 환경변수라고 해서 숨겨야 할 파일을 두는것. api정보 숨기기가능 이거 한다음에 npm껐다가 다시 켜면 됨.
    // console.log(process.env.REACT_APP_OPEN_WEATHER_KEY);
    fetch(url) //외부파일을 읽어들인다. then이 나오면 비동기라는거자나
      .then((data) => {//여기는 스트링이 들어오고
        resolve(data.json())//여기서 스트링을 스크립트로 바꿈
      })
      .catch(() => {
        alert('날씨 정보를 받아오던 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요!')//여기 안에 throw error가 들어있어서 따로 안적어도됨
      })
  })
}

//날씨 정보를 가공해서 리턴하는 함수
export const fnSetWeatherInfo = (weatherDataObj, timezone) => {

  let sunrise; let sunset;
  if (weatherDataObj.sunrise) {
    sunrise = moment(weatherDataObj.sunrise * 1000).tz(timezone).format('A hh:mm:ss')
    sunset = moment(weatherDataObj.sunset * 1000).tz(timezone).format('A hh:mm:ss')
  } else {
    sunrise = sunset = '-- : -- : --'
  }
  let date = moment(weatherDataObj.dt * 1000).tz(timezone).format('YYYY년 M월 D일')
  let mmdd = moment(weatherDataObj.dt * 1000).tz(timezone).format('M월 D일')
  let time = moment(weatherDataObj.dt * 1000).tz(timezone).format('hh:mm:ss')
  let apm = moment(weatherDataObj.dt * 1000).tz(timezone).format('A')

  let dayArr = ['일', '월', '화', '수', '목', '금', '토']
  let day = dayArr[moment(weatherDataObj.dt * 1000).tz(timezone).day()]
  let temp; let tempMin; let tempMax; let tempMorn; let tempDay; let tempNight;
  if (typeof (weatherDataObj.temp) === 'object') {
    tempMin = (weatherDataObj.temp.min - 273.15).toFixed(1)
    tempMax = (weatherDataObj.temp.max - 273.15).toFixed(1)
    tempMorn = (weatherDataObj.temp.morn - 273.15).toFixed(1)
    tempDay = (weatherDataObj.temp.day - 273.15).toFixed(1)
    tempNight = (weatherDataObj.temp.night - 273.15).toFixed(1)
  } else {
    temp = (weatherDataObj.temp - 273.15).toFixed(1)
  }


  let icon = weatherDataObj.weather[0].icon
  let bg = weatherDataObj.weather[0].main
  let desc = weatherDataObj.weather[0].description
  desc = codeKrArr[codeEnArr.indexOf(desc)]
  let windDeg = weatherDataObj.wind_deg
  let windSpeed = weatherDataObj.wind_speed
  let humidity = weatherDataObj.humidity
  let rain = (weatherDataObj.rain) //삼항연산을 중복으로 사용함
    ? (typeof (weatherDataObj.rain) === 'object')
      ? weatherDataObj.rain['1h']
      : weatherDataObj.rain
    : 0
  let snow = (weatherDataObj.snow) //삼항연산을 중복으로 사용함
    ? (typeof (weatherDataObj.snow) === 'object')
      ? weatherDataObj.snow['1h']
      : weatherDataObj.snow
    : 0
  let uvi = weatherDataObj.uvi
  let uviDesc
  if (uvi < 3) uviDesc = '낮음'
  else if (uvi >= 3 && uvi < 6) uviDesc = '보통'
  else if (uvi >= 6 && uvi < 8) uviDesc = '높음'
  else if (uvi >= 8 && uvi < 11) uviDesc = '매우높음'
  else uviDesc = '위험'





  return { temp, icon, bg, desc, windDeg, windSpeed, humidity, rain, uvi, uviDesc, sunrise, sunset, date, day, time, apm, mmdd, tempMin, tempMax, tempMorn, tempDay, tempNight, snow }
}//fnSetWeatherInfo
